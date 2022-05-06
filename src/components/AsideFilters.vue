<template>
	<aside class="menu">
		<span>
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

		<p>asd</p>
		<p>asd</p>
		<p>asd</p>
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

</style>