import { REGISTER, LOGIN, LOGOUT } from './actions.type';
import { SET_ERROR, SET_AUTH, PURGE_AUTH } from './mutations.type';
import { registerService, loginService } from '@/api';
import jwtService from '@/util/jwtService';

const state = {
	isAuthenticated: !!jwtService.getToken(),
	errors: null
};

const mutations = {
	[SET_ERROR](state, error) {
		state.errors = error;
	},
	[SET_AUTH](state, token) {
		state.isAuthenticated = true;
		jwtService.saveToken(token);
	},
	[PURGE_AUTH](state) {
		state.isAuthenticated = false;
		jwtService.deleteToken();
	}
};

const actions = {
	[REGISTER]({ commit }, credentials) {
		return new Promise(resolve => {
			commit(SET_ERROR, null);
			registerService(credentials)
				.then(() => {
					resolve();
				})
				.catch(error => {
					commit(SET_ERROR, error.response.data.message);
				});
		});
	},
	[LOGIN]({ commit }, credentials) {
		return new Promise(resolve => {
			commit(SET_ERROR, null);
			loginService(credentials)
				.then(response => {
					 commit(SET_AUTH, response.data.token);
					 resolve();
				})
				.catch(error => {
					if (error.response) {
						commit(SET_ERROR, error.response.data.message);
					} else {
						commit(SET_ERROR, error);
					}
				});
		});
	},
	[LOGOUT]({ commit }) {
		commit(PURGE_AUTH);
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations
};
