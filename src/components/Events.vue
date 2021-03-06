<template>
  <div class="row align-items-center">
    <div class="col-5 text-end">
      <HomeEvent
        v-if="event.team.id === matchEvents.teams.home.id"
        :event="event"
      />
    </div>
    <div class="col-2 text-center">
      <span
        class="badge bg-success text-light"
        v-if="event.team.id === matchEvents.teams.home.id"
      >
        {{ event.time.elapsed }}'
      </span>
      <span class="badge bg-dark text-light" v-else>
        {{ event.time.elapsed }}'
      </span>
    </div>
    <div class="col-5">
      <AwayEvent
        v-if="event.team.id === matchEvents.teams.away.id"
        :event="event"
      />
    </div>
    <div class="col-12 my-1"></div>
  </div>
</template>

<script>
import HomeEvent from "./HomeEvent.vue";
import AwayEvent from "./AwayEvent.vue";

export default {
  name: "Events",
  components: {
    HomeEvent,
    AwayEvent
  },
  props: {
    event: Object,
    matchEvents: Object
  }
};
</script>
