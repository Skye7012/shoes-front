<template>
	<aside class="menu">
		<span class="title">
			<strong>Сортировка</strong>
		</span>
		<select class="select">
				<option>Популярные</option>
				<option>Сначала дешевые</option>
				<option>Сначала дорогие</option>
				<option>По размеру скидки</option>
			</select>
		<span class="title">
			Брэнды
		</span>
		<ul class="menu-list">
			<li>
				<input type="checkbox">
				Adidas
			</li>
			<li>
				<input type="checkbox">
				Nike
			</li>
		</ul>

		<span>
			Сезон
		</span>
		<ul class="menu-list">
			<li>
				<input type="checkbox">
				Лето
			</li>
			<li>
				<input type="checkbox">
				Демисезон
			</li>
		</ul>

		<span>
			Назначение
		</span>
		<ul class="menu-list">
			<li>
				<input type="checkbox">
				Повседневность
			</li>
			<li>
				<input type="checkbox">
				Баскетбол
			</li>
		</ul>
	</aside>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

//peren
.menu {
	ul {
		padding-left: 10px;
		li {
				list-style-type: none;
		}
	}
}

.select {
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	margin: 10px auto ;
}

</style>