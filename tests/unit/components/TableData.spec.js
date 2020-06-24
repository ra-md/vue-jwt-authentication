import { mount } from '@vue/test-utils';
import TableData from '@/components/TableData';

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
});
