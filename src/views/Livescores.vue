<template>
  <div>
    <h1 class="text-center">Live Scores</h1>
    <hr />
    <p class="text-center" v-if="livescores.length === 0">
      No matches are being played.
    </p>
    <div class="row flex-wrap" v-else>
      <MatchSummary
        v-for="livescore in livescores"
        :key="livescore.fixture.id"
        :matchSummary="livescore"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, LIVESCORES } from "@/assets/config.js";
import MatchSummary from "@/components/MatchSummary.vue";

export default {
  name: "Livescores",
  components: {
    MatchSummary
  },
  data() {
    return {
      livescores: []
    };
  },
  mounted() {
    axios.get(`${API_FOOTBALL}${LIVESCORES}`, API_KEY).then(response => {
      const data = response.data.response;
      this.livescores = data;
    });
  }
};
</script>
