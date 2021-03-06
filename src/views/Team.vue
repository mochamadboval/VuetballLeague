<template>
  <div>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="text-center">
          <img :src="team.team.logo" :alt="team.team.name" />
        </div>
        <h1 class="text-center my-2">{{ team.team.name }}</h1>
        <div class="row my-2">
          <div class="col-2 text-center">
            <strong>Est.</strong>
          </div>
          <div class="col">
            {{ team.team.founded }}
          </div>
        </div>
        <div class="row my-2">
          <div class="col-2 text-center">
            <i class="icofont-location-pin"></i>
          </div>
          <div class="col">
            {{ team.venue.name }}
          </div>
        </div>
        <div class="row my-2">
          <div class="col-2 text-center">
            <i class="icofont-people"></i>
          </div>
          <div class="col">
            {{ team.venue.capacity }}
          </div>
        </div>
        <div class="row my-2">
          <div class="col-2 text-center">
            <i class="icofont-road"></i>
          </div>
          <div class="col">{{ team.venue.address }}, {{ team.venue.city }}</div>
        </div>
      </div>
      <div class="col-md-8 text-center">
        <h2>Results</h2>
        <hr />
        <Season
          v-for="result in teamResults"
          :key="result.fixture.id"
          :season="result"
        />
        <h2>Fixtures</h2>
        <hr />
        <Season
          v-for="fixture in teamFixtures"
          :key="fixture.fixture.id"
          :season="fixture"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, TEAM, TEAM_FIXTURES } from "@/assets/config.js";
import Season from "@/components/TeamSeason.vue";

export default {
  name: "Team",
  components: {
    Season
  },
  data() {
    return {
      team: [],
      teamResults: [],
      teamFixtures: []
    };
  },
  mounted() {
    axios
      .get(`${API_FOOTBALL}${TEAM}${this.$route.params.id}`, API_KEY)
      .then(response => {
        const data = response.data.response[0];
        this.team = data;
      });
    axios
      .get(`${API_FOOTBALL}${TEAM_FIXTURES}${this.$route.params.id}`, API_KEY)
      .then(response => {
        const data = response.data.response;
        this.teamResults = data
          .filter(result => result.fixture.status.short === "FT")
          .slice(-5);
        this.teamFixtures = data
          .filter(fixture => fixture.fixture.status.short === "NS")
          .slice(0, 5);
      });
  }
};
</script>
