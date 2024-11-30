<script lang="ts">
  import { app, log } from '$lib';
  import { onMount } from 'svelte';
  import '../app.css';

  log.info(performance.now().toFixed(1), 'Loading', window.location.pathname);
  onMount(() => {
    log.info(performance.now().toFixed(1), 'Loaded', window.location.pathname);
    app.telemetry.pageView(window.location.pathname);
  });
</script>

<header></header>
<main>
  <slot />
</main>
<footer></footer>
