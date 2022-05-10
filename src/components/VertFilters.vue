<template>
	<div class="filter">
			<select class="select">
				<option>Популярные</option>
				<option>Сначала дешевые</option>
				<option>Сначала дорогие</option>
				<option>По размеру скидки</option>
			</select>
			<div class="pagination-container">
				<button 
				@click="this.decrementPage"
				class="button">Previous</button>

				<button 
				@click="changePage(1)" 
				:class="{'link': activePag === 1}" 
				class="button">1</button>

				<input
				class="input"
				v-model="nowPage"
				:class="{'link': activePag === 2}"
				placeholder="num"/>

				<button 
				@click="changePage(totalCount)" 
				:class="{'link': activePag === 3}"
				class="button">{{totalCount}}</button>

				<button 
				@click="incrementPage"
				class="button">Next</button>
			</div>
		</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
	data() {
		return {
			nowPage: 1,
			activePag: 2,
		}
	},
	props: {
		totalCount: Number
	},
	methods: {
		...mapMutations([
			'updatePage'
		]),
		...mapActions(["fetchShoes"]),
		changePage(page) {
			if(page > 0 && page <= this.totalCount)
			{
				this.nowPage = page;
				this.updatePage(page);
				this.fetchShoes();
			}
		},
		decrementPage() {
			if (this.nowPage <= 1)
				this.nowPage == 1;
			else
				this.nowPage--;
			this.activePag = 2;
		},
		incrementPage() {
			if (this.nowPage >= this.totalCount)
				this.nowPage == this.totalCount;
			else
				this.nowPage++;
			this.activePag = 2;
		}
	},
	watch: {
		nowPage() {
			this.changePage(this.nowPage);
		}
	}
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
	margin-left: 10px;
	min-width: 2.5rem;
}

.select {
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
}

.pagination-container {
	//padding-left: 5vw;
	display: flex;
	justify-content: flex-end;
}

.link {
	background-color: $info;
	color: white;
}

.input {
	@extend .button; 
	width: 4rem;
	text-align: center;
	cursor: auto;
}

</style>