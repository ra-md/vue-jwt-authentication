import { mount } from '@vue/test-utils';
import AddCustomer from '@/components/AddCustomer';

describe('AddCustomer', () => {
	it('dispatch sebuah actions kalau addCustomer() telah dipanggil', async () => {
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
		await wrapper.vm.$nextTick();

		expect(mockStore.dispatch).toHaveBeenCalledWith('customerModule/addCustomer', customerData);
	});
});
