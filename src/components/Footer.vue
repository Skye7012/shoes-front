<template>
	<footer class="footer">
		<p class="title">Shoes</p>
		<p>
			Тел<br>
			8 987 689 54 71</p>
		<p>
			Адрес<br>
			г. Москва ул. Пушкина д. 12
		</p>
	</footer>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';

.footer {
	margin-top: 50px;

	background-color: $white-bis;
	min-height: 20vh; //200px
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	color: $grey-dark;
}

.title {
	font-size: 3rem;
	font-weight: bold;
	color: $info;
}

</style>