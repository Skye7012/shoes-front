<template>
	<div class="columns">
		<div class="column">
			asd
		</div>
		<div class="column">
			asd
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

@import '@/css/bulma/sass/elements/box.scss';

.columns {
	//width: 100%;
	//padding: 0 5vw;
	display: grid;
	grid-template-columns: 200px auto;
	&-item {
		margin: auto 10px !important;

		&-end {
			margin: auto 0;
			margin-left: auto;
		}
	}
}

</style>