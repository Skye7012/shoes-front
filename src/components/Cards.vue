<template>
	<div class="mrows">
		<VertFilters></VertFilters>
		<div class="cards">
			<div class="card">
				<div class="img">
				</div>
				<div class="description">
					<div class="title">
						<span>
							Мужские беговые кроссовки UNDER ARMOUR 3023639-104 VICTORY Мужские беговые кроссовки UNDER ARMOUR 3023639-104 VICTORY
						</span>
					</div>
					<div class="price">
						7199 ₽
					</div>
					<div class="buy">
						<button class="button link">Купить</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VertFilters from '@/components/VertFilters.vue'
	export default {
		components: {
			VertFilters
		},
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.mrows {
	//width: 100%;
	height: 500px;
	display: grid;
	grid-template-rows: 50px auto;
	column-gap: 10px;
}

// .filter {
// 	display: grid;
// 	grid-template-columns: min-content auto;
// 	align-items: center;
// }

// .button {
// 	margin: auto 5px;
// 	min-width: 2.5rem;
// }

// .select {
// 	box-sizing: border-box;
// 	border: 1.5px solid $light;
// 	border-radius: 0.25rem;
// 	height: 2.5rem;
// }

// .pagination-container {
// 	display: flex;
// 	justify-content: space-around;
// }


.cards {
	overflow: hidden;
	margin-top: 10px;
	//height: 500px;
	display: grid;
	grid-template-rows: 120px;
	row-gap: 10px;
	// display: flex;
	// flex-direction: column;
	// row-gap: 10px;
}

.card {
	// display: grid;
	// grid-template-columns: auto 1fr;
	//justify-content: space-between;
	// position: relative;
	display: flex;
	box-sizing: border-box;
	box-shadow: 1px 1px 4px $light;
	//border: 1.5px solid $light;
	border-radius: 0.25rem;
	margin: 4px;
}

// .card::after {
// 	content: '';
//     top:0; left:0; right:0; bottom:0;
//     position: absolute;
//     -webkit-box-shadow: inset 0px 0px 10px 7px #000000;
//     -moz-box-shadow: inset 0px 0px 10px 7px #000000;
//     -ms-box-shadow: inset 0px 0px 10px 7px #000000;
//     -o-box-shadow: inset 0px 0px 10px 7px #000000;
//     box-shadow: inset 0px 0px 10px 7px #000000;
// }

.img {
	background-image: url('@/assets/img/123.jpg');
	background-position: center center;
	background-size: cover;	
	height: 100%;
	aspect-ratio: 5 / 3;
	border-right: 1.5px solid $light;
}

.description {
	flex:1;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	flex:1;
	margin: 0.2rem 0.5rem 0 0.5rem;
	// overflow: hidden;
	// word-wrap: break-word
	overflow: hidden;
	span {
		display: -webkit-box;
		//max-width: 200px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		// text-overflow: ellipsis;
	}
}

.price {
	color: $danger;
}

.link {
	background-color: $info;
	color: white;
}

</style>