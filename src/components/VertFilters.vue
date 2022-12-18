<template>
  <div class="filter">
    <div>
      <select @change="changeFilter" class="select">
        <option
          v-for="sortOption in sortOptions"
          :key="sortOption.value"
          :value="sortOption.value"
        >
          {{ sortOption.title }}
        </option>
      </select>
      <button class="button" @click="shoes.downloadXMLFile">XML</button>
    </div>

    <div class="pagination-container">
      <button @click="decrementPage" class="button">Пред</button>

      <button
        @click="changePage(1)"
        :class="{ link: activePag === 1 }"
        class="button"
      >
        1
      </button>

      <input
        class="input"
        v-model="nowPage"
        :class="{ link: activePag === 2 }"
        placeholder="num"
      />

      <button
        @click="changePage(shoes.totalPages)"
        :class="{ link: activePag === 3 }"
        class="button"
      >
        {{ shoes.totalPages }}
      </button>

      <button @click="incrementPage" class="button">След</button>

      <button class="button count">
        {{ shoes.totalCount ? shoes.totalCount : 0 }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useShoesStore } from "@/stores/shoesStore";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      nowPage: 1,
      activePag: 2,
      sortOptions: [
        { title: "По названию", value: "Name" },
        { title: "Сначала дешевые", value: "Cheaper" },
        { title: "Сначала дорогие", value: "Expensive" },
      ],
    };
  },
  setup() {
    const shoes = useShoesStore();

    return {
      shoes,
    };
  },
  methods: {
    changePage(page: number) {
      if (page > 0 && page <= this.shoes.totalPages) {
        this.nowPage = page;
        this.shoes.page = page;
        this.shoes.fetchShoes();
      }
    },
    decrementPage() {
      if (this.nowPage <= 1) this.nowPage == 1;
      else this.nowPage--;
      this.activePag = 2;
    },
    incrementPage() {
      if (this.nowPage >= this.shoes.totalPages)
        this.nowPage = this.shoes.totalPages;
      else this.nowPage++;
      this.activePag = 2;
    },
    changeFilter(event: Event) {
      switch ((event.target as HTMLInputElement).value) {
        case "Name":
          this.shoes.sortOption = { OrderBy: "Name", IsAscending: true };
          break;
        case "Cheaper":
          this.shoes.sortOption = { OrderBy: "Price", IsAscending: true };
          break;
        case "Expensive":
          this.shoes.sortOption = { OrderBy: "Price", IsAscending: false };
          break;
      }

      this.shoes.fetchShoes();
    },
  },
  watch: {
    nowPage: {
      handler() {
        this.changePage(this.nowPage);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  margin-left: 10px;
  min-width: 2.5rem;
}

.select {
  box-sizing: border-box;
  border: 1.5px solid $light;
  border-radius: 0.25rem;
  height: 2.5rem;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
}

.link {
  background-color: $info;
  color: white;
}

.input {
  @extend .button;
  width: 4rem;
  text-align: center;
  cursor: auto;
}

.count {
  border-color: $info;
  border-radius: 2rem;
  width: auto;
}
</style>
