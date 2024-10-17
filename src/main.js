import { createApp } from 'vue'
import App from './App.vue'
import {createMemoryHistory, createRouter} from 'vue-router'
import routes from '@/routes'
import './assets/tailwind.css'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
