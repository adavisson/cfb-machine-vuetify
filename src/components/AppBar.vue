<template>
  <div id="navigation">
    <v-navigation-drawer
      v-model="drawer"
      overlay-opacity={true}
      app
    >
      <v-list color="primary" dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <br/>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark collapse-on-scroll elevation="5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CFB Machine</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="toggleTheme"><v-icon>{{buttonText}}</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", href: "/" },
      { title: "Match History", icon: "mdi-football-helmet", href: "/match-history" },
      { title: "Team Statistics", icon: "mdi-clipboard-text", href: "/team-stats"},
      { title: "About", icon: "mdi-information-outline", href: "/about" }
    ]
  }),
  computed: {
    buttonText() {
      return !this.$vuetify.theme.dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'
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