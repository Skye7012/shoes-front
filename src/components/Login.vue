<template>
	<div class="login">
		<input
			class="input"
			placeholder="Логин"
			type="text">
		<input
			class="input"
			style="margin-top:20px"
			placeholder="Пароль"
			type="text">
	</div>
</template>

<script>

export default {

	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.login {
	margin: auto auto;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.input {
	width: 100%;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	text-indent: 1rem;
}

</style>