<template>
  <div class="d-flex-md about">
    <h1 class="text-md-h1 header">About</h1>
    <div class="content">
      <p>
        This app allows you to look at historical college football matchups,
        current rosters, and seasonal stats for each team. All of the data is
        pulled from
        <a href="https://api.collegefootballdata.com"
          >https://api.collegefootballdata.com</a
        >. This app is built using Vue/Vuetify.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({})
};
</script>

<style scoped>
.about {
  flex-direction: column;
}
.header {
  text-align: center;
  padding-bottom: 0.5em;
  padding-top: 0.2em;
}
.content {
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>
