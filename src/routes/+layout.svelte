<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();
	injectAnalytics();
</script>

<svelte:head>
	<link rel="icon" href="/logo/logo2.png" />
</svelte:head>

{@render children()}

<div class="flex flex-col fixed bottom-7 right-7 z-50 rounded-full overflow-hidden w-12 h-12">
  <a
    href="https://api.whatsapp.com/send?phone=919958720207&text=Hello%2C%20I%E2%80%99m%20interested%20in%20Godrej%20Arden.%20Please%20share%20pricing%20and%20availability%20details."
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/ws.png" alt="whatsapp" />
  </a>
</div>

