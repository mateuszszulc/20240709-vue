import 'bootstrap/dist/css/bootstrap.css'

// icons:
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faGavel } from '@fortawesome/free-solid-svg-icons'

library.add(faCartPlus, faGavel)
// end icons;

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('fa-icon', FontAwesomeIcon)

app.mount('#app')
