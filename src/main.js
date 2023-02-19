import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'


axios.defaults.baseURL = 'https://localhost:7132/api/'


createApp(App).use(router)
              .mount('#app')
