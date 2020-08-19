import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: []
  },
  mutations: {
    fetchTeams(state) {
      const fetchData = async () => {
        try {
          const result = await fetch(
            "https://api.collegefootballdata.com/teams/fbs"
          );
          const data = await result.json();
          state.teams = data;
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }
  },
  actions: {},
  modules: {}
});
