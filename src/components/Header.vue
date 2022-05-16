<template>
	<div class="nav">
		<a @click="$router.push('/')" class="nav-item logo">
          <span class="title">Shoes</span>
        </a>
        <div class="nav-item search"> 

			<input 
			v-model="searchQuery"
			class="input" 
			type="text" 
			placeholder="Найти">

			<button 
			@click="search"
			class="find">Найти</button>
        </div>
		<div class="nav-item-end">
			<button @click="$router.push('/profile')" class="button">
				<span class="icon">
				<i class="icons fa-solid fa-user"></i>
				</span>
				<span>
					{{this.getIsAuth ? 'Профиль' : 'Войти'}}
				</span>
			</button>
			<button @click="$router.push('/basket')" class="button end">
				<span class="icon">
				<i class="fa-solid fa-cart-shopping"></i>
				</span>
				<span>
					Корзина
					<span class="count">{{getBasketTotalCount ? `(${getBasketTotalCount})` : ''}}</span>
				</span>
			</button>
      	</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
	data() {
		return {
			searchQuery: null,
		}
	},
	methods: {
		...mapMutations([
			'updateSearchQuery'
		]),
		...mapActions([
			'fetchShoes',
			'fetchBasketItems'
		]),
		search() {
			this.updateSearchQuery(this.searchQuery);
			this.fetchShoes();
		}
	},
	computed: {
		...mapGetters([
			'getIsAuth',
			'getBasketTotalCount'
		]),
	},
	mounted() {
		this.fetchBasketItems();
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/My/button.scss';

$text-size: 3em;
$size: 3em;

.nav {
	padding: 0 2vw;

	min-width: 700px;
	display: grid;
	grid-template-columns: auto 1fr auto;
	&-item {
		margin: auto 0;
		padding: 0 10px;
		&-end {
			margin: auto 0;
			padding-left: 10px;
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
	text-indent: 1rem;
}

.title {
	font-size: 3rem;
	font-weight: bold;
	color: $info;
}

.find {
	position: absolute;
	@extend .button;
	background-color: $info; 
	color: white;
	right: 0;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-left-width: 0;
}

.end {
	margin-left: 10px;
}

.button {
	span {
		font-size: 1rem;
		i {
			padding-right: 5px;
		}
	}
}

.logo {
	padding-left: 0;
	cursor: pointer;
}

.count {
	color: $info;
}

</style>
