import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MatchHistory from "../views/MatchHistory.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/match-history",
    name: "Match History",
    component: MatchHistory
  }
];

const router = new VueRouter({
  routes
});

export default router;
