<script>
    // Plan Data (Blurred)
	const plans = [
		{ label: '2 BHK', desc: 'Compact Luxury' },
		{ label: '3 BHK', desc: 'Spacious Family Home' },
		{ label: '4 BHK', desc: 'Grand Residence' }
	];
</script>

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