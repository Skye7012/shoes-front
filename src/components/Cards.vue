<template>
	<div class="mrows">
		<VertFilters></VertFilters>
		<div class="cards" v-for="shoe in shoes">
			<Card v-bind:shoe="shoe"></Card>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import VertFilters from '@/components/VertFilters.vue'
import Card from '@/components/Card.vue'
	export default {
		components: {
			VertFilters,
			Card
		},
		data() {
			return {
				shoes: [
					{
						title: 123,
						url: 1,
					}
				],
			}
		},
		methods: {
			async fetchShoes() {
				try {
					const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
						params: {
							_page: 1,
							_limit: 4,
						}
					});
					this.shoes = response.data;
				}
				catch (e) {
					alert(e)
				}
			}
		},
		mounted() {
			this.fetchShoes();
		}
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