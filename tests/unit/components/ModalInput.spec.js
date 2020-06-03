import { mount } from '@vue/test-utils';
import ModalInput from '@/components/ModalInput';

describe('ModalInput.vue', () => {
	it('bisa emit dengan benar', () => {
		const customer = {
			name: 'test',
			email: 'test@test.com',
			balance: 100
		};

		const wrapper = mount(ModalInput, {
			data() {
				return {
					...customer
				};
			}
		});

		wrapper.vm.submit();

		expect(wrapper.emitted().submit[0][0]).toEqual(customer);
	});
});
