<template>
  <div>
    <h1 class="text-center">Results</h1>
    <hr />
    <div class="row flex-wrap">
      <MatchSummary
        v-for="result in data"
        :key="result.fixture.id"
        :matchSummary="result"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, RESULTS } from "@/assets/config.js";
import MatchSummary from "@/components/MatchSummary.vue";

export default {
  name: "Results",
  components: {
    MatchSummary
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    axios.get(`${API_FOOTBALL}${RESULTS}`, API_KEY).then(response => {
      const data = response.data.response;
      this.data = data;
    });
  }
};
</script>
