import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/fixtures",
    name: "Fixtures",
    component: () => import("../views/Fixtures.vue"),
    meta: {
      title: "Fixtures | Vuetball League"
    }
  },
  {
    path: "/livescores",
    name: "LiveScores",
    component: () => import("../views/Livescores.vue"),
    meta: {
      title: "Live Scores | Vuetball League"
    }
  },
  {
    path: "/",
    name: "Results",
    component: () => import("../views/Results.vue"),
    meta: {
      title: "Results | Vuetball League"
    }
  },
  {
    path: "/standings",
    name: "Standings",
    component: () => import("../views/Standings.vue"),
    meta: {
      title: "Standings | Vuetball League"
    }
  },
  {
    path: "/teams",
    name: "Teams",
    component: () => import("../views/Teams.vue"),
    meta: {
      title: "Teams | Vuetball League"
    }
  },
  {
    path: "/team/:id",
    name: "Team",
    component: () => import("../views/Team.vue"),
    meta: {
      title: "Team | Vuetball League"
    }
  },
  {
    path: "/match/:id",
    name: "Match",
    component: () => import("../views/Match.vue"),
    meta: {
      title: "Match | Vuetball League"
    }
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "Page Not Found | Vuetball League"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
