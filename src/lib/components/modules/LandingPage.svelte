<script>
	import GeneralModal from '../modals/GeneralModal.svelte';

	// Optional: Define the gold color as a constant or use tailwind config
	const goldColor = '#B18E4E';
</script>

<section class="relative w-full min-h-[80vh] flex items-center bg-gray-900 overflow-hidden">

	<div 
		class="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
		style="background-image: url('https://www.godrejardensigma3noida.com/assets/img/deskban2.webp');"
	></div>

	<div class="absolute inset-0 z-0 bg-linear-to-t from-black/70 via-black/50 to-black/10 lg:bg-linear-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent"></div>

	<div class="container relative z-10 mx-auto px-4 py-12 pt-[100px] lg:py-20">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
			
			<div class="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
				
				<div class="space-y-2">
					<span class="inline-block py-1 px-3 rounded bg-white/10 backdrop-blur-sm text-white lg:text-[#B18E4E] font-bold tracking-wider text-sm uppercase border border-[#B18E4E]/30">
						At Sigma 3, Greater Noida
					</span>
					<h1 class="text-6xl lg:text-8xl font-bold text-white leading-tight">
						Godrej <span class="text-[#B18E4E]">Arden</span>
					</h1>
				</div>

				<ul class="flex flex-wrap justify-center font-semibold lg:justify-start gap-x-8 gap-y-3 text-gray-100 text-lg md:text-xl">
					<li class="flex items-center gap-2">
						<span class="text-[#B18E4E]">●</span> 9.58 Acres
					</li>
					<li class="flex items-center gap-2">
						<span class="text-[#B18E4E]">●</span> 35 Floors
					</li>
					<li class="flex items-center gap-2">
						<span class="text-[#B18E4E]">●</span> 1375 - 2700 SqFt
					</li>
				</ul>

				<div class="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mt-2">
					<div class="p-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl">
						<p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Configuration</p>
						<p class="text-2xl font-semibold text-white">2, 3 & 4 BHK</p>
					</div>
					<div class="p-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl">
						<p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Starting Price</p>
						<p class="text-2xl font-semibold text-white">₹ 2.30 Cr* <span class="text-sm font-normal text-gray-400">Onwards</span></p>
					</div>
				</div>

				<div class="mt-4">
					<button 
						class="group relative overflow-hidden rounded-full bg-[#B18E4E] text-white text-lg font-semibold py-4 px-10 transition-all duration-300 hover:bg-[#9a7a40] hover:shadow-[0_0_20px_rgba(177,142,78,0.4)] active:scale-95"
					>
						<span class="relative z-10">Download Brochure</span>
					</button>
					<p class="mt-3 text-sm text-gray-400">
						*Spot Booking Offers Available
					</p>
				</div>
			</div>

			<div class="lg:col-span-5 flex justify-center lg:justify-end">
				<div class="w-full max-w-md">
					<GeneralModal />
				</div>
			</div>

		</div>
	</div>
</section>