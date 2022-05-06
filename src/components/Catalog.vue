<template>
	<div class="mcolumns">
		<div class="mcolumn">
			<div class="box">
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