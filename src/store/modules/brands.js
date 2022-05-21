import axios from 'axios'

export default {
	state: {
		brands: [],
		brandFilters: [],
		brandsTotalCount: 0,
	},
	actions: {
		async fetchBrands({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8080/Brands');

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
		updateBrandFilters(state, brandFilters) {
			state.brandFilters = brandFilters
		}
	},
	getters: {
	  allBrands(state) {
		return state.brands
	  },
	  brandsTotalCount(state) {
		return state.brandsTotalCount
	  },
	  brandFilters(state){
		return state.brandFilters
	  }
	}
  }
  