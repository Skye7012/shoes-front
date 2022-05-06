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
		<div class="mrow">
			
			<div class="columns is-multiline">
				<div class="column is-one-third">
				<div class="card">
					<div class="card-image">
					<figure class="image is-3by4">
						<img src="1.webp" alt="Placeholder image">
					</figure>
					</div>
					<div class="card-content">
					<p class="title">
						id = 2
					</p>
					</div>
					<footer class="card-footer">
					<a class="card-footer-item has-background-link has-text-white">
						<span>
						<i class="fa-solid fa-cart-shopping"></i>
						Купить
						</span>
					</a>
					</footer>
				</div>
              </div>
            
            </div>

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

.image {
	// width: 100px;
	// height: 100px;
}

</style>