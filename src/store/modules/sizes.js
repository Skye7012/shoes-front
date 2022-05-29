import axios from 'axios'

export default {
	state: {
		sizes: [],
		sizeFilters: [],
		sizesTotalCount: 0,
	},
	actions: {
		async fetchSizes({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8888/sizes');

				const sizes = response.data;
				const sizesTotalCount = sizes.length;
				commit('updateSizes', sizes);
				commit('updateSizesTotalCount', sizesTotalCount);
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
		updateSizes(state, sizes) {
			state.sizes = sizes
		},
		updateSizesTotalCount(state, sizesTotalCount) {
			state.sizesTotalCount = sizesTotalCount
		},
		updateSizeFilters(state, sizeFilters) {
			state.sizeFilters = sizeFilters
		}
	},
	getters: {
	  allSizes(state) {
		return state.sizes
	  },
	  sizesTotalCount(state) {
		return state.sizesTotalCount
	  },
	  sizeFilters(state){
		return state.sizeFilters
	  }
	}
  }
  