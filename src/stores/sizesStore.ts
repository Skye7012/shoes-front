import { defineStore } from "pinia";
import { apiClient } from "@/api/apiClient";
import { throwError } from "@/ErrorHandling";

interface SizeType {
  sizes: number[];
  sizesTotalCount: number;
}

export const useSizesStore = defineStore({
  id: "sizes",

  state: (): SizeType => ({
    sizes: [],
    sizesTotalCount: 0
  }),

  actions: {
    async fetchSizes() {
      try {
        const response = await apiClient.sizes.sizesList();

        this.sizes = response.data;
        this.sizesTotalCount = response.data.length;
      } catch (e) {
        throwError(e);
      }
    }
  }
});
