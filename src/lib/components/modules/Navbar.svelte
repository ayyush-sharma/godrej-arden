<script module>
	// Need these for the transitions to work
	import { fade, fly } from 'svelte/transition';
</script>

<script>
	// Svelte 5 State
	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	// Navigation Links
	const navLinks = [
		{ name: 'Home', href: '#' },
		{ name: 'Overview', href: '#overview' },
		{ name: 'Amenities', href: '#amenities' },
		{ name: 'Price List', href: '#pricing' },
		{ name: 'Gallery', href: '#gallery' },
		{ name: 'Location', href: '#location' }
	];

	const phoneNumber = '+91 98765 43210';

	// Handle Scroll to change navbar background
	function handleScroll() {
		isScrolled = window.scrollY > 50;
	}

	// Svelte 5 way to add window event listener
	import { onMount } from 'svelte';
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
				class="h-10 md:h-12 brightness-0 invert"
			/>
		</a>

		<div class="hidden md:flex items-center gap-8">
			<ul class="flex items-center gap-6">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="text-white/90 text-sm font-medium uppercase tracking-wide hover:text-[#B18E4E] transition-colors relative group"
						>
							{link.name}
							<span
								class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B18E4E] transition-all duration-300 group-hover:w-full"
							></span>
						</a>
					</li>
				{/each}
			</ul>

			<a
				href="tel:{phoneNumber}"
				class="flex items-center gap-2 bg-[#B18E4E] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-[#9a7a40] transition-all duration-300 shadow-[0_0_15px_rgba(177,142,78,0.4)] hover:scale-105"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
					/>
				</svg>
				{phoneNumber}
			</a>
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
			<p class="text-gray-400 text-xs uppercase tracking-widest mb-3 text-center">For Enquiries</p>
			<a
				href="tel:{phoneNumber}"
				class="flex items-center justify-center gap-3 w-full bg-[#B18E4E] text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
					/>
				</svg>
				{phoneNumber}
			</a>
		</div>
	</div>
{/if}
