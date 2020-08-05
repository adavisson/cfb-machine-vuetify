<template>
  <div id="navigation">
    <v-navigation-drawer
      v-model="drawer"
      overlay-opacity="true"
      app
    >
      <v-list color="primary" dense>
        <v-list-item :key="home" link :to="{path: '/'}" >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :key="about" link :to="{path: '/about'}">
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn @click="toggleTheme">{{ buttonnText }}</v-btn>
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
  computed: {
    buttonnText() {
      return !this.$vuetify.theme.dark ? 'Use Dark Theme' : 'Use Light Theme'
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>

</style>