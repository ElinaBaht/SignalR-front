import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "@/views/HomePage"
import QuestionPage from "@/views/QuestionPage"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage
    },
    {
        path: '/question/:id',
        name: 'QuestionPage',
        component: QuestionPage

    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router