<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <i class="icofont-football-alt"></i> Vuetball League
        </router-link>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#Menu"
        >
          <i class="icofont-navigation-menu"></i>
        </button>
        <div class="navbar-collapse collapse justify-content-end" id="Menu">
          <div class="navbar-nav align-items-center">
            <router-link class="nav-link" to="/fixtures">
              <i class="icofont-calendar"></i> Fixtures
            </router-link>
            <router-link class="nav-link" to="/livescores">
              <i class="icofont-stopwatch"></i> Live Scores
            </router-link>
            <router-link class="nav-link" to="/">
              <i class="icofont-score-board"></i> Results
            </router-link>
            <router-link class="nav-link" to="/standings">
              <i class="icofont-listing-number"></i> Standings
            </router-link>
            <router-link class="nav-link" to="/teams">
              <i class="icofont-shield-alt"></i> Teams
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mt-5 py-5">
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-light text-center py-2">
      <small>
        <router-link class="text-light text-decoration-none" to="/">
          Vuetball League
        </router-link>
        &copy; 2021 <br />
        <span class="text-secondary">
          Based on
          <a
            class="text-secondary text-decoration-none"
            href="https://github.com/mochamadboval/FootballLeague"
            target="_blank"
            rel="noopener"
          >
            Football League
          </a>
          source code.
        </span>
      </small>
    </footer>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: (to, _from) => {
        document.title = to.meta.title || "Vuetball League";
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
@import url("./assets/icofont.min.css");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");

body {
  font-family: "Lexend Deca", sans-serif !important;
}
</style>
