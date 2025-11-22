<script>
	// Data Array for easy management
	const amenities = [
		{
			name: 'Swimming Pool',
			image:
				'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800',
			desc: 'Lap pool with infinity edge'
		},
		{
			name: 'Clubhouse',
			image:
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
			desc: 'Luxury lounge & community hall'
		},
		{
			name: 'Gymnasium',
			image:
				'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
			desc: 'State-of-the-art equipment'
		},
		{
			name: "Kids' Play Area",
			image:
				'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800',
			desc: 'Safe & rubberized flooring'
		},
		{
			name: 'Basketball Court',
			image:
				'https://media.istockphoto.com/id/1455699610/photo/public-basketball-court-mersin-turkey.jpg?s=612x612&w=0&k=20&c=zLoH3Eca0z7C1zuMo6bUsGCoY1c4Tzc-G4UypXGfSRI=',
			desc: 'Full size professional court'
		},
		{
			name: 'Indoor Games Zone',
			image:
				'https://www.heiwaheaven.com/images/game/2.jpg',
			desc: 'Billiards, Table Tennis & Foosball'
		},
		{
			name: 'Yoga Deck',
			image:
				'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800',
			desc: 'Open air meditation space'
		},
		{
			name: 'Multipurpose Court',
			image:
				'https://content.jdmagicbox.com/v2/comp/delhi/m8/011pxx11.xx11.220415171009.f3m8/catalogue/dda-tennis-court-vasant-kunj-sector-d-delhi-lawn-tennis-courts-wRma3ayGeM.jpg',
			desc: 'Tennis & Badminton ready'
		}
	];
</script>

<section class="py-20 bg-[#0f0f0f]">
	<div class="container mx-auto px-4">
		<div class="text-center mb-16 space-y-4">
			<span class="text-[#B18E4E] tracking-[0.2em] uppercase text-sm font-bold"> Lifestyle </span>
			<h2 class="text-4xl md:text-5xl font-bold text-white">
				Amenities that <span class="italic font-serif text-[#B18E4E]">Define Excellence</span>
			</h2>
			<div class="w-24 h-1 bg-white/10 mx-auto rounded-full mt-6"></div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each amenities as item}
				<div
					class="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg"
				>
					<div
						class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
						style="background-image: url('{item.image}');"
					></div>

					<div
						class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"
					></div>

					<div class="absolute inset-0 p-6 flex flex-col justify-end items-start">
						<div
							class="w-12 h-1 bg-[#B18E4E] mb-4 transform origin-left transition-all duration-300 group-hover:w-20"
						></div>

						<h3
							class="text-2xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-[#B18E4E]"
						>
							{item.name}
						</h3>

						<p
							class="text-gray-400 text-sm transform translate-y-0 transition-all duration-300 group-hover:text-white"
						>
							{item.desc}
						</p>
					</div>

					<div
						class="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
