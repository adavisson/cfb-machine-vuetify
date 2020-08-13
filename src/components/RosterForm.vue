<template>
  <v-form @submit.prevent="submitForm" class="form" id="roster-form">
    <p v-if="error" class="error-message">Please fill out the required fields.</p>
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team"
      color="secondary"
      v-model="selectedTeam"
      :error="error ? true : false"
      dense
    ></v-select>
    <v-btn type="submit" color="secondary" form="roster-form">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "RosterForm",
  data: () => ({
    selectedTeam: "",
    error: false
  }),
  props: ["teams", "handleSubmit", "team"],
  beforeMount() {
    this.selectedTeam = this.team;
  },
  methods: {
    submitForm() {
      if ( this.selectedTeam != "" ){
        this.$emit("handleSubmit", this.selectedTeam);
      } else {
        this.error = true
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
