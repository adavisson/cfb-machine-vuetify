<template>
  <div class="d-flex-md match-history">
    <h1 class="text-md-h1 header">Match History</h1>
    <MatchForm
      v-if="!submitted"
      @handleSubmit="handleSubmit"
      :teams="teams"
      :firstTeam="firstTeam"
      :secondTeam="secondTeam"
    />
    <MatchResults
      v-else
      @handleSubmit="handleSubmit"
      :firstTeam="firstTeam"
      :secondTeam="secondTeam"
    />
  </div>
</template>

<script>
import MatchForm from "../components/MatchForm";
import MatchResults from "../components/MatchResults";

export default {
  name: "MatchHistory",
  components: {
    MatchForm,
    MatchResults
  },
  data: () => ({
    firstTeam: "",
    secondTeam: "",
    submitted: false
  }),
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  },
  methods: {
    handleSubmit(teamOne, teamTwo) {
      this.firstTeam = teamOne;
      this.secondTeam = teamTwo;
      this.submitted = !this.submitted;
    }
  }
};
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
