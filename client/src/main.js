import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiceD6, faGamepad, faGhost, faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faDiceD6, faGamepad, faGhost, faLinkedin, faGithub, faBars, faArrowDown)

import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"

import './index.css'

createApp(App)
.use(router)
.use(Toast, {position: POSITION.TOP_CENTER})
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
