<template>
  <div class="d-flex-md about">
    <h1 class="text-h1 title">About</h1>
    <div class="content">
      <p>This is an about page</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {},
}
</script>

<style scoped>
  .about {
    flex-direction: column;
  }
  .title {
    text-align: center;
  }
  .content {
    width: 80%;
    margin: auto;
    text-align: center;
  }
</style>

