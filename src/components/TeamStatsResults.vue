<template>
  <div>
    <h2>Team Statistics Results</h2>
    <v-btn @click="handleClick" color="secondary">Change Team/Year</v-btn>
    <p>{{ team }}</p>
    <p>{{ year }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamStatsResults",
  props: ["handleSubmit", "team", "year"],
  data: () => ({}),
  methods: {
    handleClick() {
      this.$emit("handleSubmit", this.team, this.year);
    }
  }
};
</script>

<style scoped>
</style>