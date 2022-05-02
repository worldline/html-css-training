import { createApp } from 'vue'
import App from './App.vue'

import FloatingVue from 'floating-vue'

createApp(App)
    .use(FloatingVue)
    .mount('#app')
