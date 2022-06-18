import axios from 'axios'

export default {
	state: {
		seasons: [],
		seasonsTotalCount: 0,
	},
	actions: {
		async fetchSeasons({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8000/season');

				const seasons = response.data;
				commit('updateSeasons', seasons);
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
  