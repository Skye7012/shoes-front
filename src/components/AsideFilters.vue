<template>
	<aside class="menu">
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
	</aside>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				brandFilters: [],
				destinationFilters: [],
				seasonFilters: [],
			}
		},
		computed: {
			...mapGetters([
				'allBrands',
				'allDestinations',
				'allSeasons',
			]),
		},
		methods: {
			...mapActions([
				'fetchBrands',
				'fetchShoes',
				'fetchDestinations',
				'fetchSeasons',
			]),
			...mapMutations([
				'updateBrandFilters',
				'updateDestinationFilters',
				'updateSeasonFilters',
			])
		},
		mounted() {
			this.fetchBrands();
			this.fetchDestinations();
			this.fetchSeasons();
		},
		watch: {
			brandFilters() {
				this.updateBrandFilters(this.brandFilters);
				this.fetchShoes({brandFilters: this.brandFilters});
			},
			destinationFilters() {
				this.updateDestinationFilters(this.destinationFilters);
				this.fetchShoes({destinationFilters: this.destinationFilters});
			},
			seasonFilters() {
				this.updateSeasonFilters(this.seasonFilters);
				this.fetchShoes({seasonFilters: this.seasonFilters});
			},
		}
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

//peren
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

</style>