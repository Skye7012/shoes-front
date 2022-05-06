<template>
	<div class="mcolumns">
		<div class="mcolumn">
			<div class="box">
				<aside class="menu">
			  <p class="menu-label">
				Брэнды
			  </p>
			  <ul class="menu-list">
				<li>
				  <label class="checkbox">
					<input type="checkbox">
					Adidas
				  </label>
				</li>
				<li>
				  <label class="checkbox">
					<input type="checkbox">
					Nike
				  </label>
				</li>
			  </ul>
			  <p class="menu-label">
				Сезон
			  </p>
			  <ul class="menu-list">
				<li>
				  <label class="checkbox">
					<input type="checkbox">
					Лето
				  </label>
				</li>
				<li>
				  <label class="checkbox">
					<input type="checkbox">
					Демисезон
				  </label>
				</li>
			  </ul>
			  <p class="menu-label">
				Назначение
			  </p>
			  <ul class="menu-list">
				<li>
				  <div class="checkbox">
					<input type="checkbox">
					Повседневность
					</div>
				</li>
				<li>
				  <label class="checkbox">
					<input type="checkbox">
					Баскетбол
				  </label>
				</li>
			  </ul>
			</aside>
			</div>
		</div>
		<div class="mcolumn">
			<div class="box mbox">
				<Cards></Cards>
			</div>
		</div>
	</div>
</template>

<script>
import Cards from '@/components/Cards.vue'
	export default {
		components: {
			Cards
		},
	}
</script>

<style lang="scss" scoped>

//@import '@/css/bulma/sass/elements/box.scss';

.mcolumns {
	width: 100%;
	margin-top: 20px;
	height: 500px;
	padding: 0 2vw;
	display: grid;
	grid-template-columns: 200px auto;
	column-gap: 10px;
}

.mcolumn {
	height: 90%;
}

.box {
	height: 100%;
}

.mbox {
	padding-top: 0.25rem;
}

</style>