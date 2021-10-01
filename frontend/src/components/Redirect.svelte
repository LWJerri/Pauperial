<script lang="ts">
  import { onMount } from "svelte";

  export let code;
  let response = 'Wait...'
  const API_URL = "http://localhost:4000/code/";

  onMount(async () => {
    const params = (new URL(document.location.href)).searchParams;
    const res = await fetch(`${API_URL}${code}?${params.toString()}`, { method: "GET" });
    const respData = await res.json();
    
    if (res.ok) {
      window.location.href = respData.link ?? window.location.origin;
    } else {
      console.log(respData)
      response = respData.message
    }
  });
</script>

<p>{response}</p>

<style>
  p {
    color: white;
  }
</style>
