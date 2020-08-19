<template>
  <v-form @submit.prevent="submitForm" class="form" id="team-stats-form">
    <p v-if="teamError || yearError" class="error-message">
      Please fill out the required fields.
    </p>
    <v-select
      :items="teams"
      item-text="school"
      item-value="school"
      label="Team"
      color="secondary"
      v-model="selectedTeam"
      dense
      :error="teamError ? true : false"
    ></v-select>
    <v-select
      :items="years"
      item-text="text"
      item-value="value"
      label="Year"
      color="secondary"
      v-model="selectedYear"
      dense
      :error="yearError ? true : false"
    ></v-select>
    <v-btn type="submit" color="secondary" form="team-stats-form">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "TeamStatsForm",
  props: ["teams", "handleSubmit", "year", "team"],
  data: () => ({
    selectedTeam: "",
    years: [],
    selectedYear: 0,
    teamError: false,
    yearError: false
  }),
  beforeMount() {
    this.fillYears();
    this.selectedYear = this.year;
    this.selectedTeam = this.team;
  },
  methods: {
    fillYears() {
      let thisYear = new Date().getFullYear();
      while (thisYear >= 1900) {
        this.years.push({ text: thisYear, value: thisYear });
        thisYear--;
      }
    },
    submitForm() {
      if (this.selectedTeam != "" && this.selectedYear != "") {
        this.$emit("handleSubmit", this.selectedTeam, this.selectedYear);
      } else {
        if (this.selectedTeam === "") {
          this.teamError = true;
        }
        if (this.selectedYear === "") {
          this.yearError = true;
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
