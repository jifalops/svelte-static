<script lang="ts">
	import { app } from '$lib';
	import { API_URL } from '$lib/config';
	import { onMount } from 'svelte';
	import SvelteLogo from 'virtual:icons/logos/svelte-icon';

	let ad: HTMLElement;
	let testResult = $state('');

	onMount(() => {
		app.advertising.loadAd(ad, 'adunit', 'auto');
		testApi();
	});

	async function testApi() {
		const res = await fetch(`${API_URL}/test`);
		testResult = JSON.stringify(await res.json());
	}
</script>

<article class="p-2">
	<h1>Welcome to SvelteKit <SvelteLogo class="m-2 inline w-8" /></h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation.
	</p>
	<p>API test: {testResult}</p>
	<footer>
		<ins bind:this={ad} class="block h-16 w-64"></ins>
	</footer>
</article>
