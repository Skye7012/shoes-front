<template>
	<div class="mcolumns">
		<div class="mcolumn">
			<div class="box">
				<AsideFilters></AsideFilters>
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
import AsideFilters from '@/components/AsideFilters.vue'

export default {
		components: {
			Cards,
			AsideFilters
		},
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

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