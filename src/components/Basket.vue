<template>
	<div class="basket">
		<div class="basketItems box">
			<BasketItem 
			v-for="basketItem in getBasketItems"
			:key="basketItem.id"
			v-bind:basketItem="basketItem">
			</BasketItem>
		</div>
		<div class="summary box">
			<button class="button link">Оформить</button>
			<p>Товаров ({{getBasketTotalCount}})</p>
			<p>Общая стоимость <span class="price">{{getBasketPrice}} ₽</span></p>
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
			'getBasketTotalCount',
			'getBasketPrice'
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
	justify-content: center;
	align-items: center;
	margin-top: 50px;
}

.summary {
	min-width: 200px;
	margin-left: 50px;
	height: 60vh;
	text-align: center;
}

.basketItems {
	overflow-y: auto;
	height: 60vh;
	display: grid;
	grid-auto-rows: 120px;
	row-gap: 10px;
	min-width: 450px;
}

.input {
	width: 100%;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	text-align: center;
}

.price {
	color: $danger;
}

.button {
	margin: 2vh 0;
	width: 90%;
}

</style>