import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import router from './router/index'
import store from './store/index'

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";  
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App).use(router).use(store).use(PrimeVue).mount('#app')
