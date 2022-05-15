// <template>
// 	<div class="mrows">
// 		<div class="basketItems" v-for="basketItem in getBasketItems" :key="basketItem.id">
// 			<BasketItem v-bind:basketItem="basketItem"></BasketItem>
// 		</div>
// 	</div>
// </template>

// <script>
// import BasketItem from '@/components/BasketItem.vue'

// import {mapGetters, mapActions} from 'vuex'

// 	export default {
// 		components: {
// 			BasketItem,
// 		},
// 		methods: mapActions([
// 			'fetchBasketItems'
// 		]),
// 		computed: mapGetters([
// 			'getBasketItems',
// 		]),
// 		mounted() {
// 			this.fetchBasketItems();
// 		}
// 	}

// </script>


// <style lang="scss" scoped>

// @import '@/assets/vars.scss';
// @import '@/assets/my.scss';

// // .mrows {
// // 	display: grid;
// // 	grid-template-rows: 50px auto;
// // 	column-gap: 10px;
// // }

// .basketItems {
// 	overflow-y: hidden;
// 	margin-top: 10px;
// 	display: grid;
// 	grid-auto-rows: 120px;
// 	row-gap: 10px;
// }

// .vert {
// 	margin: auto 4px;
// }

// </style>