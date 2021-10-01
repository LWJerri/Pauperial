<script lang="ts">
  import { generateQr } from '../helpers/qr';

  let link;
  let secret = null;

  let qrCode = null;
  
  const API_URL = "http://localhost:4000";
  $: result = {} as { secret: string, code: string, url: string }

  async function sendURL() {
    const request = await fetch(`${API_URL}/code`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        link,
        secret,
      }),
    });

    result = await request.json();
    result.url = generateUrl()

    qrCode = await generateQr(`${window.location.origin}/${result.code}`);

    resetForm()
  }

  function generateUrl() {
    const url = new URL(`${window.location.origin}/${result.code}`)
    url.searchParams.append('secret', result.secret)
    
    url.searchParams.forEach((value, key) => {
      if (!value) {
        url.searchParams.delete(key)
      }
    })

    return url.toString()
  }

  function resetForm() {
    link = null;
    secret = null;
  }
</script>

<div class="main">
  <h1 class="title">Pauperial</h1>
  <input bind:value={link} class="input" required placeholder="Paste your URL" />
  <br>
  <input bind:value={secret} class="input" placeholder="Paste secret (if needed)" />
  <br />
  <button type="button" on:click={sendURL} class="button"><b>＾▽＾)</b></button>
  <br />
  {#if result.code}
    <a href="{result.url}" target="_blank" class="ready">{result.url}</a>
    
    <br/>
    
    {#if qrCode}
      <img class="test" src={qrCode} alt="SHORT_LINK">
    {/if}
  {/if}
</div>

<style>
  .test{
    margin-top: 15px;
  }
  .ready {
    text-decoration: underline;
    color: white;
    font-size: 20px;
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
    font-size: 55px;
    text-transform: uppercase;
    margin-bottom: 75px;
    outline: none;
  }

  .input {
    background-color: white;
    color: black;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 5px 0px 5px 0px;
    width: 350px;
    margin-bottom: 50px;
    border-radius: 15px;
  }

  @media screen and (max-width: 355px) {
    .input {
      width: 280px;
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
    font-size: 25px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 25px;
  }

  .button::after {
    content: "";
    background-color: #5865f2;
    border-radius: 15px;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  .button:hover::after {
    background-color: #ed4245;
    top: 0px;
    left: 0px;
  }
</style>
