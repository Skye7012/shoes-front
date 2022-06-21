import axios from 'axios'
import router from '@/router'

export default {
	state: {
		isAuth: !!localStorage.token,
		email: null,
		firstName: null,
		lastName: null,
		phone: null,
		user: null
	},
	actions: {
		async doRegister({commit, state}, user) {
			try {
				var bodyFormData = new FormData();
				bodyFormData.append('email', user.email);
				bodyFormData.append('password', user.password);
				bodyFormData.append('first_name', user.firstName);
				bodyFormData.append('last_name', user.lastName);
				bodyFormData.append('phone', user.phone);

				const response = await axios({
					method: 'post',
					url: 'user/signup/',
					data: bodyFormData,
				});
				
				router.push('/login');
			}
			catch (e) {
				alert(e)
			}
		},
		async doLogin({commit, state}, {email, password}) {
			try {
				var bodyFormData = new FormData();
				bodyFormData.append('email', email);
				bodyFormData.append('password',password);

				const response = await axios({
					method: 'post',
					url: 'user/login/',
					data: bodyFormData,
				});

				localStorage.setItem('token', response.data);
				axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
				state.isAuth = true;
				router.push('/profile');
			}
			catch (e) {
				alert(e)
			}
		},
		async verify({commit, state}, {code}) {
			try {
				const response = await axios({
					method: 'post',
					url: 'user/verify/',
					params: {
						code: code,
					},
				});
			}
			catch (e) {
				return Promise.reject(e)
			}
		},
		async doLogout({commit, state}) {

			const response = await axios({
				method: 'post',
				url: 'user/logout/',
			});

			localStorage.removeItem('token');
			delete axios.defaults.headers.common['Authorization']
			state.isAuth = false;
			router.push('/login');
		},
		async fetchUser({commit, state}) {
			try {
				const response = await axios.get('http://localhost:8000/user/');
				
				var user = response.data;

				user = parseRequestUser(user);

				commit('updateUser', user);
			}
			catch (e) {
				alert(e)
			}
		},
		async putUser({commit, state}, user) {
			try {
				const response = await axios({
					method: 'put',
					url: 'user/',
					data: {
						first_name: user.firstName,
						last_name: user.lastName,
						phone: user.phone,
					}
				});
				
				commit('updateUser', user);
			}
			catch (e) {
				alert(e)
			}
		},
		async deleteUser({commit, state}) {
			try {
				const response = await axios({
					method: 'delete',
					url: 'user/',
				});

				this.isAuth= false;
				this.email= null;
				this.firstName= null;
				this.lastName= null;
				this.phone= null;
				this.user= null;
				localStorage.removeItem('token');
				localStorage.removeItem('basket');
				delete axios.defaults.headers.common['Authorization']
				
				router.push('/');
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
		updateUser(state, user) {
			state.email = user.email;
			state.firstName = user.firstName;
			state.lastName = user.lastName;
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
		getEmail(state) {
			return state.email
		}
	},
}

function parseRequestUser(user) {
	return {
		email: user.email,
		firstName: user.first_name,
		lastName: user.last_name,
		phone: user.phone,
	}
}
