import axios from 'axios'

export default {
	state: {
		seasons: [],
		seasonFilters: [],
		seasonsTotalCount: 0,
	},
	actions: {
		async fetchSeasons({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8888/seasons');

				const seasonsTotalCount = response.data.totalCount;
				const seasons = response.data.items;
				commit('updateSeasons', seasons);
				commit('updateSeasonsTotalCount', seasonsTotalCount);
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
		updateSeasons(state, seasons) {
			state.seasons = seasons
		},
		updateSeasonsTotalCount(state, seasonsTotalCount) {
			state.seasonsTotalCount = seasonsTotalCount
		},
		updateSeasonFilters(state, seasonFilters) {
			state.seasonFilters = seasonFilters
		}
	},
	getters: {
	  allSeasons(state) {
		return state.seasons
	  },
	  seasonsTotalCount(state) {
		return state.seasonsTotalCount
	  },
	  seasonFilters(state){
		return state.seasonFilters
	  }
	}
  }
  