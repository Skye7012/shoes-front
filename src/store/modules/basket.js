import axios from 'axios'
import qs from 'qs'

export default {
	state: {
		basketItems: [],
		basketTotalCount: 0,
		basketPrice: 0,
	},
	actions: {
		addShoe({commit},{id, size}) {
			let basket = [];
			if(localStorage.basket) {
				basket = JSON.parse(localStorage.basket);
			}
			if (!basket.includes(id)) {
				var shoe = {id, size};
				basket.push(shoe);
			}
			localStorage.setItem('basket', JSON.stringify(basket));
			commit('updateBasketTotalCount', basket.length)
		},
		removeShoe({commit},id) {
			if(localStorage.basket)
			{
				let basket = JSON.parse(localStorage.basket);
				basket = basket.filter(x => x.id != id)
				localStorage.setItem('basket', JSON.stringify(basket));
				commit('updateBasketTotalCount', basket.length)
			}
		},
		async fetchBasketItems({commit, state}) {
			try {
				let ids = [];
				if(localStorage.basket) {
					ids = JSON.parse(localStorage.basket).map(x => x.id);
				}
				const response = await axios.get('https://localhost:7163/Shoes/GetByIds', {
					params: {
						ids: ids,
					},
					paramsSerializer: params => {
						return qs.stringify(params)
					}
				});
				const basketItems = response.data.items;
				const basketTotalCount = response.data.totalCount;
				const basketPrice = basketItems.map(x => x.price)
					.reduce((a, b) => a + b, 0);
				commit('updateBasketItems', basketItems);
				commit('updateBasketTotalCount', basketTotalCount);
				commit('updateBasketPrice', basketPrice);
			}
			catch (e) {
				alert(e)
			}
		},
	},
	mutations: {
		updateBasketItems(state, basketItems) {
			state.basketItems = basketItems
		},
		updateBasketTotalCount(state, basketTotalCount) {
			state.basketTotalCount = basketTotalCount
		},
		updateBasketPrice(state, basketPrice) {
			state.basketPrice = basketPrice
		},
		removeBasketItem(state, id) {
			state.basketPrice -= state.basketItems.find(x => x.id == id).price;
			state.basketItems = state.basketItems.filter(x => x.id != id);
			state.basketTotalCount = state.basketItems.length;
		},
		clearBasket(state) {
			state.basketPrice = 0;
			state.basketItems = [];
			state.basketTotalCount = 0;
			localStorage.basket = [];
		}
	},
	getters: {
		getInBasket: (state) => (id) => {
			if(localStorage.basket)
			{
				var basket = JSON.parse(localStorage.basket);
				return basket.map(x => x.id).includes(id);
			}
			return false;
		},
		getSize: (state) => (id) => {
			var basket = JSON.parse(localStorage.basket);
			return basket.find(x => x.id == id).size;
		},
		getBasketItems(state) {
			return state.basketItems;
		},
		getBasketTotalCount(state) {
			return state.basketTotalCount
		},
		getBasketPrice(state) {
			return state.basketPrice
		}
	}
}


  