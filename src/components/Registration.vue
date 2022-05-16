<template>
	<div class="registration">
		<input
			v-model="login"
			class="input"
			v-bind:class="{ req: !login }"
			placeholder="Логин"
			type="text">
		<input
			v-model="password"
			class="input"
			v-bind:class="{ req: !password }"
			placeholder="Пароль"
			type="password">
		<input
			v-model="confirmPassword"
			class="input"
			v-bind:class="{ req: !confirmPassword }"
			placeholder="Подтвердите пароль"
			type="password">
		<input
			v-model="name"
			class="input"
			v-bind:class="{ req: !name }"
			placeholder="Имя"
			type="text">
		<input
			v-model="fname"
			class="input"
			placeholder="Фамилия"
			type="text">
		<input
			v-model="phone"
			class="input"
			placeholder="Телефон"
			type="text">
		<button 
			@click="register"
			class="button">
			Зарегестрироваться
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
				confirmPassword: null,
				name: null,
				fname: null,
				phone: null,
			}
		},
		methods: {
			...mapActions([
				'doRegister'
			]),
			register() {
				if(!this.login) {
					alert('Логин обязателен');
					return;
				}
				if(!this.password) {
					alert('Пароль обязателен');
					return;
				}
				if(!this.confirmPassword) {
					alert('Подтвердите пароль');
					return;
				}
				if(this.password != this.confirmPassword) {
					alert('Пароли не совпадают');
					return;
				}
				if(!this.name) {
					alert('Имя обязательно');
					return;
				}

				var user = {
					login: this.login,
					password: this.password,
					name: this.name,
					fname: this.fname,
					phone: this.phone,
				}
				
				this.doRegister(user);
			}
		}
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.registration {
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

	margin-bottom: 10px;
}

.button {
	margin-top: 20px;
}

.req {
	border-color: $danger;
}

</style>