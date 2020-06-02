import { mount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

function wrapperFactory(props, errorMessage = "") {
	return mount(Form, {
		...props,
		mocks: {
			$store: {
				state: {
					authModule: {
						errors: errorMessage
					}
				}
			}
		}
	});
}

describe('Form.vue', () => {
	it('harus bisa menampilkan error yang diberikan dari vuex', () => {
		const errorMessage = 'ini error message';

		const wrapper = wrapperFactory({}, errorMessage);

		expect(wrapper.findAll('.error-message').at(2).text()).toBe(errorMessage);
	});

	it('harus bisa emit', () => {
		const emailAndPassword = {
			email: 'test@test.com',
			password: 'test'
		}

		const wrapper = wrapperFactory({
			data: () => {
				return emailAndPassword;
			}
		});

		wrapper.vm.submit();

		expect(wrapper.emitted().submit[0]).toEqual([emailAndPassword]);
	});
});
