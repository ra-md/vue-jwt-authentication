import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

function wrapperFactory(isAuthenticated) {
	return mount(Header, {
		localVue,
		router,
		stubs: ['router-link'],
		mocks: {
			$store: {
				state: {
					authModule: isAuthenticated
				}
			}
		}
	});
};

describe('Header.vue', () => {
	it('bisa menampilkan "add new customer" button kalau user sudah login', () => {
		const wrapper = wrapperFactory({ isAuthenticated: true });

		expect(wrapper.find('#btn-add').exists()).toBe(true);
	});

	it('"add new customer" button tidak ada kalau user belum login', () => {
		const wrapper = wrapperFactory({ isAuthenticated: false });

		expect(wrapper.find('#btn-add').exists()).toBe(false);
	});

	it('bisa menampilkan modal AddCustomer kalau button add new customer diklik', async () => {
		const wrapper = wrapperFactory({ isAuthenticated: true });

		wrapper.find('#btn-add').trigger('click');
		await wrapper.vm.$nextTick();

		expect(wrapper.find('.modal').exists()).toBe(true);
	});

	it('modal AddCustomer tidak ada kalau #btn-add belum diklik', () => {
		const wrapper = wrapperFactory({ isAuthenticated: true });

		expect(wrapper.find('.modal').exists()).toBe(false)
	});
})
