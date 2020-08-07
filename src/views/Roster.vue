<template>
  <div class="d-flex-md roster">
    <h1 class="text-md-h1 header">Rosters</h1>
    <RosterForm v-if="!submitted" :teams="teams" @handleSubmit="handleSubmit" :team="team"/>
    <RosterResults v-else @handleSubmit="handleSubmit" :team="team" />
  </div>
</template>

<script>
import RosterForm from "../components/RosterForm"
import RosterResults from "../components/RosterResults"

export default {
  name: "Roster",
  components: {
    RosterForm,
    RosterResults
  },
  data: () => ({
    submitted: false,
    teams: [],
    team: ""
  }),
  beforeMount() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
        const data = await result.json();
        this.teams = data;
      } catch (e) {
        console.log(e)
      }
    },
    handleSubmit(selectedTeam) {
      this.team = selectedTeam
      this.submitted = !this.submitted
    }
  }
};
</script>

<style scoped>
  .roster {
    flex-direction: column;
  }
  .header {
    text-align: center;
    padding-bottom: 0.5em;
    padding-top: 0.2em;
  }
</style>