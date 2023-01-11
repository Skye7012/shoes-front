import { defineStore } from "pinia";
import { GetDestinationsResponseItem } from "@/api/Api";
import { apiClient } from "@/api/apiClient";

interface DestinationType {
  destinations: GetDestinationsResponseItem[];
  destinationsTotalCount: number;
}

export const useDestinationStore = defineStore({
  id: "destinations",

  state: (): DestinationType => ({
    destinations: [],
    destinationsTotalCount: 0
  }),

  actions: {
    async fetchDestinations() {
      try {
        const response = await apiClient.destinations.destinationsList();

        this.destinations = response.data.items ?? [];
        this.destinationsTotalCount = response.data.totalCount;
      } catch (e) {
        alert(e);
      }
    }
  }
});
