<template>
  <v-form @submit.prevent="submitForm" class="form" id="match-history-form">
    <p v-if="error1 || error2" class="error-message">
      Please fill out the required fields.
    </p>
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team 1"
      color="secondary"
      v-model="teamOne"
      dense
      :error="error1 ? true : false"
    ></v-select>
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team 2"
      color="secondary"
      v-model="teamTwo"
      dense
      :error="error2 ? true : false"
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
    teamTwo: "",
    error1: false,
    error2: false
  }),
  props: ["teams", "handleSubmit", "firstTeam", "secondTeam"],
  beforeMount() {
    this.teamOne = this.firstTeam;
    this.teamTwo = this.secondTeam;
  },
  methods: {
    submitForm() {
      if (this.teamOne != "" && this.teamTwo != "") {
        this.$emit("handleSubmit", this.teamOne, this.teamTwo);
      } else {
        if (this.teamOne === "") {
          this.error1 = true;
        }
        if (this.teamTwo === "") {
          this.error2 = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: auto;
}
.error-message {
  color: red;
}
</style>
