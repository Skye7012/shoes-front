<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'm-button'
	}
</script>

<style lang="scss" scoped>
@import '@/assets/my.scss';

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

</style>