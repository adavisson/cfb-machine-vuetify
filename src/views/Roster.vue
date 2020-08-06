<template>
  <div class="d-flex-md roster">
    <h1 class="text-md-h1 header">Roster</h1>
  </div>
</template>

<script>
export default {
  name: "Roster",
  data: () => ({})
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