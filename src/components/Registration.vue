<template>
	<div class="registration">
		<input
			v-model="email"
			class="input"
			v-bind:class="{ req: !email }"
			placeholder="Почта"
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
			v-model="firstName"
			class="input"
			placeholder="Имя"
			type="text">
		<input
			v-model="lastName"
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
				email: null,
				password: null,
				confirmPassword: null,
				firstName: null,
				lastName: null,
				phone: null,
			}
		},
		methods: {
			...mapActions([
				'doRegister'
			]),
			register() {
				if(!this.email) {
					alert('Почта обязательна');
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
				if(!this.firstName) {
					alert('Имя обязательно');
					return;
				}

				var user = {
					email: this.email,
					password: this.password,
					firstName: this.firstName,
					lastName: this.lastName,
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