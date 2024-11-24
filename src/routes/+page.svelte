<script lang="ts">
  import { app } from '$lib';
  import { API_URL } from '$lib/config';
  import { onMount } from 'svelte';
  import SvelteLogo from 'virtual:icons/logos/svelte-icon';

  let ad: HTMLElement;
  let testResult = $state('');

  onMount(() => {
    app.adDisplay.loadAd(ad, 'adunit', 'auto');
    testApi();
  });

  async function testApi() {
    const res = await fetch(`${API_URL}/test`);
    testResult = JSON.stringify(await res.json());
  }

  function logConversion() {
    app.adCampaign.trackConversion('sign_up');
  }

  function logError() {
    app.reporting.reportError(new Error('Test error'), 'Test error message');
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="My Home Page" />
</svelte:head>

<article class="p-2">
  <header>
    <hgroup>
      <h1>Welcome to SvelteKit <SvelteLogo class="m-2 inline w-8" /></h1>
      <p>
        Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation.
      </p>
    </hgroup>
  </header>
  <section>
    <p>API test: {testResult}</p>
  </section>
  <section class="flex gap-4 py-4">
    <button onclick={logConversion}>Log User Conversion</button>
    <button onclick={logError}>Report Error</button>
  </section>
  <footer>
    <ins bind:this={ad} class="h-16 w-64"></ins>
  </footer>
</article>
