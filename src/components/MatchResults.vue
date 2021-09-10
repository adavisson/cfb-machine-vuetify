<template>
  <div class="matchup-results">
    <v-btn class="button" color="secondary" @click="handleClick"
      >Pick Different Teams</v-btn
    >
    <h5 class="text-md-h5 header">
      Wins for {{ matchup.team1 }}: {{ matchup.team1Wins }}
    </h5>
    <h5 class="text-md-h5 header">
      Wins for {{ matchup.team2 }}: {{ matchup.team2Wins }}
    </h5>
    <h5 class="text-md-h5 header">Ties: {{ matchup.ties }}</h5>
    <div class="content">
      <v-card v-for="game in matchup.games" :key="game.season" class="card">
        <v-card-title class="headline">{{ game.season }}</v-card-title>
        <v-card-text>
          <p><strong>Winner</strong>: {{ game.winner }}</p>
          <p>
            <strong>Score</strong>: {{ game.awayTeam }} {{ game.awayScore }} -
            {{ game.homeScore }} {{ game.homeTeam }}
          </p>
          <p><strong>Venue</strong>: {{ game.venue ? game.venue : "N/A" }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchResults",
  data: () => ({
    matchup: {}
  }),
  props: ["handleSubmit", "firstTeam", "secondTeam"],
  beforeMount() {
    this.fetchData();
  },
  methods: {
    handleClick() {
      this.$emit("handleSubmit", this.firstTeam, this.secondTeam);
    },
    async fetchData() {
      try {
        const result = await fetch(
          `https://api.collegefootballdata.com/teams/matchup?team1=${this.firstTeam}&team2=${this.secondTeam}`,
          {
            headers: {
              Authorization: "Bearer " + process.env.VUE_APP_API_KEY
            }
          }
        );
        const data = await result.json();
        data.games.sort((a, b) => (a.season < b.season ? 1 : -1));
        this.matchup = data;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
.matchup-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.header {
  text-align: center;
  padding-bottom: 0.5em;
  padding-top: 0.2em;
}
.button {
  align-self: center;
  margin-bottom: 1em;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0.5em;
}
.card {
  margin: 0.5em;
}
</style>
