<template>
	<div class="login">
		<input
			v-model="login"
			class="input"
			style="margin-bottom: 10px"
			placeholder="Логин"
			type="text">
		<input
			v-model="password"
			class="input"
			style="margin-bottom: 20px"
			placeholder="Пароль"
			type="password">
		<button 
			@click="doLogin({login, password})"
			class="button">
			Войти
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				login: null,
				password: null,
			}
		},
		methods: {
			...mapActions([
				'doLogin'
			])
		}
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