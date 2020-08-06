<template>
  <div class="d-flex-md team-stats">
    <h1 class="text-md-h1 header">Team Statistics</h1>
  </div>
</template>

<script>
export default {
  name: 'TeamStats',
  data: () => ({}),
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