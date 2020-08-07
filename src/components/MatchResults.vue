<template>
  <div>
    <p>Results</p>
    <p>{{ firstTeam }}</p>
    <p>{{ secondTeam }}</p>
    <v-btn color="secondary" @click="handleClick">Pick Different Teams</v-btn>
  </div>
</template>

<script>
export default {
  name: "MatchResults",
  data: () => ({}),
  props: ["handleSubmit", "firstTeam", "secondTeam"],
  beforeMount() {
    this.fetchData()
  },
  methods: {
    handleClick() {
      this.$emit("handleSubmit");
    },
    async fetchData() {
      
    }
  }
};
</script>

<style scoped>
</style>