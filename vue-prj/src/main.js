import { createApp } from 'vue'
import App from './App.vue'

import hellorReza from './components/hello-reza.vue'

const vueapp = createApp(App)
vueapp.component('hello-reza',hellorReza)

vueapp.mount('#app')
