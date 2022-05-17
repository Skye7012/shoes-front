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
			<p>Товаров ({{getBasketTotalCount}})</p>
			<p>Общая стоимость <span class="price">{{getBasketPrice}} ₽</span></p>

			<div class="buy">
				<input
					v-model="addres"
					class="input"
					v-bind:class="{ req: !addres, changed: addres != '' }"
					placeholder="Адрес"
					type="text">

				<button 
				@click="buy()"
				v-bind:class="{ dis : !addres, link: addres != '' }"
				:disabled="!addres"
				class="button">Оформить</button>
			</div>
			
			<button
			@click="clearBasket"
			class="button clear">Очистить корзину</button>
		</div>
	</div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue'

import {mapGetters, mapActions, mapMutations} from 'vuex'


	export default {
		components: {
			BasketItem,
		},
		data() {
			return {
				addres: '',
			}
		},
		methods: {
			...mapActions([
				'fetchBasketItems',
				'postOrder'
			]),
			...mapMutations([
			'clearBasket',
			]),
			buy() {
				if(!this.getIsAuth) {
					this.$router.push('/login');
					return;
				}

				if (this.getBasketItems.length < 1) {
					alert('Корзина пуста');
					return;
				}

				var orderItems = this.getBasketItems.map(x => (
					{shoeId : x.id, ruSize : this.getSize(x.id)}
				));
				
				var order = {
					addres: this.addres,
					orderItems: orderItems,
				}

				this.postOrder({order});

				debugger;

				this.clearBasket();
				this.$router.push('/');
			}
		},
		computed: mapGetters([
			'getBasketItems',
			'getBasketTotalCount',
			'getBasketPrice',
			'getSize',
			'getIsAuth'
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
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 250px;
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
	width: 80%;
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
	width: 80%;
}

.clear {
	margin-top: auto;
}

.buy {
	margin: 20px 0;
}

.changed {
	border-color: $info;
}

.req {
	border-color: $danger;
}

.dis {
	background-color: $light;
}

</style>