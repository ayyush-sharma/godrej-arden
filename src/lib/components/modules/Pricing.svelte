<script>
	import MasterPlan from './MasterPlan.svelte';
	import GeneralModal from '../modals/GeneralModal.svelte';

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
	let openModal = $state(false);
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
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="group relative bg-white/5 border border-white/10 hover:border-[#B18E4E]/50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[#B18E4E]/10 flex flex-col items-center"
					onclick={() => {
						openModal = true;
					}}
				>
					<!-- Header -->
					<div class="mb-6">
						<span
							class="inline-block py-1 px-4 rounded-full bg-black/40 border border-white/10 text-gray-300 text-sm tracking-wider uppercase font-medium mb-4 group-hover:border-[#B18E4E]/50 transition-colors"
						>
							Premium Apartment
						</span>
						<h3 class="text-5xl font-bold text-white">{item.type}</h3>
					</div>

					<!-- Divider Line -->
					<div
						class="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-4 group-hover:via-[#B18E4E]/50 transition-colors"
					></div>

					<!-- Details -->
					<div class="space-y-1 mb-8">
						<p class="text-gray-400 text-sm uppercase tracking-wide">Saleable Area</p>
						<p class="text-xl text-gray-200 font-medium">{item.area}</p>
					</div>

					<!-- Price -->
					<div class="mb-8">
						<p class="text-[#B18E4E] text-5xl tracking-tighter font-extrabold">{item.price}</p>
						<p class="text-gray-500 text-lg">{item.suffix}</p>
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
		<section id="overview">
			<MasterPlan />
		</section>
	</div>
</section>
{#if openModal}
	<GeneralModal
		isOverlay={true}
		onClose={() => {
			openModal = false;
		}}
	/>
{/if}
