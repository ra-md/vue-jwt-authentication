import { REGISTER } from './actions.type';
import { SET_ERROR } from './mutations.type';
import { userSignup } from '@/api';
import jwtService from '@/util/jwtService';

const state = {
	isAuthenticated: !!jwtService.getToken(),
	user: {},
	errors: null
};

const mutations = {
	[SET_ERROR](state, error) {
		state.errors = error;
	}
};

const actions = {
	[REGISTER]({ commit }, credentials) {
		return new Promise((resolve, reject) => {
			commit(SET_ERROR, null);
			userSignup(credentials)
			.then(() => {
				resolve();
			})
			.catch(error => {
				commit(SET_ERROR, error.response.data.message);
			});
		});
	}
};

export default {
	state,
	actions,
	mutations
};
