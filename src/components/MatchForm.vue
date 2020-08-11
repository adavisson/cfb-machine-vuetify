<template>
  <v-form @submit.prevent="submitForm" class="form" id="match-history-form">
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team 1"
      color="secondary"
      v-model="teamOne"
      dense
    ></v-select>
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team 2"
      color="secondary"
      v-model="teamTwo"
      dense
    ></v-select>
    <v-btn type="submit" color="secondary" form="match-history-form"
      >Submit</v-btn
    >
  </v-form>
</template>

<script>
export default {
  name: "MatchForm",
  data: () => ({
    teamOne: "",
    teamTwo: ""
  }),
  props: ["teams", "handleSubmit", "firstTeam", "secondTeam"],
  beforeMount() {
    this.teamOne = this.firstTeam;
    this.teamTwo = this.secondTeam;
  },
  methods: {
    submitForm() {
      this.$emit("handleSubmit", this.teamOne, this.teamTwo);
    }
  }
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: auto;
}
</style>
