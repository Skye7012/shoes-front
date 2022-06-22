<template>
	<div class="order box">
		<div class="textBlock">
			<span>Дата:</span>
			<span>{{getDate()}}</span>
		</div>
		<div class="textBlock">
			<span>Сумма: {{order.sum}} ₽</span>
			<span>Количество: {{order.count}}</span>
		</div>
		<div class="textBlock">
			<span>Адрес: </span>
			<span>{{order.address}}</span>
		</div>

		<OrderItem 
		v-for="orderItem in orderItems"
		:key="orderItem.id"
		v-bind:orderItem="orderItem">
		</OrderItem>
	</div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'

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
			getDate() {
				var m = this.order.orderDate;
				m = new Date(Date.parse(m));
				return m.getFullYear() +" / "+ (m.getMonth()+1) +" / "+ m.getDate();
			}
		},
		props: {
			order: {}
		},
		created() {
			this.orderItems = this.order.orderItems;
		},
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

.textBlock {
	display: flex;
	justify-content: space-between;
	margin: 0.1rem 0.5rem;
}

</style>