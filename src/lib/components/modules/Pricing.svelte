<script>
	// Pricing Data
	const pricingData = [
		{
			type: '2 BHK',
			area: '1375 Sq.Ft',
			price: '₹ 2.30 Cr*',
			suffix: 'Onwards'
		},
		{
			type: '3 BHK',
			area: '1850 - 2450 Sq.Ft',
			price: '₹ 3.00 Cr - 4.00 Cr*',
			suffix: 'Onwards'
		},
		{
			type: '4 BHK',
			area: '2700 Sq.Ft',
			price: '₹ 4.40 Cr*',
			suffix: 'Onwards'
		}
	];

	// Plan Data (Blurred)
	const plans = [
		{ label: '2 BHK', desc: 'Compact Luxury' },
		{ label: '3 BHK', desc: 'Spacious Family Home' },
		{ label: '4 BHK', desc: 'Grand Residence' }
	];
</script>

<section class="py-24 bg-[#0a0a0a] relative border-t border-white/5">
	<!-- Background Decor: Subtle Gold Glow behind the section -->
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B18E4E]/5 blur-[120px] rounded-full pointer-events-none"
	></div>

	<div class="container mx-auto px-4 relative z-10">
		<!-- ==========================
			 PART 1: PRICING & AREA
		=========================== -->
		<div class="text-center mb-16 space-y-4">
			<span class="text-[#B18E4E] tracking-[0.2em] uppercase text-sm font-bold">Configurations</span
			>
			<h2 class="text-4xl md:text-5xl font-bold text-white">
				Pricing & <span class="text-[#B18E4E] font-serif italic">Saleable Area</span>
			</h2>
			<div class="w-20 h-1 bg-white/10 mx-auto rounded-full mt-4"></div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
			{#each pricingData as item}
				<!-- Pricing Card -->
				<div
					class="group relative bg-white/5 border border-white/10 hover:border-[#B18E4E]/50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[#B18E4E]/10 flex flex-col items-center"
				>
					<!-- Header -->
					<div class="mb-6">
						<span
							class="inline-block py-1 px-4 rounded-full bg-black/40 border border-white/10 text-gray-300 text-sm tracking-wider uppercase font-medium mb-4 group-hover:border-[#B18E4E]/50 transition-colors"
						>
							Premium Apartment
						</span>
						<h3 class="text-4xl font-bold text-white">{item.type}</h3>
					</div>

					<!-- Divider Line -->
					<div
						class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4 group-hover:via-[#B18E4E]/50 transition-colors"
					></div>

					<!-- Details -->
					<div class="space-y-1 mb-8">
						<p class="text-gray-400 text-sm uppercase tracking-wide">Saleable Area</p>
						<p class="text-xl text-gray-200 font-medium">{item.area}</p>
					</div>

					<!-- Price -->
					<div class="mb-8">
						<p class="text-[#B18E4E] text-3xl font-bold">{item.price}</p>
						<p class="text-gray-500 text-xs">{item.suffix}</p>
					</div>

					<!-- Button -->
					<button
						class="mt-auto w-full py-3 px-6 rounded-lg border border-[#B18E4E] text-[#B18E4E] font-semibold uppercase tracking-wider text-sm hover:bg-[#B18E4E] hover:text-white transition-all duration-300"
					>
						Price Breakup
					</button>
				</div>
			{/each}
		</div>

		<!-- ==========================
			 PART 2: MASTER PLAN
		=========================== -->
		<div class="border-t border-white/10 pt-20">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
					Godrej Arden <span class="text-[#B18E4E]">Master Plan</span>
				</h2>
				<p class="text-gray-400 max-w-2xl mx-auto">
					Explore the thoughtfully designed layouts that maximize space and privacy.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each plans as plan}
					<!-- 
						Blurred Plan Card 
						- The image is intentionally blurred to create curiosity.
						- The 'Lock' icon suggests exclusivity.
					-->
					<div
						class="relative group bg-black border border-white/10 rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
					>
						<!-- The Blurred Image -->
						<!-- Using a generic floor plan image placeholder -->
						<img
							src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=600"
							alt="{plan.label} Plan"
							class="w-full h-full object-cover opacity-50 blur-[6px] transition-all duration-500 group-hover:scale-105"
						/>

						<!-- Dark Overlay -->
						<div
							class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"
						></div>

						<!-- Content Overlay (Centered) -->
						<div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
							<!-- Lock Icon Circle -->
							<div
								class="w-14 h-14 rounded-full bg-[#B18E4E]/20 border border-[#B18E4E] flex items-center justify-center mb-4 backdrop-blur-md group-hover:scale-110 transition-transform duration-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6 text-[#B18E4E]"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</div>

							<h3 class="text-2xl font-bold text-white mb-1">{plan.label}</h3>
							<p class="text-gray-400 text-sm mb-4">{plan.desc}</p>

							<button
								class="px-5 py-2 bg-white/10 hover:bg-[#B18E4E] text-white text-sm rounded-full backdrop-blur-sm transition-colors duration-300 border border-white/20"
							>
								Request to View
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
