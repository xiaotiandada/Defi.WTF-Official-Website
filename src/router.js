import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "",
  routes: [
//    {
  //    path: "/",
    //  name: "home",
     // component: Home
   // },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/billboard",
      name: "billboard",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Billboard.vue")
    },
    {
      path: "/stuffs",
      name: "stuffs",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Stuffs.vue")
    },    
    {
      path: "/login/github",
      name: "GithubLogin",
      component: () => import("./views/GithubLogin.vue")
    },
    {
      path: "/login/twitter",
      name: "TwitterLogin",
      component: () => import("./views/TwitterLogin.vue")
    },
  ]
});
