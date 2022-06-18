<template>
	<aside class="menu">
		<button @click="dropFilters"
		class="button">
			Сбросить фильтры
		</button>

		<span class="title">
			Брэнды
		</span>
		<ul class="menu-list">
			<li v-for="brand in allBrands" :key="brand.id">
				<input 
				v-model="brandFilters"
				type="checkbox"
				:value=brand.id>
				{{brand.name}}
			</li>
		</ul>

		<span>
			Назначение
		</span>
		<ul class="menu-list">
			<li v-for="destination in allDestinations" :key="destination.id">
				<input 
				v-model="destinationFilters"
				type="checkbox"
				:value=destination.id>
				{{destination.name}}
			</li>
		</ul>

		<span>
			Сезон
		</span>
		<ul class="menu-list">
			<li v-for="season in allSeasons" :key="season.id">
				<input 
				v-model="seasonFilters"
				type="checkbox"
				:value=season.id>
				{{season.name}}
			</li>
		</ul>

		<span>
			Размеры
		</span>
		<ul class="menu-list">
			<li v-for="size in allSizes" :key="size">
				<input 
				v-model="sizeFilters"
				type="checkbox"
				:value=size>
				{{size}}
			</li>
		</ul>
	</aside>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			// try use only getters from busket store
			return {
				brandFilters: [],
				destinationFilters: [],
				seasonFilters: [],
				sizeFilters: [],
			}
		},
		computed: {
			...mapGetters([
				'allBrands',
				'allDestinations',
				'allSeasons',
				'allSizes',
			]),
		},
		methods: {
			...mapActions([
				'fetchBrands',
				'fetchShoes',
				'fetchDestinations',
				'fetchSeasons',
				'fetchSizes',
				'dropFiltersAction',
			]),
			...mapMutations([
				'updateSearchQuery',
				'updateBrandFilters',
				'updateDestinationFilters',
				'updateSeasonFilters',
				'updateSizeFilters',
			]),
			dropFilters() {
				this.brandFilters = [];
				this.destinationFilters = [];
				this.seasonFilters = [];
				this.sizeFilters = [];

				this.dropFiltersAction();
				this.fetchShoes();
			}
		},
		mounted() {
			this.fetchBrands();
			this.fetchDestinations();
			this.fetchSeasons();
			this.fetchSizes();
		},
		watch: {
			brandFilters() {
				if(this.brandFilters[0] != null) {
					this.updateBrandFilters(this.brandFilters);
					this.fetchShoes();
				}
			},
			destinationFilters() {
				if(this.destinationFilters[0] != null) {
					this.updateDestinationFilters(this.destinationFilters);
					this.fetchShoes();
				}
			},
			seasonFilters() {
				if(this.seasonFilters[0] != null){
					this.updateSeasonFilters(this.seasonFilters);
					this.fetchShoes();
				}
			},
			sizeFilters() {
				if(this.sizeFilters[0] != null){
					this.updateSizeFilters(this.sizeFilters);
					this.fetchShoes();
				}
			},
		}
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.menu {
	ul {
		padding-left: 10px;
		li {
				list-style-type: none;
		}
	}
}

.select {
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	margin: 10px auto ;
}

.button {
	margin-top: 5px;
	margin-bottom: 20px;
}

</style>