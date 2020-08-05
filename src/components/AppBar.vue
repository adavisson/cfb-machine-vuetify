<template>
  <div id="navigation">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark collapse-on-scroll="true">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CFB Machine</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: false,
  }),
}
</script>

<style scoped>

</style>