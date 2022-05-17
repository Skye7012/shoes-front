<template>
	<div class="order box">
		<span>Дата</span>
		<span>Сумма Кол-во</span>
		<span>Адрес</span>

		<OrderItem 
		v-for="orderItem in orderItems"
		:key="orderItem.id"
		v-bind:orderItem="orderItem">
		</OrderItem>
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

		},
		props: {
			order: {}
		},
		created() {
			this.orderItems = this.order.orderItems;
		},
		// data() {
		// 	return {
		// 		orderItems: [],
		// 	}
		// },
		// methods: {
		// 	...mapActions([
		// 		'fetchOrders',
		// 	]),
		// },
		// computed: {
		// 	...mapGetters([
		// 		'getOrders',
		// 		// 'getOrderItems'
		// 	]),
		// },
		// async mounted() {
		// 	this.fetchOrders();
		// },
		// watch: {
		// 	getOrders() {
		// 		this.orderItems = this.getOrders[0].orderItems;
		// 	}
		// }
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.order {
	overflow-y: auto;
	height: 60vh;
	display: grid;
	grid-auto-rows: min-content;
	max-width: 350px;
}

.price {
	color: $danger;
}

</style>