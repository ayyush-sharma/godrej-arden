<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	
	let { children } = $props();
	injectAnalytics();
</script>

<svelte:head>
	<link rel="icon" href="/logo/logo2.png" />
</svelte:head>

{@render children()}
