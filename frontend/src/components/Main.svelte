<script lang="ts">
  import qr from "qrcode";

  let url;
  let code = null;
  let qrCode = null;
  const API_URL = "http://localhost:4000/";

  async function sendURL() {
    const res = await fetch(`${API_URL}code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `link=${url}`,
    });

    const respData = await res.json();
    code = respData.code;

    qr.toDataURL(`${window.location.origin}/${code}`, (err, src) => {
      if(err) return qrCode = null;

      qrCode = src;
    });
  }
</script>

<div class="main">
  <h1 class="title">Pauperial</h1>
  <input bind:value={url} class="input" placeholder="Paste your URL" />
  <br />
  <button type="button" on:click={sendURL} class="button"><b>＾▽＾)</b></button>
  <br />
  {#if code}
    <a href="{window.location.origin}/{code}" target="_blank" class="ready">{window.location.origin}/{code}</a>
    
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
