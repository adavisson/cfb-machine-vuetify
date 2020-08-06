<template>
  <div class="d-flex-md match-history">
    <h1 class="text-md-h1 header">Match History</h1>
  </div>
</template>

<script>
export default {
  name: 'MatchHistory',
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