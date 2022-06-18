import axios from 'axios'

export default {
	state: {
		destinations: [],
		destinationFilters: [],
		destinationsTotalCount: 0,
	},
	actions: {
		async fetchDestinations({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8000/destination');

				const destinations = response.data;
				commit('updateDestinations', destinations);
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
		},
		updateDestinationFilters(state, destinationFilters) {
			state.destinationFilters = destinationFilters
		}
	},
	getters: {
	  allDestinations(state) {
		return state.destinations
	  },
	  destinationsTotalCount(state) {
		return state.destinationsTotalCount
	  },
	  destinationFilters(state){
		return state.destinationFilters
	  }
	}
  }
  