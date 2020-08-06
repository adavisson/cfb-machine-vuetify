<template>
  <div class="d-flex-md match-history">
    <h1 class="text-md-h1 header">Match History</h1>
    <MatchForm v-if="!submitted" :submitted=submitted :teams="teams" :firstTeam="firstTeam" :secondTeam="secondTeam" />
    <p v-else>Hey</p>
  </div>
</template>

<script>
import MatchForm from "../components/MatchForm"

export default {
  name: 'MatchHistory',
  components: {
    MatchForm,
  },
  data:() => ({
    teams: [],
    firstTeam: "",
    secondTeam: "",
    submitted: false
  }),
  beforeMount() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      this.teams = data;
    },
    handleSubmit(e) {
      e.preventDefault()
      console.log('hey')
      this.submitted = !this.submitted
    }
  }
}
</script>

<style scoped>
  .match-history {
    flex-direction: column;
  }
  .header {
    text-align: center;
    padding-bottom: 0.5em;
    padding-top: 0.2em;
  }
</style>