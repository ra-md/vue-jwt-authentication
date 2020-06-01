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
	[ADD_CUSTOMER](context, customer) {
		return addCustomer(customer);
	},
	[UPDATE_CUSTOMER](context, { id, updCustomer }) {
		return updateCustomer(id, updCustomer);
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
