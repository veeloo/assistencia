import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("@/views/Login"),
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("login_status") === "Login Success") {
                next("/home");
            } else next();
        },
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("login_status") === "Login Success") {
                next();
            } else next("/");
        },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About"),
        // beforeEnter : ((to,from,next)=> {
        //     if
        // })
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     let isAuth = JSON.stringify(localStorage.getItem("login_status"));
//     if (isAuth) {`
//         this.$disable = false;
//         next();
//     } else next("/");
// });

export default router;
