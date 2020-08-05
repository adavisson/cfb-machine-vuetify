import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightGreen.base,
        secondary: colors.orange.base,
      },
      dark: {
        primary: colors.lightGreen.base,
        secondary: colors.orange.base,
      }
    },
    dark: true,
  },
});
