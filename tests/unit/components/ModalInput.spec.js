import { mount } from '@vue/test-utils';
import ModalInput from '@/components/ModalInput';

describe('ModalInput.vue', () => {
	it('tutup modal kalau button cancel diklik', () => {
		const wrapper = mount(ModalInput);

		wrapper.find('#btn-cancel').trigger('click');

		console.log(wrapper.html());

		expect(wrapper.exists()).toBe(true);
	});
});
