import { GetSeasonsResponseItem } from "@/api/Api";
import { apiClient } from "@/api/apiClient";
import { defineStore } from "pinia";

interface SeasonType {
  seasons: GetSeasonsResponseItem[];
  seasonsTotalCount: number;
}

export const useSeasonStore = defineStore({
  id: "seasons",

  state: (): SeasonType => ({
    seasons: [],
    seasonsTotalCount: 0,
  }),

  actions: {
    async fetchSeasons() {
      try {
        const response = await apiClient.seasons.seasonsList();

        this.seasons = response.data.items ?? [];
        this.seasonsTotalCount = response.data.totalCount;
      } catch (e) {
        alert(e);
      }
    },
  },
});
