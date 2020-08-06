<template>
  <v-form @submit.prevent="submitForm" class="form" id="match-history-form">
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
    <v-btn type="submit" color="secondary" form="match-history-form">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "MatchForm",
  data: () => ({
  }),
  props: ['teams', 'firstTeam', 'secondTeam', 'handleSubmit' ],
  methods: {
    submitForm() {
      this.$emit("handleSubmit")
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