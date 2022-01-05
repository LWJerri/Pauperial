<script lang="ts">
  import Footer from "../components/Footer.svelte";

  const origin = window.location.origin;

  $: form = { link: null, secret: null };
  $: result = {} as { error: boolean; code: string; link: string; qrData: string; secret: string; url: string; message: string };

  async function sendURL() {
    const request = await fetch("/api/code", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        ...form,
        origin,
      }),
    });

    result = await request.json();

    result.url = generateUrl();

    resetForm();
  }

  function generateUrl() {
    const url = new URL(`${origin}/${result.code}`);

    url.searchParams.append("secret", result.secret);

    url.searchParams.forEach((value, key) => {
      if (value == "null") {
        url.searchParams.delete(key);
      }
    });

    return url.toString();
  }

  function resetForm() {
    form.link = null;
    form.secret = null;
  }
</script>

<div>
  <div class="hero min-h-screen">
    <div class="text-center hero-content text-white">
      <div class="max-w-md">
        <h1 class="mb-10 text-6xl font-bold outline-none select-none">Pauperial</h1>

        <div class="form-control">
          <input bind:value={form.link} type="text" placeholder="Put your URL" class="input input-bordered mb-5 text-lg select-none" />
          <input
            bind:value={form.secret}
            type="text"
            placeholder="Secret code (optional)"
            class="input input-bordered mb-5 text-lg select-none"
          />
        </div>

        <button class="btn btn-outline btn-accent btn-wide" on:click={sendURL}>＾▽＾</button>

        {#if result.error}
          <div class="alert alert-error mt-5">
            <div class="flex-1">
              <p>{result.message}</p>
            </div>
          </div>
        {/if}

        {#if result.code}
          <div class="alert alert-info mt-5">
            <div class="flex-1">
              <a class="link link-hover text-lg" href={result.url} target="_blank">{result.url}</a>
            </div>
          </div>

          {#if result.qrData}
            <figure class="pt-10">
              <img src={result.qrData} class="rounded-xl mx-auto" alt="QR_CODE" />
            </figure>
          {/if}
        {/if}
      </div>
    </div>
  </div>

  <Footer />
</div>
