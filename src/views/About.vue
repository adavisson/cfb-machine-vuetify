<template>
  <div class="d-flex-md about">
    <h1 class="text-md-h1 header">About</h1>
    <div class="content">
      <p>This page is pulling all data from <a href="https://api.collegefootballdata.com/">api.collegefootballdata.com/</a>.</p>
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

