<template>
  <div class="roster-results">
    <v-btn class="button" color="secondary" @click="handleClick">Pick Another Team</v-btn>
    <h5 class="text-md-h5 header">{{ team }} Roster</h5>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Position</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Home Town</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in roster" :key="player.id">
            <td>{{ player.jersey }}</td>
            <td>{{ player.first_name }} {{ player.last_name }} - {{ getYear(player.year) }}</td>
            <td>{{ player.position }}</td>
            <td>{{ getHeight(player.height) }}</td>
            <td>{{ player.weight }} lbs.</td>
            <td>{{ player.home_city }}, {{ player.home_state }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "RosterResults",
  data: () => ({
    roster: {}
  }),
  props: ["team", "handleSubmit"],
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const result = await fetch(
          `https://api.collegefootballdata.com/roster?team=${this.team}`
        );
        const data = await result.json();
        this.roster = data;
        console.log(this.roster);
      } catch (e) {
        console.log(e);
      }
    },
    handleClick() {
      this.$emit("handleSubmit", this.team);
    },
    getYear(year) {
      switch (year) {
        case 1:
          return "Fr.";
        case 2:
          return "So.";
        case 3:
          return "Jr.";
        case 4:
          return "Sr.";
        default:
          return "";
      }
    },
    getHeight(height) {
      const feet = height / 12
      const inches = height % 12
      return `${Math.floor(feet)}' ${inches}"`
    }
  }
};
</script>

<style scoped>
.roster-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
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
</style>