<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";

  export let code;

  let response = "Wait, we find the link for this code...";

  document.title = "Pauperial - Redirect";

  onMount(async () => {
    const params = new URL(document.location.href).searchParams;
    const res = await fetch(`/api/code/${code}?${params.toString()}`, { method: "GET" });

    const respData = await res.json();

    if (res.ok) {
      window.location.href = respData.link ?? window.location.origin;
    } else {
      response = respData.message;
    }
  });
</script>

<div>
  <div class="hero min-h-screen select-none">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <p class="mb-5 text-white text-2xl">{response}</p>
      </div>
    </div>
  </div>

  <Footer />
</div>
