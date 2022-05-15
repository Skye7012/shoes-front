import axios from 'axios'
import qs from 'qs'

export default {
	state: {
		basketItems: [],
	},
	actions: {
		addShoe({},id) {
			let basket = [];
			if(localStorage.basket) {
				basket = JSON.parse("[" + localStorage.basket + "]");
			}
			if (!basket.includes(id)) {
				basket.push(id);
			}
			localStorage.setItem('basket', basket);
		},
		removeShoe({},id) {
			if(localStorage.basket)
			{
				let basket = JSON.parse("[" + localStorage.basket + "]");
				basket = basket.filter(x => x != id)
				localStorage.setItem('basket', basket);
			}
		},
		async fetchBasketItems({commit, state}) {
			try {
				let ids = [];
				if(localStorage.basket) {
					ids = JSON.parse("[" + localStorage.basket + "]");
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
				commit('updateBasketItems', basketItems);
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
		removeBasketItem(state, id) {
			state.basketItems = state.basketItems.filter(x => x.id != id);

		}
	},
	getters: {
		getInBasket: (state) => (id) => {
			if(localStorage.basket)
			{
				var basket = JSON.parse("[" + localStorage.basket + "]");
				return basket.includes(id);
			}
			return false;
		},
		getBasketItems(state) {
			return state.basketItems;
		}
	}
}


  