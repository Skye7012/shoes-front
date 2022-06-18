import axios from 'axios'

export default {
	state: {
		seasons: [],
		seasonsTotalCount: 0,
	},
	actions: {
		async fetchSeasons({commit, state}) {
			try {
				const response = await axios.get('https://localhost:7163/Seasons');

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
		}
	},
	getters: {
	  allSeasons(state) {
		return state.seasons
	  },
	  seasonsTotalCount(state) {
		return state.seasonsTotalCount
	  }
	}
  }
  