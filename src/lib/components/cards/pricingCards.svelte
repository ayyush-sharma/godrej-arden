<script>
	let {
		title,
		price,
		priceSuffix,
		areaLabel,
		areaValue,
		btnText = 'Enquire Now',
		onClick = () => {}
	} = $props();
</script>

<div
	class="flex h-full flex-col items-center rounded-xl bg-[#B18E4E17] px-3 py-6 text-[#2C2C2C] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14"
>
	<div
		class="mb-3 rounded-lg border border-[#A58E5E] px-3 py-1 text-xs font-bold text-[#2C2C2C] sm:mb-4 sm:rounded-xl sm:px-5 sm:py-1.5 sm:text-sm md:mb-5 md:px-6 md:text-base lg:mb-6 lg:rounded-2xl lg:px-8 lg:py-2 lg:text-lg xl:text-xl"
	>
		{title}
	</div>

	<div class="mb-3 text-center sm:mb-4 md:mb-5 lg:mb-6">
		<span
			class="text-xl font-extrabold text-[#2C2C2C] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
		>
			{price}
		</span>
		<span
			class="ml-1 text-xs font-bold text-[#2C2C2C] sm:text-sm md:text-base lg:text-lg xl:text-xl"
		>
			{priceSuffix}
		</span>
	</div>

	<div
		class="mb-3 text-center text-xs font-semibold text-[#2C2C2C] sm:mb-4 sm:text-sm md:text-base lg:mb-5"
	>
		{priceSuffix.includes('Onwards')
			? 'Onwards'
			: priceSuffix.includes('All')
				? 'All Inclusive'
				: ''}
	</div>

	<div
		class="mb-3 flex w-full items-start justify-between gap-2 px-1 text-[11px] font-medium text-[#2C2C2C] sm:mb-4 sm:gap-3 sm:px-2 sm:text-xs md:px-3 md:text-sm lg:gap-4 lg:px-4 lg:text-base xl:text-lg"
	>
		<div class="max-w-[48%] text-left">
			{areaLabel}
		</div>
		<div class="max-w-[48%] text-right">
			{areaValue}
		</div>
	</div>

	<div
		class="mb-3 w-full border-b border-dashed border-[#A58E5E] opacity-50 sm:mb-4 md:mb-5 lg:mb-6"
	></div>

	<button
		onclick={onClick}
		class="w-full max-w-[200px] rounded-full bg-[#B18E4E] px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-[#8E7A4F] hover:shadow-md active:scale-95 sm:max-w-[220px] sm:px-5 sm:py-2.5 sm:text-sm md:max-w-[240px] md:text-base lg:max-w-[260px] lg:px-6 lg:py-3 xl:max-w-[280px]"
	>
		{btnText}
	</button>
</div>
