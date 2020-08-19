<template>
  <div class="d-flex-md team-stats">
    <h1 class="text-md-h1 header">Team Statistics</h1>
    <TeamStatsForm
      v-if="!submitted"
      @handleSubmit="handleSubmit"
      :teams="teams"
      :team="team"
      :year="year"
    />
    <TeamStatsResults
      v-else
      @handleSubmit="handleSubmit"
      :team="team"
      :year="year"
    />
  </div>
</template>

<script>
import TeamStatsForm from "../components/TeamStatsForm";
import TeamStatsResults from "../components/TeamStatsResults";

export default {
  name: "TeamStats",
  components: {
    TeamStatsForm,
    TeamStatsResults
  },
  data: () => ({
    submitted: false,
    team: "",
    year: new Date().getFullYear()
  }),
  computed: {
    teams () {
      return this.$store.state.teams
    }
  },
  methods: {
    handleSubmit(selectedTeam, selectedYear) {
      this.team = selectedTeam;
      this.year = selectedYear;
      this.submitted = !this.submitted;
    }
  }
};
</script>

<style scoped>
.team-stats {
  flex-direction: column;
}
.header {
  text-align: center;
  padding-bottom: 0.5em;
  padding-top: 0.2em;
}
</style>
