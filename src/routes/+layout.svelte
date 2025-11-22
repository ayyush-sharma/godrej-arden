<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logo/logo2.png" />
</svelte:head>

{@render children()}
