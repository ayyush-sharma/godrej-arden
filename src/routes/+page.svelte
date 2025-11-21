<script>
	import AboutUs from '$lib/components/modules/AboutUs.svelte';
	import Amenities from '$lib/components/modules/Amenities.svelte';
	import Highlights from '$lib/components/modules/Highlights.svelte';
	import LandingPage from '$lib/components/modules/LandingPage.svelte';
	import Navbar from '$lib/components/modules/Navbar.svelte';
	import PriceSection from '$lib/components/modules/PriceSection.svelte';
</script>

<div class="flex flex-col relative">
	<Navbar />
    <LandingPage/>
	<AboutUs />
	<Highlights />
	<PriceSection />
    <Amenities/>
</div>
