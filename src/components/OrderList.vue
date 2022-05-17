<template>
	<div class="orderList">
		<Order 
		v-for="order in getOrders"
		:key="order.id"
		v-bind:order="order">
		</Order>
	</div>
</template>

<script>
import Order from '@/components/Order.vue'

import {mapGetters, mapActions, mapMutations} from 'vuex'


	export default {
		components: {
			Order,
		},
		// data() {
		// 	return {
		// 		orders: [],
		// 	}
		// },
		methods: {
			...mapActions([
				'fetchOrders',
			]),
		},
		computed: {
			...mapGetters([
				'getOrders',
			]),
		},
		async mounted() {
			this.fetchOrders();
		},
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.orderList {
	margin: auto auto;
	
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	column-gap: 30px;
	align-items: center;
	margin-top: 50px;
}

</style>