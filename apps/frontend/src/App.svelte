<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Main from "./pages/Main.svelte";
  import Redirect from "./pages/Redirect.svelte";
  import About from "./pages/About.svelte";
</script>

<Router>
  <main>
    <Route path="/about" component={About} />
    <Route path="/:code" component={Redirect} />
    <Route component={Main} />
  </main>
</Router>
