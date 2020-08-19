<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  },
  beforeMount() {
    this.$store.commit('fetchTeams')
    console.log(this.$store.state.teams)
  },
  data: () => ({})
};
</script>

<style scoped></style>
