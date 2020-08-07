<template>
  <div class="d-flex-md roster">
    <h1 class="text-md-h1 header">Roster</h1>
    <RosterForm v-if="!submitted"/>
    <RosterResults v-else />
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
    submitted: false
  })
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