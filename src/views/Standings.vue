<template>
  <div>
    <h1 class="text-center">Standings</h1>
    <hr />
    <div class="row">
      <div class="table-responsive">
        <table class="table table-borderless table-hover align-middle">
          <thead class="table-dark text-center">
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th title="Played"><span class="border-bottom">P</span></th>
              <th title="Win"><span class="border-bottom">W</span></th>
              <th title="Draw"><span class="border-bottom">D</span></th>
              <th title="Lose"><span class="border-bottom">L</span></th>
              <th title="Goals For"><span class="border-bottom">GF</span></th>
              <th title="Goals Against">
                <span class="border-bottom">GA</span>
              </th>
              <th title="Goals Difference">
                <span class="border-bottom">GD</span>
              </th>
              <th>Pts</th>
              <th><i class="icofont-arrow-left"></i> Form</th>
            </tr>
          </thead>
          <tbody
            class="text-center"
            v-for="standing in standings"
            :key="standing.rank"
          >
            <tr>
              <td
                class="bg-dark text-light border-bottom border-primary"
                v-if="standing.rank === 4"
              >
                <strong>{{ standing.rank }}</strong>
              </td>
              <td
                class="bg-dark text-light border-bottom border-warning"
                v-else-if="standing.rank === 5"
              >
                <strong>{{ standing.rank }}</strong>
              </td>
              <td
                class="bg-dark text-light border-bottom border-danger"
                v-else-if="standing.rank === 17"
              >
                <strong>{{ standing.rank }}</strong>
              </td>
              <td class="bg-dark text-light" v-else>
                <strong>{{ standing.rank }}</strong>
              </td>
              <td>{{ standing.team.name }}</td>
              <td>{{ standing.all.played }}</td>
              <td>{{ standing.all.win }}</td>
              <td>{{ standing.all.draw }}</td>
              <td>{{ standing.all.lose }}</td>
              <td>{{ standing.all.goals.for }}</td>
              <td>{{ standing.all.goals.against }}</td>
              <td>{{ standing.goalsDiff }}</td>
              <td>
                <strong>{{ standing.points }}</strong>
              </td>
              <td>{{ standing.form }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { API_FOOTBALL, API_KEY, STANDINGS } from "@/assets/config.js";

export default {
  name: "Standings",
  data() {
    return {
      standings: []
    };
  },
  mounted() {
    axios.get(`${API_FOOTBALL}${STANDINGS}`, API_KEY).then(response => {
      const data = response.data.response[0].league.standings[0];
      this.standings = data;
    });
  }
};
</script>
