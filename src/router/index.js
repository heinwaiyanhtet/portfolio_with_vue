import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout";
import NotFound from "../views/NotFound";
import Projects from "../views/Projects";
import Skills from "../views/Skills";
import Testimonials from "../views/Testimonials";
import Contact from "../views/Contact";
import About from "../views/About";


const routes = [
  {
    path: "/",
    name: "About",
    component:About,
  },
  {
    path: "/projects",
    name: "Projects",
    component:Projects,
  },
  {
    path: "/skills",
    name: "Skills",
    component:Skills,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component:Testimonials,
  },
  {
    path: "/contact",
    name: "Contact",
    component:Contact,
  },
  // {
  //   path: '/:afterEvent(.*)',
  //   redirect:() => {
  //     return {path:'/'}
  //   },
  // },
  {
    path: '/aaa',
    name: "NotFound",
    component:NotFound,
    // path: "/about",
    // name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
