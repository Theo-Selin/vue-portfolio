import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiceD6, faGamepad, faGhost } from '@fortawesome/free-solid-svg-icons'
library.add(faDiceD6, faGamepad, faGhost)

import './index.css'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
