<template>
	<div class="registration">
		<div>
			<label>email</label>
			<input
				v-model="email"
				class="input"
				placeholder="email"
				type="text"
				disabled
				>
		</div>
		<div>
			<label>Имя</label>
			<input
				v-model="firstName"	
				class="input"
				v-bind:class="{ req: !firstName, changed: firstName != getUser?.firstName }"
				placeholder="Имя"
				type="text">
		</div>
		<div>
			<label>Фамилия</label>
			<input
				v-model="lastName"
				class="input"
				v-bind:class="{ changed: lastName != getUser?.lastName }"
				placeholder="Фамилия"
				type="text">
		</div>
		<div>
			<label>Телефон</label>
			<input
				v-model="phone"
				class="input"
				v-bind:class="{ changed: phone != getUser?.phone }"
				placeholder="Телефон"
				type="text">
		</div>
		<button 
			@click="updateUser"
			class="button">
			Сохранить изменения
		</button>
		<button 
			@click="$router.push('/orders')"
			class="button link">
			Заказы
		</button>
		<button 
			@click="delProfile"
			class="button del">
			Удалить аккаунт
		</button>
		<button 
			@click="doLogout()"
			class="button exit">
			Выйти
		</button>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

	export default {
		data() {
			return {
				email: null,
				firstName: null,
				lastName: null,
				phone: null,
			}
		},
		methods: {
			...mapActions([
				'doLogout',
				'fetchUser',
				'putUser',
				'deleteUser'
			]),
			updateUser() {
				if(!this.firstName) {
					alert('Имя обязательно');
					return;
				}

				var user = {
					email: this.email,
					firstName: this.firstName,
					lastName: this.lastName,
					phone: this.phone,
				}
				this.putUser(user);
			},
			delProfile() {
				if(confirm('Вы уверены, что хотите удалить аккаунт?')) {
					this.deleteUser();
				}
				else {
					return;
				}
			}
		},
		computed: {
			...mapGetters([
				'getUser',
				'getEmail'
			]),
		},
		mounted() {
			this.fetchUser();
		},
		watch: {
			getUser() {
				var user = this.getUser;
				this.email = user.email;
				this.firstName = user.firstName;
				this.lastName = user.lastName;
				this.phone = user.phone;
			}
		}
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.registration {
	display: grid;
	grid-template-columns: 200px 200px;
	column-gap: 10px;
	grid-auto-rows: min-content;
	justify-content: center;
	align-content: center;
}

label {
	text-align: center;
}

.input {
	width: 100%;
	box-sizing: border-box;
	border: 1.5px solid $light;
	border-radius: 0.25rem;
	height: 2.5rem;
	text-align: center;

	margin-bottom: 10px;
}

.button {
	margin-bottom: 10px;
}

.del {
	background-color: $danger;
	color: white;
}

.changed {
	border-color: $info;
}

.req {
	border-color: $danger;
}

</style>