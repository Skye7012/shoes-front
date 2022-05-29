import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/axios'

const app = createApp(App)

app
	.use(store)
	.use(router)
	.mount('#app')
