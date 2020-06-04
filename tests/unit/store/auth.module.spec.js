import { mutations } from '@/store/auth.module';
import { SET_ERROR, SET_AUTH, PURGE_AUTH } from '@/store/mutations.type';

jest.mock('@/api');

describe('mutations', () => {
	it('bisa melakukan set error ke state', () => {
		const state = {
			errors: null
		};

		const errorMessage = 'ini error message';

		mutations[SET_ERROR](state, errorMessage);

		expect(state).toEqual({ errors: errorMessage });
	});

	it('bisa melakukan set auth ke state dan set token ke localStorege', () => {
		const mockLocalStorage = Storage.prototype.setItem = jest.fn();

		const state = {
			isAuthenticated: false
		};

		const fakeToken = 'Fake token';

		mutations[SET_AUTH](state, fakeToken);

		expect(state).toEqual({ isAuthenticated: true });
		expect(mockLocalStorage).toHaveBeenCalledWith('token', fakeToken);
	});

	it('bisa melakukan purge auth dan remove token pada localStorege', () => {
		const mockLocalStorage = Storage.prototype.removeItem = jest.fn();

		const state = {
			isAuthenticated: true
		};

		mutations[PURGE_AUTH](state)

		expect(state).toEqual({ isAuthenticated: false });
		expect(mockLocalStorage).toHaveBeenCalledWith('token');
	});
});

describe('actions', () => {
	
});
