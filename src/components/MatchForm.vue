<template>
  <v-form class="form">
    <v-select
      :items="teams"
      item-text="school"
      item-value="id"
      label="Team 1"
      color="secondary"
      v-model="firstTeam"
      dense
    ></v-select>
    <v-select
      :items="teams"
      item-text="school"
      item-value="id"
      label="Team 2"
      color="secondary"
      v-model="secondTeam"
      dense
    ></v-select>
    <v-btn color="secondary">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "MatchForm",
  data: () => ({
    teams: [],
    firstTeam: "",
    secondTeam: ""
  }),
  beforeMount() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      this.teams = data;
    }
  }
}
</script>

<style scoped>
  .form {
    width: 60%;
    margin: auto;
  }
</style>