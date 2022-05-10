<template>
	<div class="card">
		<div class="img" v-bind:style="{ 'background-image': `url('${require(`@/assets/img/shoes/${shoe.image}`)}')`}">
		</div>
		<div class="description">
			<div class="title">
				<span>
					{{shoe.name}}<br>
				</span>
			</div>
			<div class="categories">
				{{shoe.brand.name}} / {{shoe.destination.name}} / {{shoe.season.name}}
			</div>
			<div class="price">
				{{shoe.price}} ₽
			</div>
			<div class="buy">
				<button class="button link">Купить</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			shoe: {
				title: {
				type: String,
				},
				url: {
				type: String,
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.card {
	display: flex;
	box-sizing: border-box;
	box-shadow: 1px 1px 4px $light;
	border-radius: 0.25rem;
	margin: 4px;
}

.img {
	//background-image: url('@/assets/img/123.jpg');
	background-position: center center;
	background-size: cover;	
	height: 100%;
	aspect-ratio: 5 / 3;
	border-right: 1.5px solid $light;
}

.description {
	flex:1;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	flex:1;
	margin: 0.2rem 0.5rem 0 0.5rem;
	overflow: hidden;
	text-align: center;
	span {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
}

.price {
	color: $danger;
}

</style>