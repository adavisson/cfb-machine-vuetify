<template>
  <v-form @submit.prevent="submitForm" class="form" id="match-history-form">
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team 1"
      color="secondary"
      v-model="firstTeam"
      dense
    ></v-select>
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team 2"
      color="secondary"
      v-model="secondTeam"
      dense
    ></v-select>
    <v-btn type="submit" color="secondary" form="match-history-form">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "MatchForm",
  data: () => ({
    firstTeam: "",
    secondTeam: ""
  }),
  props: ['teams', 'handleSubmit' ],
  methods: {
    submitForm() {
      this.$emit("handleSubmit", this.firstTeam, this.secondTeam)
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