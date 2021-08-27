import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import { router } from './router'
import './App.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
