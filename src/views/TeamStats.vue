<template>
  <div class="d-flex-md team-stats">
    <h1 class="text-md-h1 header">Team Statistics</h1>
    <TeamStatsForm v-if="!submitted" />
    <TeamStatsResults v-else />
  </div>
</template>

<script>
import TeamStatsForm from "../components/TeamStatsForm"
import TeamStatsResults from "../components/TeamStatsResults"

export default {
  name: 'TeamStats',
  components: {
    TeamStatsForm,
    TeamStatsResults
  },
  data: () => ({
    submitted: false
  }),
}
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