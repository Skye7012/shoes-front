import axios from 'axios'

export default {
	state: {
		brands: [],
		brandsTotalCount: 0,
	},
	actions: {
		async fetchBrands({commit, state}) {
			try {
				const response = await axios.get('https://localhost:7163/Brands');

				const brandsTotalCount = response.data.totalCount;
				const brands = response.data.items;
				commit('updateBrands', brands);
				commit('updateBrandsTotalCount', brandsTotalCount);
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
		updateBrands(state, brands) {
			state.brands = brands
		},
		updateBrandsTotalCount(state, brandsTotalCount) {
			state.brandsTotalCount = brandsTotalCount
		},
	},
	getters: {
	  allBrands(state) {
		return state.brands
	  },
	  brandsTotalCount(state) {
		return state.brandsTotalCount
	  }
	}
  }
  