<template>
  <div class="row align-items-center">
    <div class="col-5">
      {{ season.teams.home.name }}
    </div>
    <div class="col-2" v-if="season.fixture.status.short === 'FT'">
      <strong>{{ season.goals.home }} - {{ season.goals.away }}</strong>
    </div>
    <div class="col-2" v-else>
      <span class="badge bg-dark">{{ season.league.round.slice(-2) }}</span>
    </div>
    <div class="col-5">
      {{ season.teams.away.name }}
    </div>
    <div class="col-12">
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Season",
  props: {
    season: Object
  }
};
</script>
