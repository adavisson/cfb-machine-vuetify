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
    teams: [],
    team: "",
    year: new Date().getFullYear()
  }),
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const result = await fetch(
          "https://api.collegefootballdata.com/teams/fbs"
        );
        const data = await result.json();
        this.teams = data;
      } catch (e) {
        console.log(e);
      }
    },
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
