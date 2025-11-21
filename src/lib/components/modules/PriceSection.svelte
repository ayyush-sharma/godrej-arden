<script>
	import PricingCards from '../cards/pricingCards.svelte';
	let properties = [
		{
			id: 1,
			title: 'Studio',
			price: '₹ 59 Lacs*',
			priceSuffix: 'Onwards',
			areaLabel: 'Super Build Up Area',
			areaValue: '482 to 493 Sq.ft.'
		},
		{
			id: 2,
			title: '2 BHK',
			price: '₹ 85 Lacs*',
			priceSuffix: 'All Inclusive',
			areaLabel: 'Super Build Up Area',
			areaValue: '750 to 810 Sq.ft.'
		},
		{
			id: 3,
			title: '3 BHK',
			price: '₹ 1.2 Cr*',
			priceSuffix: 'Onwards',
			areaLabel: 'Super Build Up Area',
			areaValue: '1200 to 1450 Sq.ft.'
		},
		{
			id: 4,
			title: 'Penthouse',
			price: '₹ 2.5 Cr*',
			priceSuffix: 'Starting',
			areaLabel: 'Super Build Up Area',
			areaValue: '2200 Sq.ft.'
		}
	];

	function handleEnquiry(item) {
		alert(`Enquiring about: ${item.title}`);
	}
</script>

<div
	class="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-16 xl:px-12"
>
	<div class="mx-auto">
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-6"
		>
			{#each properties as prop (prop.id)}
				<PricingCards
					title={prop.title}
					price={prop.price}
					priceSuffix={prop.priceSuffix}
					areaLabel={prop.areaLabel}
					areaValue={prop.areaValue}
					onClick={() => handleEnquiry(prop)}
				/>
			{/each}
		</div>
	</div>
</div>
