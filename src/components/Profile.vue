<template>
	<div class="registration">
		<div>
			<label>Логин</label>
			<input
				v-model="login"
				class="input"
				placeholder="Логин"
				type="text"
				disabled
				>
		</div>
		<div>
			<label>Имя</label>
			<input
				v-model="name"
				class="input"
				v-bind:class="{ req: !name, changed: name != getUser?.name }"
				placeholder="Имя"
				type="text">
		</div>
		<div>
			<label>Фамилия</label>
			<input
				v-model="fname"
				class="input"
				v-bind:class="{ changed: fname != getUser?.fname }"
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
				login: null,
				name: null,
				fname: null,
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
				if(!this.name) {
					alert('Имя обязательно');
					return;
				}

				var user = {
					login: this.login,
					name: this.name,
					fname: this.fname,
					phone: this.phone,
				}
				this.putUser(user);
			},
			delProfile() {
				if(confirm('Вы уверенты, что хотите удалить аккаунт?')) {
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
				'getLogin'
			]),
		},
		mounted() {
			this.fetchUser();
		},
		watch: {
			getUser() {
				var user = this.getUser;
				this.login = user.login;
				this.name = user.name;
				this.fname = user.fname;
				this.phone = user.phone;
			}
		}
	}

</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.registration {
	//margin: auto auto;
	
	// display: flex;
	// flex-direction: column;
	// justify-content: center;
	display: grid;
	grid-template-columns: 200px 200px;
	//grid-template-rows: auto;
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
	// padding-left: 10px;
	// padding-right: 10px;
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

// .exit {
// 	justify-self: center;
// 	grid-column: 1/3;
// 	width: 50%;
// }

</style>