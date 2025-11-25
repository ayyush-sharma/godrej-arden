<script module>
	// Need these for the transitions to work
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PhoneCard from '../cards/phoneCard.svelte';
	import GeneralModal from '../modals/GeneralModal.svelte';
</script>

<script>
	// Svelte 5 State
	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	// Navigation Links
	const navLinks = [
		{ name: 'Home', href: '#' },
		{ name: 'Price List', href: '#pricing' },
		{ name: 'Overview', href: '#overview' },
		{ name: 'Amenities', href: '#amenities' },
		{ name: 'Gallery', href: '#gallery' },
		{ name: 'Location', href: '#location' }
	];

	const phoneNumber = '+91 98765 43210';

	// Handle Scroll to change navbar background
	function handleScroll() {
		isScrolled = window.scrollY > 50;
	}

	// Svelte 5 way to add window event listener

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		// Prevent body scrolling when menu is open
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	function closeMenu() {
		isMenuOpen = false;
		document.body.style.overflow = 'auto';
	}
	function smoothScroll(e, href) {
		e.preventDefault(); // Stop the default "jump"

		// If mobile menu is open, close it
		if (isMenuOpen) closeMenu();

		// 1. Handle "Home" or empty links
		if (href === '#' || !href) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		// 2. Find the target element
		const targetId = href.replace('#', '');
		const element = document.getElementById(targetId);

		if (element) {
			// 3. Calculate position minus the Navbar height (approx 80px-100px)
			const headerOffset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<nav
	class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent 
	${isScrolled ? 'bg-black/80 backdrop-blur-md py-3 border-white/10 shadow-2xl' : 'bg-transparent py-5'}`}
>
	<div class="container mx-auto px-4 flex justify-between items-center">
		<a href="#" class="relative z-50">
			<img
				src="https://www.godrejardensigma3noida.com/assets/img/logo.svg"
				alt="Logo"
				class="h-8 md:h-12 brightness-0 invert"
			/>
		</a>

		<div class="hidden md:flex items-center gap-8">
			<ul class="flex items-center gap-6">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="text-white/90 text-lg font-medium uppercase tracking-wide hover:text-[#B18E4E] transition-colors relative group"
						>
							{link.name}
							<span
								class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B18E4E] transition-all duration-300 group-hover:w-full"
							></span>
						</a>
					</li>
				{/each}
			</ul>

			<PhoneCard />
		</div>

		<button
			onclick={toggleMenu}
			class="md:hidden relative z-50 text-white focus:outline-none"
			aria-label="Toggle Menu"
		>
			{#if isMenuOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

{#if isMenuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
		onclick={closeMenu}
		transition:fade={{ duration: 200 }}
	></div>

	<div
		class="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-[#0F0F0F] border-l border-white/10 z-40 shadow-2xl flex flex-col justify-between md:hidden"
		transition:fly={{ x: 300, duration: 300 }}
	>
		<div class="p-8 pt-24">
			<ul class="flex flex-col gap-6">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							onclick={closeMenu}
							class="text-2xl font-semibold text-white/90 hover:text-[#B18E4E] transition-colors block border-b border-white/5 pb-2"
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="p-6 bg-black/50 border-t border-white/10">
			<p class="text-gray-400 text-base uppercase tracking-widest mb-3 text-center">
				For Enquiries
			</p>
			<PhoneCard />
		</div>
	</div>
{/if}
