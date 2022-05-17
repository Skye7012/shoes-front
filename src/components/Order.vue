<template>
	<div class="order">
		<div class="orderItems box">
			<OrderItem 
			v-for="orderItem in orderItems"
			:key="orderItem.id"
			v-bind:orderItem="orderItem">
			</OrderItem>
		</div>
		<!-- <div class="summary box">
			<button class="button link">Оформить</button>
			<p>Товаров ({{getOrderTotalCount}})</p>
			<p>Общая стоимость <span class="price">{{getOrderPrice}} ₽</span></p>

			<button
			@click="clearOrder"
			class="button clear">Очистить корзину</button>
		</div> -->
	</div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'

import {mapGetters, mapActions, mapMutations} from 'vuex'


	export default {
		components: {
			OrderItem,
		},
		data() {
			return {
				orderItems: [],
			}
		},
		methods: {
			...mapActions([
				'fetchOrders',
			]),
		},
		computed: {
			...mapGetters([
				'getOrders',
				// 'getOrderItems'
			]),
		},
		async mounted() {
			this.fetchOrders();
		},
		watch: {
			getOrders() {
				this.orderItems = this.getOrders[0].orderItems;
			}
		}
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.order {
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
	min-width: 200px;
	margin-left: 50px;
	height: 60vh;
	text-align: center;
}

.orderItems {
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

.clear {
	margin-top: auto;
}

</style>