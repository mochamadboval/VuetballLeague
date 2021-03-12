<template>
  <div v-if="event.type === 'Goal'">
    <div v-if="event.detail === 'Normal Goal'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        <i class="icofont-football text-dark"></i> Goal
      </span>
    </div>
    <div v-else-if="event.detail === 'Own Goal'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        <i class="icofont-football text-danger"></i> Own Goal
      </span>
    </div>
    <div v-else-if="event.detail === 'Penalty'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        <i class="icofont-football text-dark"></i> Penalty
      </span>
    </div>
    <div v-else-if="event.detail === 'Missed Penalty'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        <i class="icofont-close text-danger"></i> Penalty Missed
      </span>
    </div>
  </div>
  <div v-else-if="event.type === 'Card'">
    <div v-if="event.detail === 'Yellow Card'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        <i class="icofont-penalty-card text-warning"></i> Yellow
      </span>
    </div>
    <div v-else-if="event.detail === 'Red Card'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        <i class="icofont-penalty-card text-danger"></i> Red
      </span>
    </div>
  </div>
  <div v-else-if="event.type === 'subst'">
    <i class="icofont-arrow-up text-success"></i> {{ event.player.name }}
    <br />
    <span class="text-secondary">
      <i class="icofont-arrow-down text-danger"></i> {{ event.assist.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "AwayEvent",
  props: {
    event: Object
  }
};
</script>
