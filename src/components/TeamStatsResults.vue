<template>
  <div class="team-stats-results">
    <v-btn class="button" @click="handleClick" color="secondary"
      >Change Team/Year</v-btn
    >
    <h5 class="text-md-h5 header">{{ team }} Statistics for {{ year }}</h5>
    <v-simple-table class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stat in stats" :key="stat.statName">
            <td>{{ convertCase(stat.statName) }}</td>
            <td>{{ stat.statValue }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "TeamStatsResults",
  props: ["handleSubmit", "team", "year"],
  data: () => ({
    stats: []
  }),
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const result = await fetch(
          `https://api.collegefootballdata.com/stats/season?year=${this.year}&team=${this.team}`
        );
        const data = await result.json();
        this.stats = data;
      } catch (e) {
        console.log(e);
      }
    },
    handleClick() {
      this.$emit("handleSubmit", this.team, this.year);
    },
    convertCase(string) {
      const result = string.replace(/([A-Z])/g, " $1");
      return result.charAt(0).toUpperCase() + result.slice(1);
    }
  }
};
</script>

<style scoped>
.team-stats-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
}
.button {
  align-self: center;
  margin-bottom: 1em;
}
.header {
  text-align: center;
  padding-bottom: 0.5em;
  padding-top: 0.2em;
}
.table {
  max-width: 500px;
  align-self: center;
}
</style>
