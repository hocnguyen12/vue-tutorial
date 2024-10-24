import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Basic counter example
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
