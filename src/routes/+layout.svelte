<script lang="ts">
  import { app, log } from '$lib';
  import { onMount } from 'svelte';
  import '../app.css';

  onMount(() => {
    log.info(performance.now(), 'Page loaded.');
    app.telemetry.pageView(window.location.pathname);
  });
</script>

<header></header>
<main>
  <slot />
</main>
<footer></footer>
