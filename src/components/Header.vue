<template>
	<div class="nav">
		<a class="nav-item">
          <span class="title is-2 has-text-info">Shoes</span>
        </a>
        <div class="nav-item search field has-addons">
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Найти" style="width: 40vw;">
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <div class="control">
            <button class="button is-info">
              Найти
            </button>
          </div>
        </div>
		<div class="nav-item-end">
			<a class="button is-inverted" style="margin-right: 10px">
			<span class="icon">
				<i class="icons fa-solid fa-user"></i>
			</span>
			<span>Войти</span>
			</a>
			<a class="button is-inverted">
			<span class="icon">
				<i class="fa-solid fa-cart-shopping"></i>
			</span>
			<span>Корзина</span>
			</a>
      	</div>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">

.nav {
	box-sizing: border-box;
	width: 100%;
	padding: 0 5vw;
	display: inline-flex;
	justify-content: space-between;
	&-item {
		margin: auto 10px;

		&-end {
			margin: auto 0;
			margin-left: auto;
		}
	}
}

.search {
	
}

.title {
	word-break: normal;
}

</style>
