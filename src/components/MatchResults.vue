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
  data: () => ({
    games: {}
  }),
  props: ["handleSubmit", "firstTeam", "secondTeam"],
  beforeMount() {
    this.fetchData()
  },
  methods: {
    handleClick() {
      this.$emit("handleSubmit", this.firstTeam, this.secondTeam);
    },
    async fetchData() {
      try {
        const result = await fetch(`https://api.collegefootballdata.com/teams/matchup?team1=${this.firstTeam}&team2=${this.secondTeam}`)
        const data = await result.json()
        data.games.sort((a, b) => (a.season < b.season ? 1 : -1))
        this.games = data
      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>

<style scoped>
</style>