export default {
	state: {
		
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
	},
	mutations: {
		
	},
	getters: {
		getInBasket: (state) => (id) => {
			if(localStorage.basket)
			{
				var basket = JSON.parse("[" + localStorage.basket + "]");
				return basket.includes(id);
			}
			return false;
		}
	}
  }
  