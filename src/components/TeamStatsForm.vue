<template>
  <v-form @submit.prevent="submitForm" class="form" id="team-stats-form">
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team"
      color="secondary"
      v-model="selectedTeam"
      dense
    ></v-select>
    <v-select
      :items="years"
      item-text="text"
      item-value="value"
      label="Year"
      color="secondary"
      v-model="year"
      dense
    ></v-select>
    <v-btn type="submit" color="secondary" form="team-stats-form">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "TeamStatsForm",
  props: ['teams', 'handleSubmit'],
  data: () => ({
    selectedTeam: "",
    years: [],
    year: ""
  }),
  beforeMount() {
    this.fillYears()
  },
  methods: {
    fillYears() {
      let thisYear = new Date().getFullYear() 
      while (thisYear >=  1900) {
        this.years.push({ text: thisYear, value: thisYear })
        thisYear--
      }
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