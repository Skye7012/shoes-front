<template>
	<div class="mrows">
		<div class="mrow filter">
			<div class="level-item">
				<div class="select is-small">
					<select>
					<option>Популярные</option>
					<option>Сначала дешевые</option>
					<option>Сначала дорогие</option>
					<option>По размеру скидки</option>
					</select>
				</div>
			</div>
			<div class="level-item">
			<div class="mpagination" role="navigation" aria-label="pagination">
				<button class="button is-small">Previous</button>
				<button class="button is-small">1</button>
				<button class="button is-small is-link">1</button>
				<button class="button is-small">86</button>
				<button class="button is-small">Next</button>
			</div>
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
}

.button {
	margin: auto 5px !important;
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