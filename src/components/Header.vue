<template>
	<div class="nav">
		<a class="nav-item">
          <span class="title">Shoes</span>
        </a>
        <div class="nav-item search"> 
			<input class="input" type="text" placeholder="Найти">
			<button class="find">Найти</button>
        </div>
		<div class="nav-item-end">
			<button class="btn">
				<span class="icon">
				<i class="icons fa-solid fa-user"></i>
				</span>
				<span>Войти</span>
			</button>
			<button class="btn end">
				<span class="icon">
				<i class="icons fa-solid fa-user"></i>
				</span>
				<span>Корзина</span>
			</button>
      	</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/my.scss';
$text-size: 3em;
$size: 3em;

.nav {
	width: 100%;
	//padding: 0 5vw;
	display: grid;
	grid-template-columns: auto 1fr auto;
	&-item {
		margin: auto 0;
		padding: 0 10px;
		&-end {
			margin: auto 0;
			padding: 0 10px;
			margin-left: auto;
		}
	}
}

.search {
	position: relative;
}

.input {
	width: 100%;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
}

.title {
	font-size: 3rem;
	font-weight: bold;
	color: $info;
}

.btn {
	background-color: white;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	span {
		font-size: 1rem;
		i {
			padding-right: 5px;
		}
	}
}

.find {
	position: absolute;
	@extend .btn;
	background-color: $info; 
	color: white;
	right: 0;
}

.end {
	margin-left: 10px;
}

</style>
