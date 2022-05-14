import axios from 'axios'

export default {
	state: {
		isAuth: false,
	},
	actions: {
		async doLogin({commit, state}, {login, password}) {
			try {
				const response = await axios({
					method: 'post',
					url: 'User/login',
					data: {
						Login: login,
						Password: password
					}
				  });

				localStorage.setItem('token', response.data)
				state.isAuth = true;
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
		updateIsAuth(state, isAuth) {
			state.isAuth = isAuth
		},
	},
	getters: {
		getIsAuth(state) {
			return state.isAuth
		},
	}
  }
  