import { FETCH_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from './actions.type';
import { SET_CUSTOMERS } from './mutations.type';
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from '@/api';

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
	},
	[ADD_CUSTOMER](context, data) {
		return addCustomer(data);
	},
	[UPDATE_CUSTOMER](context, data) {
		return updateCustomer(data.id, data.newCustomerData);
	},
	[DELETE_CUSTOMER](context, id) {
		return deleteCustomer(id);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
