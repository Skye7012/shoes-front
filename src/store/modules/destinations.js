import axios from 'axios'

export default {
	state: {
		destinations: [],
		destinationsTotalCount: 0,
	},
	actions: {
		async fetchDestinations({commit, state}) {
			try {
				const response = await axios.get('https://localhost:7163/Destinations');

				const destinationsTotalCount = response.data.totalCount;
				const destinations = response.data.items;
				commit('updateDestinations', destinations);
				commit('updateDestinationsTotalCount', destinationsTotalCount);
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
		updateDestinations(state, destinations) {
			state.destinations = destinations
		},
		updateDestinationsTotalCount(state, destinationsTotalCount) {
			state.destinationsTotalCount = destinationsTotalCount
		}
	},
	getters: {
	  allDestinations(state) {
		return state.destinations
	  },
	  destinationsTotalCount(state) {
		return state.destinationsTotalCount
	  }
	}
  }
  