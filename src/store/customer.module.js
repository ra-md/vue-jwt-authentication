import { FETCH_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from './actions.type';
import { SET_CUSTOMERS, SET_ERROR } from './mutations.type';
import api from '@/api';

const state = {
	customers: [],
	errors: null
};

export const mutations = {
	[SET_CUSTOMERS](state, customers) {
		state.customers = customers;
	},
	[SET_ERROR](state, errorMessage) {
		state.errors = errorMessage;
	}
};

export const actions = {
	async [FETCH_CUSTOMERS]({ commit }) {
		try {
			const { data } = await api.getCustomers();
			commit(SET_CUSTOMERS, data);
		} catch (error) {
			commit(SET_ERROR, error);
		}
	},
	[ADD_CUSTOMER](context, data) {
		return api.addCustomer(data);
	},
	[UPDATE_CUSTOMER](context, data) {
		return api.updateCustomer(data.id, data.newCustomerData);
	},
	[DELETE_CUSTOMER](context, id) {
		return api.deleteCustomer(id);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
