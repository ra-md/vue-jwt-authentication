<template>
	<ModalInput ref="modalInput" @submit="addCustomer"/>
</template>

<script>
	import api from '@/api';
	import { FETCH_CUSTOMERS } from '@/store/actions.type';
	import ModalInput from './ModalInput';

	export default {
		name: 'AddCustomer',
		components: {
			ModalInput
		},
		methods: {
			toggleModal() {
				this.$refs.modalInput.toggleModal();
			},
			addCustomer(customerData) {
				this.$emit('set-loading', true);

				api.addCustomer(customerData)
					.then(() => {
						this.fetchCustomers();
						this.$refs.modalInput.resetInput();
					});
			},
			fetchCustomers() {
				this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`)
					.then(() => {
						this.$emit('set-loading', false);
					});
			}
		}
	};
</script>
