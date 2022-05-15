<template>
	<div class="registration">
		<input
			v-model="login"
			class="input"
			style="margin-bottom: 10px"
			type="text"
			readonly
			v-text="login">
		<button 
			@click="doLogout()"
			class="button">
			Выйти
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				login: 'logingnngngng',
			}
		},
		methods: {
			...mapActions([
				'doLogout'
			])
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
}

</style>