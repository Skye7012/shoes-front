<template>
	<div class="mrows">
		<VertFilters></VertFilters>
		<div class="cards">
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>
	</div>
</template>

<script>
import VertFilters from '@/components/VertFilters.vue'
import Card from '@/components/Card.vue'
	export default {
		components: {
			VertFilters,
			Card
		},
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.mrows {
	display: grid;
	grid-template-rows: 50px auto;
	column-gap: 10px;
}

.cards {
	overflow-y: hidden;
	margin-top: 10px;
	display: grid;
	grid-auto-rows: 120px;
	row-gap: 10px;
}



</style>