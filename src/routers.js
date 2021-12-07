import TheHeader from "./components/TheHeader.vue"
import BaseSignUp from "./components/BaseSignUp.vue"
import BaseSignIn from "./components/BaseSignIn.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: "TheHeader",
        component: TheHeader,
        path: "/"
    },
    {
        name: "BaseSignUp",
        component: BaseSignUp,
        path: "/signup"
    },
    {
        name: "BaseSignIn",
        component: BaseSignIn,
        path: "/signin"
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,

});
export default router;