<script>
	let formData = $state({
		name: '',
		email: '',
		phone: ''
	});

	let isSubmitting = $state(false);
	function handleSubmit(e) {
		e.preventDefault();
		if (formData.phone.length !== 10) {
			alert('Please enter a valid 10-digit Indian phone number.');
			return;
		}

		isSubmitting = true;
		setTimeout(() => {
			isSubmitting = false;
			alert('Thanks for enquiring! We will call you shortly.');
			formData = { name: '', email: '', phone: '' };
		}, 1500);
	}
</script>

<div
	class="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
>
	<div
		class="absolute -top-10 -right-10 w-40 h-40 bg-[#B18E4E]/20 blur-[50px] rounded-full pointer-events-none"
	></div>

	<div class="mb-4 text-center relative z-10">
		<h2 class="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Enquire Now</h2>
		<p class="text-gray-300 text-sm mt-2">Register your interest for exclusive offers.</p>
		<div class="h-1 w-20 bg-[#B18E4E] mx-auto mt-4 rounded-full"></div>
	</div>

	<form onsubmit={handleSubmit} class="flex flex-col gap-5 relative z-10">
		<div class="space-y-2">
			<label for="name" class="text-sm font-medium text-gray-300 ml-1"
				>Name <span class="text-[#B18E4E]">*</span></label
			>
			<input
				type="text"
				id="name"
				required
				bind:value={formData.name}
				placeholder="Enter your full name"
				class="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B18E4E] focus:bg-black/50 transition-all duration-300"
			/>
		</div>

		<div class="space-y-2">
			<label for="email" class="text-sm font-medium text-gray-300 ml-1"
				>Email <span class="text-gray-500 text-xs">(Optional)</span></label
			>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				placeholder="Enter your email address"
				class="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B18E4E] focus:bg-black/50 transition-all duration-300"
			/>
		</div>

		<div class="space-y-2">
			<label for="phone" class="text-sm font-medium text-gray-300 ml-1"
				>Phone Number <span class="text-[#B18E4E]">*</span></label
			>

			<div
				class="flex items-center w-full bg-white/5 border border-white/20 rounded-xl overflow-hidden focus-within:border-[#B18E4E] focus-within:bg-black/50 transition-all duration-300"
			>
				<span
					class="pl-4 pr-2 text-gray-400 select-none flex items-center gap-1 border-r border-white/10 h-full bg-black/20"
				>
					🇮🇳 +91
				</span>
				<input
					type="tel"
					id="phone"
					required
					bind:value={formData.phone}
					oninput={(e) =>
						(e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 10))}
					placeholder="98765 43210"
					class="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none"
				/>
			</div>
		</div>

		<button
			type="submit"
			disabled={isSubmitting}
			class="mt-4 w-full bg-gradient-to-r from-[#B18E4E] to-[#9a7a40] hover:from-[#9a7a40] hover:to-[#8a6a30] text-white font-bold py-4 px-6 rounded-xl uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#B18E4E]/40 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
		>
			{#if isSubmitting}
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				Sending...
			{:else}
				Get Callback
			{/if}
		</button>

		<p class="text-xs text-center text-gray-400 mt-2">
			By submitting, you agree to our privacy policy.
		</p>
	</form>
</div>
