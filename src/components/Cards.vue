<template>
	<div class="mrows">
		<div class="mrow filter">
			<select class="select">
				<option>Популярные</option>
				<option>Сначала дешевые</option>
				<option>Сначала дорогие</option>
				<option>По размеру скидки</option>
			</select>
			<div class="pagination-container">
				<button class="button is-small">Previous</button>
				<button class="button is-small">1</button>
				<button class="button is-small is-link">1</button>
				<button class="button is-small">86</button>
				<button class="button is-small">Next</button>
			</div>
		</div>
		<div class="mrow cards">
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<p>asd </p>
			<!-- <div class="mbox"></div>
			<div class="mbox"></div>
			<div class="mbox"></div>
			<div class="mbox"></div>
			<div class="mbox"></div> -->

				
		</div>
	</div>
</template>

<script>
	export default {
		
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

.filter {
	display: grid;
	grid-template-columns: min-content auto;
	align-items: center;
}

.button {
	margin: auto 5px;
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
	justify-content: space-around;
}

.cards {
	margin-top: 10px;
	height: 500px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	//column-gap: 10px;
}

.mbox {
	width: 200px;
	height: 200px;
	background-color: red;
}

</style>