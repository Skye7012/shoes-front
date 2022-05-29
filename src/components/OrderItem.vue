<template>
	<div class="orderItem">
		<div class="img" v-bind:style="{ 'background-image': `url('${require(`@/assets/img/shoes/${shoe.image}`)}')`}">
		</div>
		<div class="description">
			<div class="title">
				<span>
					{{shoe.name}}<br>
				</span>
			</div>
			<div class="price">
				{{shoe.price}} ₽ &nbsp; <span class="size">{{orderItem.ruSize}}RU</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shoe: {},
		}
	},
	methods: {
	},
	props: {
		orderItem: {}
	},
	created() {
		this.shoe = this.orderItem.shoe;
	},
}
</script>

<style lang="scss" scoped>

@import '@/assets/vars.scss';
@import '@/assets/my.scss';

.orderItem {
	display: flex;
	box-sizing: border-box;
	border: 1px $light solid;
	border-radius: 0.25rem;
	margin: 4px;
	height: 80px;
}

.img {
	background-position: center center;
	background-size: cover;	
	height: 100%;
	aspect-ratio: 5 / 3;
	border-right: 1.5px solid $light;
	border-radius: 0.25rem 0 0 0.25rem;
}

.description {
	flex:1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 5px;
	
}

.title {
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

.size {
	color: initial;
	background-color: whitesmoke;
	background-size: 25px;
	border-radius: 4px;
	padding: 2px;
}

</style>