<script>
	// Connectivity Data
	const connectivityPoints = [
		{
			name: 'Noida Expressway',
			time: '6 Mins',
			type: 'Road',
			// Simple path icon for Road
			iconPath:
				'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
		},
		{
			name: 'Pari Chowk Metro Station',
			time: '13 Mins',
			type: 'Metro',
			// Icon for Train/Metro
			iconPath:
				'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
		},
		{
			name: 'Kailash Hospital',
			time: '15 Mins',
			type: 'Health',
			// Icon for Health
			iconPath:
				'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
		},
		{
			name: 'Galgotias University',
			time: '20 Mins',
			type: 'Education',
			// Icon for Education
			iconPath:
				'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.216 50.592 50.592 0 00-2.662.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.475c2.31 0 4.439.784 6.137 2.106.456.354.863.746 1.21 1.174'
		},
		{
			name: 'IGI Airport',
			time: '1 Hr 40 Mins',
			type: 'Airport',
			// Icon for Plane
			iconPath:
				'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z'
		}
	];
</script>

<section class="py-24 bg-[#0f0f0f] relative overflow-hidden">
	<div
		class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B18E4E]/5 to-transparent pointer-events-none"
	></div>

	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			<div class="lg:col-span-7">
				<div
					class="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] lg:h-[600px]"
				>
					<img
						src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600"
						alt="Location Map"
						class="w-full h-full object-cover opacity-60 blur-[2px] scale-105 transition-transform duration-700 group-hover:scale-100 group-hover:blur-0"
					/>

					<div
						class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"
					></div>

					<div
						class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
					>
						<div class="relative flex items-center justify-center">
							<div
								class="absolute w-20 h-20 bg-[#B18E4E] rounded-full opacity-20 animate-ping"
							></div>
							<div
								class="absolute w-12 h-12 bg-[#B18E4E] rounded-full opacity-40 animate-pulse"
							></div>
							<div
								class="relative w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
							></div>
						</div>

						<div
							class="bg-black/80 backdrop-blur-md border border-[#B18E4E]/50 px-4 py-2 rounded-full mt-4"
						>
							<span class="text-white font-bold tracking-wider text-sm uppercase">Godrej Arden</span
							>
						</div>
					</div>

					<div class="absolute bottom-8 left-0 right-0 flex justify-center">
						<button
							class="bg-white text-black hover:bg-[#B18E4E] hover:text-white font-bold py-3 px-8 rounded-full shadow-xl transition-colors duration-300 flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5"
							>
								<path
									fill-rule="evenodd"
									d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
									clip-rule="evenodd"
								/>
							</svg>
							Open in Google Maps
						</button>
					</div>
				</div>
			</div>

			<div class="lg:col-span-5 space-y-8">
				<div class="space-y-2">
					<span class="text-[#B18E4E] tracking-[0.2em] uppercase text-sm font-bold">Location</span>
					<h2 class="text-4xl md:text-5xl font-bold text-white">
						Seamless <span class="text-[#B18E4E] font-serif italic">Connectivity</span>
					</h2>
					<p class="text-gray-400 pt-2">
						Strategically located at Sigma 3, offering rapid access to key landmarks and transport
						hubs.
					</p>
				</div>

				<div class="space-y-4 mt-8">
					{#each connectivityPoints as point, index}
						<div
							class="group flex items-center justify-between p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#B18E4E]/50 transition-all duration-300 cursor-default"
						>
							<div class="flex items-center gap-4">
								<div
									class="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-gray-400 group-hover:text-[#B18E4E] group-hover:bg-[#B18E4E]/10 transition-colors duration-300 border border-white/5"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d={point.iconPath} />
									</svg>
								</div>

								<div>
									<h3
										class="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors"
									>
										{point.name}
									</h3>
									<p class="text-xs text-gray-500 uppercase tracking-wide">
										{point.type}
									</p>
								</div>
							</div>

							<div class="text-right">
								<div class="bg-[#B18E4E]/10 border border-[#B18E4E]/20 px-3 py-1 rounded-lg">
									<span class="text-[#B18E4E] font-bold text-sm md:text-base whitespace-nowrap">
										{point.time}
									</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
