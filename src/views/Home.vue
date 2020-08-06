<template>
  <div class="d-flex-md home">
    <h1 class="text-md-h1 header">CFB Machine</h1>
    <div class="content">
      <p>Welcome to the CFB Machine. Explore this site to find historical college football stats.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data:() => ({})
};
</script>

<style scoped>
  .home {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  .header {
    text-align: center;
    padding-bottom: .5em;
    padding-top: .2em;
  }
  .content {
    width: 80%;
    margin: auto;
    text-align: center;
  }
</style>
