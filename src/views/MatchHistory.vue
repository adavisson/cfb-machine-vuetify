<template>
  <div class="d-flex-md match-history">
    <h1 class="text-md-h1 header">Match History</h1>
    <MatchForm />
  </div>
</template>

<script>
import MatchForm from "../components/MatchForm"

export default {
  name: 'MatchHistory',
  components: {
    MatchForm,
  },
  data:() => ({}),
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