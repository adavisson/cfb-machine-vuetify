<template>
  <v-form class="form">
    <v-select
      :items="teams"
      label="Team 1"
      color="secondary"
      v-model="firstTeam"
      dense
    ></v-select>
    <v-select
      :items="teams"
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
    teams: ["Team1", "Team2", "Team3"],
    firstTeam: "",
    secondTeam: ""
  }),
}
</script>

<style scoped>
  .form {
    width: 60%;
    margin: auto;
  }
</style>