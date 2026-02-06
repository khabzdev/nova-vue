import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@lettuce/ui/styles.css'
import './style.css'

// Import pages
import Dashboard from './pages/Dashboard.vue'
import Settings from './pages/Settings.vue'

// Configure routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/settings', name: 'settings', component: Settings },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
