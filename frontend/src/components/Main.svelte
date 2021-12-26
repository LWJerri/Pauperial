<script lang="ts">
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

<div class="main">
  <h1 class="title">Pauperial</h1>
  <input bind:value={form.link} class="input" required placeholder="Paste your URL" />
  <br />
  <input bind:value={form.secret} class="input" placeholder="Secret code (optional)" />
  <br />
  <button type="button" on:click={sendURL} class="button"><b>＾▽＾)</b></button>
  <br />

  {#if result.error}
    <p class="alert">{result.message}</p>
  {/if}

  {#if result.code}
    <a href={result.url} target="_blank" class="ready">{result.url}</a>

    <br />

    {#if result.qrData}
      <img class="qrCode" src={result.qrData} alt="SHORT_LINK" />
    {/if}
  {/if}
</div>

<style>
  .qrCode {
    margin-top: 0.938rem;
  }

  .alert {
    color: white;
    font-size: 1.25rem;
  }

  .ready {
    text-decoration: underline;
    color: white;
    font-size: 1.25rem;
  }

  .main {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #eb459e;
    font-size: 3.438rem;
    text-transform: uppercase;
    margin-bottom: 4.688rem;
    outline: none;
  }

  .input {
    background-color: white;
    color: black;
    border: none;
    outline: none;
    font-size: 1.25rem;
    padding: 0.313rem 0rem 0.313rem 0rem;
    width: 21.875rem;
    margin-bottom: 3.125rem;
    border-radius: 0.938rem;
  }

  @media screen and (max-width: 22.188rem) {
    .input {
      width: 17.5rem;
    }
  }

  br {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .button {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
    font-size: 1.563rem;
    font-weight: 200;
    letter-spacing: 0.063rem;
    padding: 0.813rem 3.125rem 0.813rem;
    outline: 0;
    border: 0.063rem solid black;
    border-radius: 0.938rem;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 1.75rem;
  }

  .button::after {
    content: "";
    background-color: #5865f2;
    border-radius: 0.938rem;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 0.438rem;
    left: 0.438rem;
    transition: 0.2s;
  }

  .button:hover::after {
    background-color: #ed4245;
    top: 0rem;
    left: 0rem;
  }
</style>
