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
			<p>Товаров (3)</p>
			<p>Общая стоимость <span class="price">1000 ₽</span></p>
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
	position: relative;
	margin: auto auto;
	
	display: flex;
	//flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
}

.summary {
	min-width: 200px;
	margin-left: 600px;
	height: 100%;
	text-align: center;
}

.basketItems {
	position: absolute;
	overflow-y: scroll;
	left: 0;
    top: 0;
	//margin-top: 10px;
	height: 100%;
	max-height: 100%;
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

.price {
	color: $danger;
}

.button {
	margin: 2vh 0;
	width: 90%;
}

</style>