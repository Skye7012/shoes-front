import axios from 'axios'
import qs from 'qs'

export default {
	state: {
		shoes: [],
		page: 1,
		totalCount: 0,
		totalPages: 0,
		limit: 4,
		sortOption: {OrderBy: 'Name'},
		searchQuery: null,
		brandFilters: [],
		destinationFilters: [],
		seasonFilters: [],
		sizeFilters: [],
	},
	actions: {
		async fetchShoes({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8000/shoe', {
					params: {
						Page: state.page,
						Limit: state.limit,
						...state.sortOption,
						...state.searchQuery,
						BrandFilters: state.brandFilters,
						DestinationFilters: state.destinationFilters,
						SeasonFilters: state.seasonFilters,
						SizeFilters: state.sizeFilters,
					},
					paramsSerializer: params => {
						return qs.stringify(params,  { arrayFormat: "repeat" })
					}
				});
				const totalPages = Math.ceil(response.data.totalCount / state.limit);
				const totalCount = response.data.totalCount;
				const shoes = response.data.items;
				commit('updateShoes', shoes);
				commit('updateTotalCount', totalCount);
				commit('updateTotalPages', totalPages);
			}
			catch (e) {
				alert(e)
			}
		},
		dropFiltersAction({state}) {
			state.searchQuery = ''
			state.brandFilters = []
			state.destinationFilters =[]
			state.seasonFilters = []
			state.sizeFilters = []
		}
	},
	mutations: {
	  updateShoes(state, shoes) {
		state.shoes = shoes
	  },
	  updateTotalCount(state, totalCount) {
		state.totalCount = totalCount
	  },
	  updateTotalPages(state, totalPages) {
		state.totalPages = totalPages
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
	  updateBrandFilters(state, brandFilters) {
		state.brandFilters = brandFilters;
	  },
	  updateDestinationFilters(state, destinationFilters) {
		state.destinationFilters = destinationFilters;
	  },
	  updateSeasonFilters(state, seasonFilters) {
		state.seasonFilters = seasonFilters;
	  },
	  updateSizeFilters(state, sizeFilters) {
		state.sizeFilters = sizeFilters;
	  },
	},
	getters: {
	  allShoes(state) {
		return state.shoes
	  },
	  totalCount(state) {
		return state.totalCount
	  },
	  totalPages(state) {
		return state.totalPages
	  },
	  searchQueryGetter(state) {
		return state.searchQuery
	  }
	}
  }
  