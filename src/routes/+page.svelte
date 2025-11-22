<script>
	import AboutUs from '$lib/components/modules/AboutUs.svelte';
	import Amenities from '$lib/components/modules/Amenities.svelte';
	import FooterAbout from '$lib/components/modules/FooterAbout.svelte';
	import Gallery from '$lib/components/modules/Gallery.svelte';
	import Highlights from '$lib/components/modules/Highlights.svelte';
	import LandingPage from '$lib/components/modules/LandingPage.svelte';
	import Navbar from '$lib/components/modules/Navbar.svelte';
	import NearbyConnectivity from '$lib/components/modules/NearbyConnectivity.svelte';
	import PriceSection from '$lib/components/modules/PriceSection.svelte';
	import Pricing from '$lib/components/modules/Pricing.svelte';
</script>

<div class="flex flex-col w-full min-h-screen overflow-x-hidden relative">
	<Navbar />
    <LandingPage/>
    <Pricing/>
	<AboutUs />
	<Highlights />
	<!-- <PriceSection /> -->
    <Amenities/>
    <Gallery/>
    <NearbyConnectivity/>
    <FooterAbout/>
</div>
