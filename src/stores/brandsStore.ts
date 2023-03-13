import { defineStore } from "pinia";
import { GetBrandsResponseItem } from "@/api/Api";
import { apiClient } from "@/api/apiClient";
import { throwError } from "@/ErrorHandling";

interface BrandType {
  brands: GetBrandsResponseItem[];
  brandsTotalCount: number;
}

export const useBrandStore = defineStore({
  id: "brands",

  state: (): BrandType => ({
    brands: [],
    brandsTotalCount: 0
  }),

  actions: {
    async fetchBrands() {
      try {
        const response = await apiClient.brands.brandsList();

        this.brands = response.data.items ?? [];
        this.brandsTotalCount = response.data.totalCount;
      } catch (e) {
        throwError(e);
      }
    }
  }
});
