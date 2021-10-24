import { createApp } from 'vue'
 import axios from 'axios'
import App from './App.vue'

axios.defaults.baseURL = 'https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app';

createApp(App).mount('#app')
