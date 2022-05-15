<template>
	<div class="basket">
		<BasketItems></BasketItems>
		<!-- <input
			v-model="login"
			class="input"
			style="margin-bottom: 10px"
			type="text"
			readonly
			v-text="login">
		<button 
			@click="doLogout()"
			class="button">
			Выйти
		</button> -->
	</div>
</template>

<script>
import BasketItems from '@/components/BasketItems.vue'

import {mapGetters, mapActions} from 'vuex'


	export default {
		components: {
			BasketItems,
		},
		// methods: mapActions([
		// 	'fetchBasketItems'
		// ]),
		// computed: mapGetters([
		// 	'getBasketItems',
		// ]),
		// mounted() {
		// 	await this.fetchBasketItems();
		// }
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.basket {
	margin: auto auto;
	
	display: flex;
	flex-direction: column;
	justify-content: center;

}

.input {
	width: 100%;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	text-align: center;
}

</style>