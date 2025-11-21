<script>
	// Image Data with Labels for a premium feel
	const galleryImages = [
		{
			id: 1,
			src: 'https://www.godrejardensigma3noida.com/assets/img/gallery/4.webp',
			label: 'Grand Exterior',
			class: 'md:col-span-2 md:row-span-2 h-64 md:h-96'
		},
		{
			id: 2,
			src: 'https://www.godrejardensigma3noida.com/assets/img/gallery/3.webp',
			label: 'Master Suite',
			class: 'md:col-span-1 md:row-span-1 h-64 md:h-46'
		},
		{
			id: 3,
			src: 'https://www.godrejardensigma3noida.com/assets/img/gallery/1.webp',
			label: 'Living & Dining',
			class: 'md:col-span-1 md:row-span-1 h-64 md:h-46'
		},
		{
			id: 4,
			src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
			label: 'Panoramic View',
			class: 'md:col-span-3 md:row-span-1 h-64 md:h-80'
		}
	];
</script>

<section class="py-20 bg-[#0f0f0f] relative border-t border-white/5">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
			<div class="space-y-4">
				<span class="text-[#B18E4E] tracking-[0.2em] uppercase text-sm font-bold pl-1">
					Project Gallery
				</span>
				<h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
					Glimpses of <br /><span class="text-[#B18E4E] font-serif italic">Godrej Arden</span>
				</h2>
			</div>

			<button
				class="group flex items-center gap-3 text-white px-6 py-3 border border-white/20 rounded-full hover:border-[#B18E4E] transition-all duration-300"
			>
				<span class="text-sm uppercase tracking-widest">View All Photos</span>
				<span class="text-[#B18E4E] text-xl group-hover:translate-x-1 transition-transform">→</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each galleryImages as img}
				<div class={`relative group rounded-2xl overflow-hidden cursor-pointer ${img.class}`}>
					<img
						src={img.src}
						alt={img.label}
						class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>

					<div
						class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"
					></div>

					<div
						class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"
					></div>

					<div class="absolute bottom-4 left-4">
						<div
							class="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
						>
							<span class="text-white text-sm tracking-wide font-medium">
								{img.label}
							</span>
						</div>
					</div>

					<div
						class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
					>
						<div
							class="w-12 h-12 rounded-full bg-[#B18E4E]/90 flex items-center justify-center text-white shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-75"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
								/>
							</svg>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
