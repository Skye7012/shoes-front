<template>
	<div class="login">
		<input
			v-model="email"
			class="input"
			style="margin-bottom: 10px"
			placeholder="email"
			type="text">
		<input
			v-model="password"
			class="input"
			style="margin-bottom: 20px"
			placeholder="Пароль"
			type="password">
		<button 
			@click="doLogin({email, password})"
			class="button">
			Войти
		</button>
		<router-link to="/registration"
			style="margin-top:5px; text-align: right;" >Регистация</router-link>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				email: null,
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