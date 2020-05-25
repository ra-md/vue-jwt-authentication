import { FETCH_CUSTOMERS } from './actions.type';
import { SET_CUSTOMERS } from './mutations.type';
import { getCustomers } from '@/api';

const state = {
	customers: []
};

const mutations = {
	[SET_CUSTOMERS](state, customers) {
		state.customers = customers;
	}
};

const actions = {
	async [FETCH_CUSTOMERS]({ commit }) {
		const { data } = await getCustomers();
		commit(SET_CUSTOMERS, data);
	} 
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
