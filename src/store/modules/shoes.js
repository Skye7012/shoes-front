import axios from 'axios'

export default {
	state: {
		shoes: [],
		page: 1,
		totalCount: 0,
		limit: 4,
	},
	actions: {
		async fetchShoes({commit, state}) {
			try {
				const response = await axios.get('https://localhost:7163/Shoes', {
					params: {
						Page: state.page,
						Limit: state.limit,
					}
				});
				const totalCount = Math.ceil(response.data.totalCount / state.limit);
				const shoes = response.data.items;
				commit('updateShoes', shoes);
				commit('updateTotalCount', totalCount);
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
	  updateShoes(state, shoes) {
		state.shoes = shoes
	  },
	  updateTotalCount(state, totalCount) {
		state.totalCount = totalCount
	  },
	},
	getters: {
	  validPosts(state) {
		return state.posts.filter(p => {
		  return p.title && p.body
		})
	  },
	  allShoes(state) {
		return state.shoes
	  },
	  postsCount(state, getters) {
		return getters.validPosts.length
	  }
	}
  }
  