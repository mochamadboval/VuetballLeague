<template>
  <div>
    <div class="row">
      <div class="col-4 text-end">
        <img
          :src="match.teams.home.logo"
          :alt="match.teams.home.name"
          height="75"
        />
      </div>
      <div class="col-4 text-center">
        <div class="badge bg-dark">
          {{ match.fixture.status.short }} {{ match.fixture.status.elapsed }}'
        </div>
        <div class="h1">{{ match.goals.home }} - {{ match.goals.away }}</div>
      </div>
      <div class="col-4">
        <img
          :src="match.teams.away.logo"
          :alt="match.teams.away.name"
          height="75"
        />
      </div>
      <div class="col-12 text-center text-secondary my-3">
        <div>
          <strong>HT</strong> {{ match.score.halftime.home }} -
          {{ match.score.halftime.away }}
        </div>
        <div>
          <i class="icofont-refree-jersey"></i> {{ match.fixture.referee }}
        </div>
        <div>
          <i class="icofont-whistle-alt"></i>
          {{
            new Date(match.fixture.date).toLocaleString("en-GB").slice(0, -3)
          }}
        </div>
        <div>
          <i class="icofont-location-pin"></i> {{ match.fixture.venue.name }},
          {{ match.fixture.venue.city }}
        </div>
      </div>
    </div>
    <Events
      v-for="(event, index) in match.events"
      :key="index"
      :event="event"
      :matchEvents="match"
    />
    <h1 class="text-center mt-3">Stats</h1>
    <hr />
    <div
      class="row align-items-center"
      v-for="(stat, index) in homeStats.length"
      :key="stat.type"
    >
      <div class="text-center mt-1">
        {{ homeStats[index].type }}
      </div>
      <div class="col-2 text-end">
        {{ homeStats[index].value }}
      </div>
      <div class="col-8">
        <div class="progress" style="height: .5rem;">
          <div
            class="progress-bar bg-success"
            :style="
              `width: ${(homeStats[index].value / totalStats[index]) * 100}%`
            "
          ></div>
          <div
            class="progress-bar bg-dark"
            :style="
              `width: ${(awayStats[index].value / totalStats[index]) * 100}%`
            "
          ></div>
        </div>
      </div>
      <div class="col-2">
        {{ awayStats[index].value }}
      </div>
    </div>
    <h1 class="text-center mt-3">Lineups</h1>
    <hr />
    <div class="text-center mb-3">XI</div>
    <div
      class="row align-items-center"
      v-for="(start, index) in homeLineups.startXI.length"
      :key="start.id"
    >
      <div class="col-5 text-end">
        {{ homeLineups.startXI[index].player.name }}
      </div>
      <div
        class="col-1 d-flex justify-content-center bg-success text-light rounded-start"
      >
        {{ homeLineups.startXI[index].player.number }}
      </div>
      <div
        class="col-1 d-flex justify-content-center bg-dark text-light rounded-end"
      >
        {{ awayLineups.startXI[index].player.number }}
      </div>
      <div class="col-5">
        {{ awayLineups.startXI[index].player.name }}
      </div>
      <div class="col-12 my-2"></div>
    </div>
    <div class="text-center mb-3">Subs</div>
    <div
      class="row align-items-center"
      v-for="(sub, index) in subsLength"
      :key="sub.id"
    >
      <div class="col-5 text-end text-secondary">
        {{ homeLineups.substitutes[index].player.name }}
      </div>
      <div
        class="col-1 d-flex justify-content-center bg-success text-light rounded-start"
      >
        {{ homeLineups.substitutes[index].player.number }}
      </div>
      <div
        class="col-1 d-flex justify-content-center bg-dark text-light rounded-end"
      >
        {{ awayLineups.substitutes[index].player.number }}
      </div>
      <div class="col-5 text-secondary">
        {{ awayLineups.substitutes[index].player.name }}
      </div>
      <div class="col-12 my-2"></div>
    </div>
    <div class="row align-items-center">
      <div class="col-5 text-end mt-2">
        {{ homeLineups.coach.name }} <br />
        <span class="text-secondary">{{ homeLineups.formation }}</span>
      </div>
      <div class="col-2 text-center mt-2">
        <i class="icofont-match-review"></i>
      </div>
      <div class="col-5 mt-2">
        {{ awayLineups.coach.name }} <br />
        <span class="text-secondary">{{ awayLineups.formation }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, MATCH } from "@/assets/config.js";
import Events from "@/components/Events.vue";

export default {
  name: "Match",
  components: {
    Events
  },
  data() {
    return {
      match: [],
      homeStats: [],
      awayStats: [],
      totalStats: [],
      homeLineups: [],
      awayLineups: [],
      subsLength: null
    };
  },
  mounted() {
    axios
      .get(`${API_FOOTBALL}${MATCH}${this.$route.params.id}`, API_KEY)
      .then(response => {
        const data = response.data.response[0];
        this.match = data;
        this.homeStats = this.match.statistics[0].statistics;
        this.awayStats = this.match.statistics[1].statistics;
        for (let i = 0; i < this.homeStats.length; i++) {
          this.homeStats[i].value = parseInt(this.homeStats[i].value);
          this.awayStats[i].value = parseInt(this.awayStats[i].value);
          if (isNaN(this.homeStats[i].value)) {
            if (isNaN(this.awayStats[i].value)) {
              this.homeStats[i].value = 0;
              this.awayStats[i].value = 0;
            } else {
              this.homeStats[i].value = 0;
            }
          } else if (isNaN(this.awayStats[i].value)) {
            this.awayStats[i].value = 0;
          }
          this.totalStats.push(
            this.homeStats[i].value + this.awayStats[i].value
          );
        }
        this.homeLineups = this.match.lineups[0];
        this.awayLineups = this.match.lineups[1];
        this.subsLength = this.homeLineups.substitutes.length;
        if (this.subsLength < this.awayLineups.substitutes.length) {
          this.subsLength = this.awayLineups.substitutes.length;
        }
        for (let i = 0; i < this.subsLength; i++) {
          let subNone = {
            player: {
              id: "-",
              name: "-",
              number: "-",
              pos: "-"
            }
          };
          if (this.homeLineups.substitutes[i] === undefined) {
            this.homeLineups.substitutes[i] = subNone;
          } else if (this.awayLineups.substitutes[i] === undefined) {
            this.awayLineups.substitutes[i] = subNone;
          }
        }
      });
  }
};
</script>
