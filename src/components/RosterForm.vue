<template>
  <v-form @submit.prevent="submitForm" class="form" id="roster-form">
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team"
      color="secondary"
      v-model="selectedTeam"
      dense
    ></v-select>
    <v-btn type="submit" color="secondary" form="roster-form">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "RosterForm",
  data: () => ({
    selectedTeam: ""
  }),
  props: ["teams", "handleSubmit", "team"],
  beforeMount() {
    this.selectedTeam = this.team
  },
  methods: {
    submitForm() {
      this.$emit("handleSubmit", this.selectedTeam)
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