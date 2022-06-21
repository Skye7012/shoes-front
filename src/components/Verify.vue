<template>
	<div class="verify">
		<p>
			{{message}}
		</p>
		<button 
			@click="$router.push('/profile')"
			v-show="!error"
			class="button">
			Зайти в профиль
		</button>
	</div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
	data() {
		return {
			message: 'Ошибка',
			error: false,
		}
	},
	methods: {
		...mapActions([
			'verify',
		]),
	},
	mounted() {
		debugger;

		const code = this.$route.query.code;

		if (code) {
			try {
				this.verify({code}).then(
					res => {
						alert('1')
					}, err => {
						alert('2')
					})
				this.message = "Аккаунт успешно верифицирован!";
				this.error = false;
			}
			catch(e) {
				this.message = e;
				this.error = true;
			}
		}
		else {
			this.message = 'Не указан код подтвеждения'
			this.error = true
		}
	}
}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.verify {
	margin: auto auto;
	
	display: flex;
	flex-direction: column;
	justify-content: center;

}

.button {
	margin-top: 20px;
}

</style>