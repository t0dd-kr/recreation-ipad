import { createApp } from 'vue'
import App from '@/App.vue'
import { store } from '@/store'
import { router } from '@/router'
import ToggleButton from '@/components/ToggleButton.vue'

const app = createApp(App)

app.component('ToggleButton', ToggleButton)

app
.use(store)
.use(router)
.mount('#app')
