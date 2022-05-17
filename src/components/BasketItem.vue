<template>
	<div class="basketItem">
		<div class="img" v-bind:style="{ 'background-image': `url('${require(`@/assets/img/shoes/${basketItem.image}`)}')`}">
		</div>
		<div class="description">
			<div class="title">
				<span>
					{{basketItem.name}}<br>
				</span>
			</div>
			<div class="categories">
				{{basketItem.brand.name}} / {{basketItem.destination.name}} / {{basketItem.season.name}}
			</div>
			<div class="price">
				{{basketItem.price}} ₽  <span class="size">{{getSize(basketItem.id)}}RU</span>
			</div>
			<div class="remove">
				<button
				@click="onRemovelick(basketItem.id)"
				class="button">Убрать из корзины</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
	data() {
		return {
			inBasket: false,
		}
	},
	methods: {
		...mapActions([
			'addShoe',
			'removeShoe',
		]),
		...mapMutations([
			'removeBasketItem',
		]),
		onRemovelick(id) {
			this.removeBasketItem(id);
			this.removeShoe(id);
		}
	},
	computed: {
		...mapGetters([
			'getSize'
		]),
	},
	props: {
		basketItem: {}
	},
}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.basketItem {
	display: flex;
	box-sizing: border-box;
	//box-shadow: 1px 1px 4px $light;
	border: 1px $light solid;
	border-radius: 0.25rem;
	margin: 4px;
	height: 120px;
}

.img {
	//background-image: url('@/assets/img/123.jpg');
	background-position: center center;
	background-size: cover;	
	height: 100%;
	aspect-ratio: 5 / 3;
	border-right: 1.5px solid $light;
	border-radius: 0.25rem 0 0 0.25rem;
}

.description {
	flex:1;

	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 5px;
}

.title {
	flex:1;
	margin: 0.2rem 0.5rem 0 0.5rem;
	overflow: hidden;
	text-align: center;
	span {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
}

.price {
	color: $danger;
}

.size {
	// color: white;
	// background-color: $info;
	color: initial;
	background-color: whitesmoke;
	background-size: 25px;
	border-radius: 4px;
	padding: 2px;
}

</style>