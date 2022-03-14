import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { router } from './router'
import './App.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

gsap.registerPlugin(ScrollTrigger)
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const app = createApp(App)
app.use(router)
app.mount('#app')
