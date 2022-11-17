import {createRouter, createWebHistory } from "vue-router"
import Landing from "../views/Landing.vue"
import About from "../views/About.vue"

const routes = [
    {
        path: "/",
        name: "Landing",
        component: Landing
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router