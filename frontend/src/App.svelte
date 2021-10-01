<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Main from "./components/Main.svelte";
  import Redirect from "./components/Redirect.svelte";
</script>

<Router>
  <main>
    <Route path="/:code" component={Redirect} />
    <Route component={Main} />
  </main>
</Router>

<style>
  :root {
    background-color: #23272a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
