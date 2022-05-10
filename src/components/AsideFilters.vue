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
			Сезон
		</span>
		<ul class="menu-list">
			<li>
				<input type="checkbox">
				Лето
			</li>
			<li>
				<input type="checkbox">
				Демисезон
			</li>
		</ul>

		<span>
			Назначение
		</span>
		<ul class="menu-list">
			<li>
				<input type="checkbox">
				Повседневность
			</li>
			<li>
				<input type="checkbox">
				Баскетбол
			</li>
		</ul>
	</aside>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				brandFilters: []
			}
		},
		computed: {
			...mapGetters([
				'allBrands'
			]),
		},
		methods: {
			...mapActions([
				'fetchBrands',
				'fetchShoes'
			]),
			...mapMutations([
				'updateBrandFilters'
			])
		},
		mounted() {
			this.fetchBrands();
		},
		watch: {
			brandFilters() {
				// if(this.brandFilters.length != 0) {
					this.updateBrandFilters(this.brandFilters);
					this.fetchShoes({brandFilters: this.brandFilters});
				// }
			}
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