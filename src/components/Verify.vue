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
		const code = this.$route.query.code;

		if (code) {
			this.verify({code})
				.then(() => {
					this.message = "Аккаунт успешно верифицирован!";
					this.error = false;
				})
				.catch(err => {
					this.message = err.response.data
					this.error = true
				})
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