<template>
  <div v-if="event.type === 'Goal'">
    <div v-if="event.detail === 'Normal Goal'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        Goal <i class="icofont-football text-dark"></i>
      </span>
    </div>
    <div v-else-if="event.detail === 'Own Goal'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        Own Goal <i class="icofont-football text-danger"></i>
      </span>
    </div>
    <div v-else-if="event.detail === 'Penalty'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        Penalty <i class="icofont-football text-dark"></i>
      </span>
    </div>
    <div v-else-if="event.detail === 'Missed Penalty'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        Penalty Missed <i class="icofont-close text-danger"></i>
      </span>
    </div>
  </div>
  <div v-else-if="event.type === 'Card'">
    <div v-if="event.detail === 'Yellow Card'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        Yellow <i class="icofont-penalty-card text-warning"></i>
      </span>
    </div>
    <div v-else-if="event.detail === 'Red Card'">
      {{ event.player.name }} <br />
      <span class="text-secondary">
        Red <i class="icofont-penalty-card text-danger"></i>
      </span>
    </div>
  </div>
  <div v-else-if="event.type === 'subst'">
    {{ event.player.name }} <i class="icofont-arrow-up text-success"></i>
    <br />
    <span class="text-secondary">
      {{ event.assist.name }} <i class="icofont-arrow-down text-danger"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "HomeEvent",
  props: {
    event: Object
  }
};
</script>
