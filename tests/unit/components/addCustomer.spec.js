import { mount } from '@vue/test-utils';
import AddCustomer from '@/components/AddCustomer';
import { ADD_CUSTOMER } from '@/store/actions.type';

describe('AddCustomer', () => {
	it('bisa dispatch kalau addCustomer() dipanggil', () => {
		const mockStore = { dispatch: jest.fn().mockResolvedValue() };

		const wrapper = mount(AddCustomer, {
			mocks: {
				$store: mockStore
			}
		});

		const customerData = {
			name: 'test',
			email: 'test@test.com',
			balance: 100
		}

		wrapper.vm.addCustomer(customerData);

		expect(mockStore.dispatch).toHaveBeenCalledWith(`customerModule/${ADD_CUSTOMER}`, customerData);
	});
});
