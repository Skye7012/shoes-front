<template>
	<div class="filter">
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
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

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

</style>