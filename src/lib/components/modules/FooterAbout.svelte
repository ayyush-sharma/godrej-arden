<script>
	import GeneralModal from '../modals/GeneralModal.svelte';

	// Key highlights to visualised the text
	const highlights = [
		{
			label: 'Legacy',
			value: '125 Years',
			icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
		},
		{
			label: 'Presence',
			value: 'Pan India',
			icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
		},
		{
			label: 'Quality',
			value: 'Cutting Edge',
			icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
		}
	];
</script>

<footer class="bg-[#050505] pt-24 pb-10 border-t border-white/10">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
			<div class="space-y-8">
				<img
					src="/logo/logo.svg"
					alt="Godrej Properties Logo"
					class="h-12 brightness-0 invert opacity-90"
				/>

				<div class="space-y-6">
					<h2 class="text-3xl md:text-4xl font-bold text-white">
						Legacy of <span class="text-[#B18E4E] font-serif italic">Trust & Excellence</span>
					</h2>

					<p class="text-gray-400 leading-relaxed text-lg">
						Godrej Properties was founded in 1897, and has ever since pioneered with its rich
						knowledge in the real estate sector. It is one of the leading real estate developers in
						India.
					</p>
					<p class="text-gray-400 leading-relaxed text-lg">
						The firm's properties stand out for their lovely architecture, quality residences,
						tranquil, lush environs, and use of cutting-edge technologies. With a grand legacy of
						125 years, Godrej Properties has changed the skyline of many cities in the country.
					</p>
				</div>

				<div class="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
					{#each highlights as item}
						<div class="flex flex-col gap-2">
							<div
								class="w-10 h-10 rounded-full bg-[#B18E4E]/10 flex items-center justify-center text-[#B18E4E]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
								</svg>
							</div>
							<div>
								<h4 class="text-white font-bold text-lg">{item.value}</h4>
								<p class="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="relative">
				<div
					class="absolute inset-0 bg-[#B18E4E] blur-[100px] opacity-10 pointer-events-none"
				></div>
				<GeneralModal />
			</div>
		</div>

		<div
			class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"
		></div>

		<div class="flex flex-col gap-8 text-center md:text-left">
			<div class="bg-white/5 border border-white/5 rounded-xl p-6 backdrop-blur-sm">
				<div
					class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm"
				>
					<div class="flex items-center gap-3">
						<div
							class="w-10 h-10 bg-[#B18E4E] rounded text-black font-bold flex items-center justify-center text-xs"
						>
							RERA
						</div>
						<div class="text-left">
							<p class="text-white font-semibold">
								Project Registered under Government of India RERA Act 2016
							</p>
							<p class="text-xs text-gray-500">Registration No UPRERAAGT24588</p>
						</div>
					</div>
					<div class="md:text-right block  ">
						<p class="text-[#B18E4E]">CHAUHAN ESTATE</p>
						<p class="text-xs text-gray-500">REG NO 09ELXPK8240J1Z8</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
				<div>
					<h4 class="text-white font-bold mb-2 uppercase tracking-wider text-xs">Site Address</h4>
					<p>
						Godrej Arden: Sigma Group Housing Society, Sigma III, Greater Noida, Uttar Pradesh
						201315.
					</p>
				</div>
				<div class="md:text-right">
					<h4 class="text-white font-bold mb-2 uppercase tracking-wider text-xs">
						Corporate Office
					</h4>
					<p>
						Godrej Properties: Unit No. 5C, 5th Floor, Godrej One, Pirojshanagar, Vikhroli East,
						Mumbai - 400 079.
					</p>
				</div>
			</div>

			<div class="border-t border-white/5 pt-6">
				<p class="text-[10px] leading-relaxed text-gray-600 text-justify">
					<span class="text-[#B18E4E] font-bold">Disclaimer:</span> We are an authorised marketing partner
					for this project. Provided content is given by respective owners and this website and content
					is for information purpose only and it does not constitute any offer to avail for any services.
					Prices mentioned are subject to change without prior notice and properties mentioned are subject
					to availability. You can expect a call, SMS or emails on details registered with us.
				</p>
				<p class="text-[10px] text-gray-700 mt-4 text-center">
					© {new Date().getFullYear()} Godrej Arden Partner. All Rights Reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
