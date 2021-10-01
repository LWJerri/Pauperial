<script lang="ts">
  import { onMount } from "svelte";

  export let code;
  const API_URL = "http://localhost:4000/code/";

  onMount(async () => {
    const res = await fetch(`${API_URL}${code}`, { method: "GET" });
    const respData = await res.json();

    window.location.href = respData.link ?? window.location.origin;
  });
</script>

<p>Wait...</p>

<style>
  p {
    color: white;
  }
</style>
