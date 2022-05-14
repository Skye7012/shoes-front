import axios from 'axios'

export default {
	state: {
		login: null,
		token: null,
	},
	actions: {
		async doLogin({commit, state}, {login, password}) {
			try {
				debugger;
				// var data = JSON.stringify({
				// 	"login": login,
				// 	"password": password,
				// });
				// const response = await axios.post('https://localhost:7163/Login', {
				// 	Login: login,
				// 	Password: password
				// });

				const response = await axios({
					method: 'post',
					url: 'User/login',
					data: {
						Login: login,
						Password: password
					}
				  });

				localStorage.setItem('token', response.data)
			}
			catch (e) {
				alert(e)
			}
	  },
	},
	mutations: {
		updateLogin(state, login) {
			state.login = login
		},
		updateToken(state, token) {
			state.token = token
		}
	},
	getters: {
	  getLogin(state) {
		return state.login
	  },
	  brandToken(state){
		return state.token
	  }
	}
  }
  