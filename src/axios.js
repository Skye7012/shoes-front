import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:8888/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';