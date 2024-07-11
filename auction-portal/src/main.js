import 'bootstrap/dist/css/bootstrap.css'
import fontAwesomeProjectIconsPlugin from './plugins/fontAwesomeProjectIconsPlugin'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fontAwesomeProjectIconsPlugin)

app.mount('#app')
