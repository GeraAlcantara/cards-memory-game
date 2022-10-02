import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/gameBase/src/css/styles.css'
import './assets/gameBase/src/js/main'
const app = createApp(App)

app.use(router)

app.mount('#app')
