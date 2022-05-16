import axios from 'axios'
import router from '@/router'

export default {
	state: {
		isAuth: !!localStorage.token,
		login: null,
		name: null,
		fname: null,
		phone: null,
		user: null
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
		async doRegister({commit, state}, user) {
			try {
				const response = await axios({
					method: 'post',
					url: 'User/register',
					data: {
						Login: user.login,
						Password: user.password,
						Name: user.name,
						Fname: user.fname,
						Phone: user.phone,
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
		},
		async fetchUser({commit, state}) {
			try {
				const response = await axios.get('https://localhost:7163/User');

				const user = response.data;
				commit('updateUser', user);
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
		updateLogin(state, login) {
			state.login = login
		},
		updateName(state, name) {
			state.name = name
		},
		updateFname(state, fname) {
			state.fname = fname
		},
		updatePhone(state, phone) {
			state.phone = phone
		},
		updateUser(state, user) {
			state.login = user.login;
			state.name = user.name;
			state.fname = user.fname;
			state.phone = user.phone;
			state.user = user;
		}
	},
	getters: {
		getIsAuth(state) {
			return state.isAuth
		},
		getUser(state) {
			return state.user
		},
		getLogin(state) {
			return state.login
		}
	}
  }
  