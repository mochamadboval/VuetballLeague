<template>
  <div>
    <h1 class="text-center">Teams</h1>
    <hr />
    <div class="row flex-wrap">
      <div
        class="col-sm-6 col-md-4 col-lg-3 mb-3"
        v-for="team in teams"
        :key="team.team.id"
      >
        <router-link class="text-decoration-none" :to="`/team/${team.team.id}`">
          <div class="card bg-light text-dark text-center">
            <div class="card-body">
              <img :src="team.team.logo" :alt="team.team.name" height="150" />
            </div>
            <div class="card-footer">
              {{ team.team.name }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, TEAMS } from "@/assets/config.js";

export default {
  name: "Teams",
  data() {
    return {
      teams: []
    };
  },
  mounted() {
    axios.get(`${API_FOOTBALL}${TEAMS}`, API_KEY).then(response => {
      const data = response.data.response;
      this.teams = data.sort((a, b) => (a.team.name > b.team.name ? 1 : -1));
    });
  }
};
</script>
