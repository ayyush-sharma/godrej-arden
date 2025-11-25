<script>
	import GeneralModal from '../modals/GeneralModal.svelte';
	const phoneNumber = '+91 98765 43210';
	let openModal = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onclick={() => {
		openModal = true;
	}}
	class="
    flex items-center rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(177,142,78,0.4)] hover:scale-105
    bg-[#B18E4E] text-white hover:bg-[#9a7a40] font-bold
    
    whitespace-nowrap
    
  
    gap-1.5 px-4 py-2 text-xl

   
    md:gap-2 md:px-3 md:py-2 md:text-xs lg:text-sm

    
    xl:px-5 xl:py-2.5 xl:text-xl xl:font-extrabold
"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-4 h-4"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
		/>
	</svg>
	{phoneNumber}
</div>
{#if openModal}
	<GeneralModal
		isOverlay={true}
		onClose={() => {
			openModal = false;
		}}
	/>
{/if}
