import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
export default[
    { 
        path: '/login',
        name: "LoginPage",
        component: LoginPage,
     },

     {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
      }
]