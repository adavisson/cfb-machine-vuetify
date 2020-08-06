import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MatchHistory from "../views/MatchHistory.vue"
import TeamStats from "../views/TeamStats.vue"
import Roster from "../views/Roster.vue"

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
  },
  {
    path: "/team-stats",
    name: "Team Stats",
    component: TeamStats
  },
  {
    path: "/roster",
    name: "Roster",
    component: Roster
  }
];

const router = new VueRouter({
  routes
});

export default router;
