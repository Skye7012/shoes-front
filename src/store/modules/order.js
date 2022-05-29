import axios from 'axios'

export default {
	state: {
		orders: [],
		orderTotalCount: 0,
		orderPrice: 0,
	},
	actions: {
		async fetchOrders({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8888/orders');

				const orders = response.data.items;
				const orderTotalCount = response.data.totalCount;

				commit('updateOrders', orders);
				commit('updateOrderTotalCount', orderTotalCount);
			}
			catch (e) {
				alert(e)
			}
		},
		async postOrder({commit, state}, {order}) {
			try {
				const response = await axios({
					method: 'post',
					url: 'orders',
					data: {
						addres: order.addres,
						orderSum: order.orderSum,
						orderCount: order.orderCount,
						orderItems: order.orderItems,
					}
				});
				alert("Заказ принят");
			}
			catch (e) {
				alert(e)
			}
		},
	},
	mutations: {
		updateOrders(state, orders) {
			state.orders = orders
		},
		updateOrderTotalCount(state, orderTotalCount) {
			state.orderTotalCount = orderTotalCount
		},
		updateOrderPrice(state, orderPrice) {
			state.orderPrice = orderPrice
		},
	},
	getters: {
		getOrders(state) {
			return state.orders;
		},
		getOrderTotalCount(state) {
			return state.orderTotalCount
		},
		getOrderPrice(state) {
			return state.orderPrice
		}
	}
}


  