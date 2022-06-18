import axios from 'axios'

export default {
	state: {
		sizes: [],
		sizesTotalCount: 0,
	},
	actions: {
		async fetchSizes({commit, state}) {
			try {
				const response = await axios.get('https://localhost:7163/Sizes');

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
		}
	},
	getters: {
	  allSizes(state) {
		return state.sizes
	  },
	  sizesTotalCount(state) {
		return state.sizesTotalCount
	  }
	}
  }
  