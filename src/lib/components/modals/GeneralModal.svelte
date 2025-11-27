<script>
	import { submitEnquiry } from '$lib/services/Database';
	import { onMount } from 'svelte';
	import { fade, scale, fly } from 'svelte/transition';

	let { isOverlay = false, onClose } = $props();

	let formData = $state({
		name: '',
		email: '',
		phone: ''
	});
	let trackingData = $state({});

	let isSubmitting = $state(false);

	let showStatusModal = $state(false);
	let modalType = $state('success');
	let modalMessage = $state('');

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		trackingData = {
			utm_source: urlParams.get('utm_source'),
			utm_medium: urlParams.get('utm_medium'),
			utm_campaign: urlParams.get('utm_campaign') || urlParams.get('campid'),
			utm_term: urlParams.get('utm_term'),
			utm_content: urlParams.get('utm_content'),
			gclid: urlParams.get('gclid'),
			gad_source: urlParams.get('gad_source'),
			gbraid: urlParams.get('gbraid'),
			wbraid: urlParams.get('wbraid')
		};
	});

	function closeStatusModal() {
		showStatusModal = false;
		// If success and in overlay mode, close the main modal too
		if (modalType === 'success' && isOverlay && onClose) {
			onClose();
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (formData.phone.length !== 10) {
			modalType = 'error';
			modalMessage = 'Please enter a valid 10-digit Indian phone number.';
			showStatusModal = true;
			return;
		}
		if (!/^[6-9]/.test(formData.phone)) {
			modalType = 'error';
			modalMessage = 'Indian mobile numbers start with 6, 7, 8, or 9.';
			showStatusModal = true;
			return;
		}
		isSubmitting = true;

		try {
			const result = await submitEnquiry(
				formData.name,
				formData.email,
				formData.phone,
				trackingData
			);

			if (result.success) {
				// --- GOOGLE ADS CONVERSION TRACKING (START) ---
                if (typeof gtag !== 'undefined') {
                    // 1. Fire the Lead Conversion
                    gtag('event', 'conversion', {
                        'send_to': 'AW-813514144/PkIlCOHKxscbEKD79IMD',
                        'value': 1.0,
                        'currency': 'INR'
                    });
                    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
                    gtag('set', 'user_data', {
                        "email": formData.email,
                        "phone_number": "+91" + cleanPhone
                    });
                }
                // --- GOOGLE ADS CONVERSION TRACKING (END) ---
				modalType = 'success';
				modalMessage = 'Thanks for enquiring! We will call you shortly.';
				formData = { name: '', email: '', phone: '' };
			} else {
				modalType = 'error';
				modalMessage = 'Submission failed. Please try again.';
			}
		} catch (error) {
			modalType = 'error';
			modalMessage = 'Something went wrong. Please try again.';
		}

		isSubmitting = false;
		showStatusModal = true;
	}
</script>

{#snippet formContent()}
	<div
		class="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
	>
		{#if isOverlay}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				onclick={onClose}
				class="absolute top-4 right-4 text-gray-400 hover:text-white z-20 p-2 hover:bg-white/10 rounded-full transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
					></line></svg
				>
			</button>
		{/if}

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
						class="pl-4 pr-2 text-gray-400 select-none flex items-center gap-1 border-r border-white/10 h-full "
					>
						🇮🇳 +91
					</span>
					<input
						type="tel"
						id="phone"
						required
						bind:value={formData.phone}
						oninput={(e) => {
							const cleaned = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 10);
							formData.phone = cleaned;
							e.currentTarget.value = cleaned;
						}}
						placeholder="9876543210"
						class="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none"
					/>
				</div>
			</div>

			<button
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
{/snippet}

{#if isOverlay}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
		transition:fade={{ duration: 200 }}
		onclick={(e) => {
			if (e.target === e.currentTarget && onClose) onClose();
		}}
	>
		<div class="w-full max-w-md relative" transition:fly={{ y: 20, duration: 300 }}>
			{@render formContent()}
		</div>
	</div>
{:else}
	{@render formContent()}
{/if}

{#if showStatusModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		transition:fade={{ duration: 300 }}
		class="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
		onclick={closeStatusModal}
	>
		<div
			transition:scale={{ duration: 300, start: 0.95 }}
			class="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden transform transition-all"
			onclick={(e) => e.stopPropagation()}
		>
			<div
				class="absolute -top-10 -right-10 w-40 h-40 {modalType === 'success'
					? 'bg-green-500/20'
					: 'bg-red-500/20'} blur-[50px] rounded-full pointer-events-none"
			></div>

			<div class="relative z-10 text-center">
				{#if modalType === 'success'}
					<div
						class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
					>
						<svg
							class="w-8 h-8 text-green-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-white mb-2">Success!</h3>
				{:else}
					<div
						class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center"
					>
						<svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-white mb-2">Oops!</h3>
				{/if}

				<p class="text-gray-300 mb-6">{modalMessage}</p>

				<button
					onclick={closeStatusModal}
					class="w-full bg-linear-to-r from-[#B18E4E] to-[#9a7a40] hover:from-[#9a7a40] hover:to-[#8a6a30] text-white font-bold py-3 px-6 rounded-xl uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
				>
					Got it
				</button>
			</div>
		</div>
	</div>
{/if}
