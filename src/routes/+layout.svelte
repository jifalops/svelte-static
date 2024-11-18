<script lang="ts">
	import { app } from '$lib';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		app.telemetry.pageView(window.location.pathname);
	});
</script>

<header></header>
<main>
	<slot />
</main>
<footer></footer>
