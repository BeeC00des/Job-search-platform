import JobDetailsVue from "../views/JobDetails.vue"
import HomeVue from "../views/Home.vue"
import LoginVue from '../views/Login.vue'
import SignupVue from '../views/Signup.vue'
import {createRouter,createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL),
    routes: [
        {
            path :"/" ,
            name: "home",
            component: HomeVue

        },
        {
            path :"/details/:id" ,
            name: "jobDetail",
            component: JobDetailsVue

        }, 
        {
            path :"/login" ,
            name: "Login",
            component: LoginVue

        }, 
        {
            path :"/signup" ,
            name: "Signup",
            component: SignupVue

        }
    ]
})

export default router