function removeShoe(id) {
	if(localStorage.basket)
	{
		let basket = JSON.parse("[" + localStorage.basket + "]");
		basket = basket.filter(x => x != id)
		localStorage.setItem('basket', basket);
	}
}