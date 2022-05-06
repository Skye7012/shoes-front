<template>
	<div class="mrows">
		<VertFilters></VertFilters>
		<div class="cards">
			<div class="card">
				<div class="img">
					
				</div>
				<div class="description">
					<span>Name</span>
					<span>Desctiption</span>
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
	display: inline-block;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
}

.img {
	background-image: url('@/assets/img/123.jpg');
	background-position: center center;
	background-size: cover;	
	height: 100%;
	aspect-ratio: 5 / 3;
	border-right: 1.5px solid $light;
}

</style>