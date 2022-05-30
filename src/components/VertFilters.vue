<template>
	<div class="filter">
			<select
			@change="changeFilter"
			class="select">

				<option 
				v-for="sortOption in sortOptions" 
				:key="sortOption.value"
				:value="sortOption.value">
					{{sortOption.title}}
				</option>

			</select>

			<button class="button" @click="downloadXMLFile">XML</button>

			<div class="pagination-container">
				<button 
				@click="this.decrementPage"
				class="button">Пред</button>

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
				@click="changePage(totalPages)" 
				:class="{'link': activePag === 3}"
				class="button">{{totalPages}}</button>

				<button 
				@click="incrementPage"
				class="button">След</button>

				<button 
				class="button count">
					{{totalCount ? totalCount : 0}}
				</button>
			</div>
		</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			nowPage: 1,
			activePag: 2,
			sortOptions: [
				{title: 'По названию', value: 'Name'},
				{title: 'Сначала дешевые', value: 'Cheaper'},
				{title: 'Сначала дорогие', value: 'Expensive'}
			]
		}
	},
	methods: {
		...mapMutations([
			'updatePage',
			'updateSortOption'
		]),
		...mapActions(["fetchShoes"]),
		downloadXMLFile() {
			var FileSaver = require('file-saver');
			var res = this.allShoes;
			res = JSON.stringify(res);
			res = eval("OBJtoXML("+res+");")
			var blob = new Blob([res], {type: "text/plain;charset=utf-8"});
			FileSaver.saveAs(blob, "catalog.xml");

			function OBJtoXML(obj) {
			var xml = '';
			for (var prop in obj) {
				xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
				if (obj[prop] instanceof Array) {
				for (var array in obj[prop]) {
					xml += "<" + prop + ">";
					xml += OBJtoXML(new Object(obj[prop][array]));
					xml += "</" + prop + ">";
				}
				} else if (typeof obj[prop] == "object") {
				xml += OBJtoXML(new Object(obj[prop]));
				} else {
				xml += obj[prop];
				}
				xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
			}
			var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
			return xml
			}
		},
		changePage(page) {
			if(page > 0 && page <= this.totalPages)
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
			if (this.nowPage >= this.totalPages)
				this.nowPage == this.totalPages;
			else
				this.nowPage++;
			this.activePag = 2;
		},
		changeFilter(event) {
			let sortOption;
			switch (event.target.value)
			{
				case 'Name':
					sortOption = {OrderBy: 'Name'};
					break;
				case 'Cheaper':
					sortOption = {OrderBy: 'Price'};
					break;
				case 'Expensive':
					sortOption = {OrderBy: 'Price', IsAscending: false};
					break;
			}
			this.updateSortOption(sortOption);
			this.fetchShoes();
		}
	},
	watch: {
		nowPage() {
			this.changePage(this.nowPage);
		}
	},
	computed: {
		...mapGetters([
			'totalCount',
			'totalPages',
			'allShoes'
		]),
	}
}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.filter {
	display: grid;
	grid-template-columns: min-content auto auto;
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

.count {
	border-color: $info;
	border-radius: 2rem;
	width: auto;
}

</style>