import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');