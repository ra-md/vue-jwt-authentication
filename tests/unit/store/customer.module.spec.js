import { mutations, actions } from '@/store/customer.module';
import { SET_CUSTOMERS, SET_ERROR } from '@/store/mutations.type';

jest.mock('@/api');

describe('customer.module', () => {
	it('bisa set customer ke state', () => {

		const customers = [{
			name: 'test',
			email: 'test@test.com',
			balance: 100
		}];

		const state = {
			customers: []
		};

		mutations[SET_CUSTOMERS](state, customers);

		expect(state).toEqual({ customers });
	});

	it('bisa melakukan set error ke state', () => {
		const state = {
			errors: null
		};

		const errorMessage = 'ini error message';

		mutations[SET_ERROR](state, errorMessage);

		expect(state).toEqual({ errors: errorMessage });
	});
});
