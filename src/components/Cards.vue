<template>
	<div class="mrows">
		<VertFilters 
		class="vert"
		v-bind:totalCount="totalCount"
		/>
		<div class="cards">
			<Card v-for="shoe in allShoes" :key="shoe.id" 
			v-bind:shoe="shoe"></Card>
		</div>
	</div>
</template>

<script>
import VertFilters from '@/components/VertFilters.vue'
import Card from '@/components/Card.vue'

import {mapGetters, mapActions} from 'vuex'

	export default {
		components: {
			VertFilters,
			Card
		},
		data() {
			return {
			}
		},
		methods: mapActions([
			'fetchShoes',
		]),
		computed: mapGetters([
			'allShoes',
			'totalCount'
		]),
		mounted() {
			this.fetchShoes();
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
	margin-top: 10px;
	display: grid;
	grid-template-columns: repeat(2, 300px);
	justify-content: center;
	row-gap: 10px;
}

.vert {
	margin: auto 4px;
}

</style>