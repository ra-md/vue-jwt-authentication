import Vue from 'vue';
import Vuex from 'vuex';

import authModule from './auth.module';
import customerModule from './customer.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  	authModule,
  	customerModule
  }
});
