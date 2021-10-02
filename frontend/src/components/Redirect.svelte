<script lang="ts">
  import { onMount } from "svelte";

  export let code;
  let response = "Wait...";

  onMount(async () => {
    const params = new URL(document.location.href).searchParams;
    const res = await fetch(`/api/code/${code}?${params.toString()}`, { method: "GET" });
    const respData = await res.json();

    if (res.ok) {
      window.location.href = respData.link ?? window.location.origin;
    } else {
      console.log(respData);
      response = respData.message;
    }
  });
</script>

<p>{response}</p>

<style>
  p {
    color: white;
    font-size: 25px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>