import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

import modules from 'ibuild-portal-lte/src/state/modules';

export default new Vuex.Store({
  modules
});
 