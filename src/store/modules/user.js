import axios from 'axios'
import router from '@/router'

export default {
	state: {
		isAuth: !!localStorage.token,
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
				router.push('/profile');
			}
			catch (e) {
				alert(e)
			}
		},
		async doRegister({commit, state}, {login, password}) {
			try {
				const response = await axios({
					method: 'post',
					url: 'User/register',
					data: {
						Login: login,
						Password: password
					}
				});
				
				router.push('/login');
			}
			catch (e) {
				alert(e)
			}
		},
		doLogout({commit, state}) {
			localStorage.removeItem('token');
			state.isAuth = false;
			router.push('/login');
		}
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
  