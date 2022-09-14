<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Main from "./pages/Main.svelte";
</script>

<Router>
  <main>
    <Route component={Main} />
  </main>
</Router>
