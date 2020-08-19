<template>
  <div class="d-flex-md home">
    <h1 class="text-md-h1 header">CFB Machine</h1>
    <div class="content">
      <p>
        Welcome to the CFB Machine. Explore this site to find historical college
        football stats.
      </p>
      <v-img
        class="pic"
        src="https://media.giphy.com/media/eKlzZj8vDZOxNNjbVr/giphy.gif"
        contain
        max-width="{200}"
        alt="clemson football player"
        lazy-src="../assets/cfb-trophy.jpg"
      ></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({})
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
  padding-bottom: 0.5em;
  padding-top: 0.2em;
}
.pic {
  border-radius: .75em;
}
.content {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
  text-align: center;
  align-items: center;
}
</style>
