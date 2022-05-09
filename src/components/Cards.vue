<template>
	<div class="mrows">
		<VertFilters 
		class="vert"
		v-bind:totalCount="totalCount"
		/>
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
				totalCount: 0,
				shoes: [],
				limit: 4,
			}
		},
		methods: {
			async fetchShoes() {
				try {
					const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
						params: {
							_page: this.page,
							_limit: this.limit,
						}
					});
					this.totalCount = response.headers['x-total-count'] / this.limit;
					this.shoes = response.data;
				}
				catch (e) {
					alert(e)
				}
			}
		},
		mounted() {
			this.fetchShoes();
		},
		computed: {
			page() {
				return this.$store.state.page;
			}
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

.vert {
	margin: auto 4px;
}

</style>