<template>
  <div
    class="accordion col-md-6 mb-3"
    :id="`Accordion${matchSummary.fixture.id}`"
  >
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed text-center"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#Collapse${matchSummary.fixture.id}`"
        >
          <span class="badge bg-dark me-2" v-if="status">
            GW {{ matchSummary.league.round.slice(-2) }}
          </span>
          <span class="badge bg-dark me-2" v-else>
            {{ matchSummary.fixture.status.short }}
            {{ matchSummary.fixture.status.elapsed }}'
          </span>
          <span class="ms-3">
            <strong>
              {{ matchSummary.goals.home }} <br />
              {{ matchSummary.goals.away }}
            </strong>
          </span>
          <span class="ms-auto">
            {{ matchSummary.teams.home.name }} <br />
            {{ matchSummary.teams.away.name }}
          </span>
        </button>
      </h2>
      <div
        :id="`Collapse${matchSummary.fixture.id}`"
        class="accordion-collapse collapse"
        :data-bs-parent="`#Accordion${matchSummary.fixture.id}`"
      >
        <div class="accordion-body">
          <div class="row" v-if="matchSummary.fixture.status.short !== 'NS'">
            <div class="col-2 text-center">
              <strong>HT</strong>
            </div>
            <div class="col">
              {{ matchSummary.score.halftime.home }} -
              {{ matchSummary.score.halftime.away }}
            </div>
          </div>
          <div class="row">
            <div class="col-2 text-center">
              <i class="icofont-refree-jersey"></i>
            </div>
            <div class="col" v-if="matchSummary.fixture.referee === null">
              -
            </div>
            <div class="col" v-else>
              {{ matchSummary.fixture.referee }}
            </div>
          </div>
          <div class="row">
            <div class="col-2 text-center">
              <i class="icofont-whistle-alt"></i>
            </div>
            <div class="col">
              {{
                new Date(matchSummary.fixture.date)
                  .toLocaleString("en-GB")
                  .slice(0, -3)
              }}
            </div>
          </div>
          <div class="row">
            <div class="col-2 text-center">
              <i class="icofont-location-pin"></i>
            </div>
            <div class="col">
              {{ matchSummary.fixture.venue.name }},
              {{ matchSummary.fixture.venue.city }}
            </div>
          </div>
          <div class="row mt-3 mb-2" v-show="matchSummary.events !== undefined">
            <div class="col-12 text-center">
              <strong>Events</strong>
            </div>
          </div>
          <Events
            v-for="(event, index) in matchSummary.events"
            :key="index"
            :event="event"
            :matchEvents="matchSummary"
          />
          <div
            class="row mt-3"
            v-if="matchSummary.fixture.status.short !== 'NS'"
          >
            <div class="col-12">
              <router-link
                class="d-block btn btn-dark"
                :to="`/match/${matchSummary.fixture.id}`"
              >
                More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Events from "./Events.vue";

export default {
  name: "MatchSummary",
  components: {
    Events
  },
  props: {
    matchSummary: Object
  },
  computed: {
    status() {
      return (
        this.matchSummary.fixture.status.short === "NS" ||
        this.matchSummary.fixture.status.short === "FT"
      );
    }
  }
};
</script>
