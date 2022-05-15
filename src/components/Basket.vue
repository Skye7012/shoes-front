<template>
	<div class="basket">
		<div class="basketItems" v-for="basketItem in getBasketItems" :key="basketItem.id">
			<BasketItem v-bind:basketItem="basketItem"></BasketItem>
		</div>
	</div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue'

import {mapGetters, mapActions} from 'vuex'


	export default {
		components: {
			BasketItem,
		},
		methods: mapActions([
			'fetchBasketItems',
		]),
		computed: mapGetters([
			'getBasketItems',
		]),
		mounted() {
			this.fetchBasketItems();
		}
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.basket {
	margin: auto auto;
	
	display: flex;
	flex-direction: column;
	justify-content: center;

}

.basketItems {
	overflow-y: hidden;
	margin-top: 10px;
	display: grid;
	grid-auto-rows: 120px;
	row-gap: 10px;
}

.input {
	width: 100%;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	text-align: center;
}

</style>