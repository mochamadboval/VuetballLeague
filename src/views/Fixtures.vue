<template>
  <div>
    <h1 class="text-center">Fixtures</h1>
    <hr />
    <div class="row flex-wrap">
      <MatchSummary
        v-for="fixture in data"
        :key="fixture.fixture.id"
        :matchSummary="fixture"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, FIXTURES } from "@/assets/config.js";
import MatchSummary from "@/components/MatchSummary.vue";

export default {
  name: "Fixtures",
  components: {
    MatchSummary
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    axios.get(`${API_FOOTBALL}${FIXTURES}`, API_KEY).then(response => {
      const data = response.data.response;
      this.data = data;
    });
  }
};
</script>
