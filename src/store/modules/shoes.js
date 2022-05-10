import axios from 'axios'
import qs from 'qs'

export default {
	state: {
		shoes: [],
		page: 1,
		totalCount: 0,
		limit: 4,
		sortOption: {OrderBy: 'Name'},
		searchQuery: null,
	},
	actions: {
		async fetchShoes({commit, state}, filters = {brandFilters: [], destinationFilters: [], seasonFilters: []}) {
			try {
				const response = await axios.get('https://localhost:7163/Shoes', {
					params: {
						Page: state.page,
						Limit: state.limit,
						...state.sortOption,
						...state.searchQuery,
						BrandFilters: filters.brandFilters,
						DestinationFilters: filters.destinationFilters,
						SeasonFilters: filters.seasonFilters,
					},
					paramsSerializer: params => {
						return qs.stringify(params)
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
	  updatePage(state, page) {
		state.page = page;
	  },
	  updateSortOption(state, sortOption) {
		state.sortOption = sortOption;
	  },
	  updateSearchQuery(state, searchQuery) {
		state.searchQuery = {SearchQuery: searchQuery};
	  },
	},
	getters: {
	  allShoes(state) {
		return state.shoes
	  },
	  totalCount(state) {
		return state.totalCount
	  }
	}
  }
  