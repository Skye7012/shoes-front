<template>
	<div class="registration">
		<input
			v-model="login"
			class="input"
			placeholder="Логин"
			type="text"
			disabled
			>
		<input
			v-model="name"
			class="input"
			v-bind:class="{ req: !name, changed: name != getUser.name }"
			placeholder="Имя"
			type="text">
		<input
			v-model="fname"
			class="input"
			v-bind:class="{ changed: fname != getUser.fname }"
			placeholder="Фамилия"
			type="text">
		<input
			v-model="phone"
			class="input"
			v-bind:class="{ changed: phone != getUser.phone }"
			placeholder="Телефон"
			type="text">
		<button 
			class="button">
			Сохранить изменения
		</button>
		<button 
			class="button del">
			Удалить аккаунт
		</button>
		<button 
			@click="doLogout()"
			class="button">
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
			])
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