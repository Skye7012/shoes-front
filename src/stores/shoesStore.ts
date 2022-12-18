import { apiClient } from "@/api/apiClient";
import { GetShoesResponseItem } from "@/api/Api";
import { defineStore } from "pinia";

export interface ISortOption {
  OrderBy: string;
  IsAscending: boolean;
}

interface ShoeType {
  shoes: GetShoesResponseItem[];
  page: number;
  totalCount: number;
  totalPages: number;
  limit: number;
  sortOption: ISortOption;
  searchQuery?: string;
  brandFilters: number[];
  destinationFilters: number[];
  seasonFilters: number[];
  sizeFilters: number[];
}

export const useShoesStore = defineStore({
  id: "shoes",

  state: (): ShoeType => ({
    shoes: [],
    page: 1,
    totalCount: 0,
    totalPages: 0,
    limit: 4,
    sortOption: { OrderBy: "Name", IsAscending: true },
    brandFilters: [],
    destinationFilters: [],
    seasonFilters: [],
    sizeFilters: [],
  }),

  actions: {
    async fetchShoes() {
      try {
        const response = await apiClient.shoes.shoesList({
          BrandFilters: this.brandFilters?.length
            ? this.brandFilters
            : undefined,
          DestinationFilters: this.destinationFilters?.length
            ? this.destinationFilters
            : undefined,
          SeasonFilters: this.seasonFilters?.length
            ? this.seasonFilters
            : undefined,
          SizeFilters: this.sizeFilters?.length ? this.sizeFilters : undefined,
          IsAscending: this.sortOption.IsAscending,
          OrderBy: this.sortOption.OrderBy,
          Limit: this.limit,
          Page: this.page,
          SearchQuery: this.searchQuery ? this.searchQuery : undefined,
        });

        this.totalPages = Math.ceil(response.data.totalCount / this.limit);
        this.totalCount = response.data.totalCount;
        this.shoes = response.data.items ?? [];
      } catch (e) {
        alert(e);
      }
    },

    async downloadXMLFile() {
      const response = await apiClient.shoes.getXmlList();
      apiClient.downloadFile(response);
    },
  },
});
