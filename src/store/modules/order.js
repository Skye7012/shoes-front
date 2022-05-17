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
				const response = await axios.get('https://localhost:7163/Orders');

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
				debugger;
				const response = await axios({
					method: 'post',
					url: 'Orders',
					data: {
						Addres: order.addres,
						OrderItems: order.orderItems,
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
		// getOrderItems(state) {
			
		// },
		getOrderTotalCount(state) {
			return state.orderTotalCount
		},
		getOrderPrice(state) {
			return state.orderPrice
		}
	}
}


  