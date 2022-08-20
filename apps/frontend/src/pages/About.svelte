<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";

  document.title = "Pauperial - About & Support";

  $: form = { email: null, text: null };
  $: response = {} as { error: boolean; message: string };
  $: stats = {} as { error: boolean; total: number; today: number };

  onMount(async () => {
    const statsReponse = await fetch("/api/stats", { method: "GET" });

    stats = await statsReponse.json();
  });

  async function sendURL() {
    const request = await fetch("/api/message", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ form }),
    });

    response = await request.json();

    resetForm();
  }

  function resetForm() {
    form.email = null;
    form.text = null;
  }
</script>

<div>
  <div class="hero min-h-screen">
    <div class="flex-col justify-center hero-content lg:flex-row">
      <div class="text-center lg:text-left">
        <h1 class="mb-5 text-5xl font-bold outline-none select-none">Pauperial</h1>
        <p class="mb-10 select-none">Small project for converting very loooooong links to pretty short links.</p>

        <a href="/" class="btn btn-outline btn-accent btn-wide mb-2">Main page</a>
      </div>

      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <p class="text-center mb-5 text-lg select-none">Contact with developer</p>

          {#if response.error}
            <div class="alert alert-error mb-5">
              <div class="flex-1">
                <p>{response.message}</p>
              </div>
            </div>
          {:else if response.message && response.message.length > 0}
            <div class="alert alert-info mb-5">
              <div class="flex-1">
                <p>{response.message}</p>
              </div>
            </div>
          {/if}

          <div class="form-control mb-5">
            <input type="text" bind:value={form.email} placeholder="Type your email" class="input input-bordered" />
          </div>

          <div class="form-control mb-5">
            <textarea bind:value={form.text} class="textarea h-24 textarea-bordered" placeholder="Type your text" />
          </div>

          <div class="form-control mb-5">
            <button class="btn btn-outline btn-accent" on:click={async () => await sendURL()}>Send message</button>
          </div>

          <a href="https://github.com/LWJerri/Pauperial" target="_blank" class="link link-hover mb-2 select-none"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>

  {#if !stats.error}
    <div class="text-center text-4xl font-bold mt-20 select-none uppercase">
      <p>Statistics</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-20 mt-20 select-none">
      <div class="card text-center shadow-lg">
        <div class="card-body">
          <h2 class="card-title">Total</h2>
          <p>
            Created {stats.total ?? 0} codes!
          </p>
        </div>
      </div>

      <div class="card text-center shadow-lg">
        <div class="card-body">
          <h2 class="card-title">Today</h2>
          <p>
            Created {stats.today ?? 0} codes!
          </p>
        </div>
      </div>
    </div>
  {/if}

  <Footer />
</div>
