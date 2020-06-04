import { mount } from '@vue/test-utils';
import TableData from '@/components/TableData';
import { UPDATE_CUSTOMER, DELETE_CUSTOMER } from '@/store/actions.type';

function wrapperFactory(isAuthenticated, dispatch = null, customerId = null) {
	return mount(TableData, {
		propsData: {
			customerData: {
				_id: customerId
			}
		},
		mocks: {
			$store: {
				state: {
					authModule: {
						isAuthenticated
					}
				},
				dispatch: dispatch
			}
		}
	})
};

describe('Table.vue', () => {
	const mockDispatch = jest.fn().mockResolvedValue();
	const customerId = 'Fake id';

	it('tampilkan modal kalau button edit diklik', async () => {
		const wrapper = wrapperFactory(true);

		wrapper.find('#btn-edit').trigger('click');
		await wrapper.vm.$nextTick();

		expect(wrapper.find('.modal').exists()).toBe(true);
	});

	it('bisa dispatch kalau updateCustomer() dipanggil', () => {
		const newCustomerData = {
			name: 'test',
			email: 'test@test.com',
			balance: 100
		};

		const wrapper = wrapperFactory(true, mockDispatch, customerId);

		wrapper.vm.updateCustomer(newCustomerData);

		expect(mockDispatch).toHaveBeenCalledWith(`customerModule/${UPDATE_CUSTOMER}`, { id: customerId, newCustomerData });
	});

	it('bisa dispatch kalau deleteCustomer() dipanggil', () => {
		const wrapper = wrapperFactory(true, mockDispatch, customerId);

		wrapper.vm.deleteCustomer();

		expect(mockDispatch).toHaveBeenCalledWith(`customerModule/${DELETE_CUSTOMER}`, customerId);
	});
});
