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
				api.addCustomer(customerData)
					.then(() => {
						this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
						this.$refs.modalInput.resetInput();
					});
			}
		}
	};
</script>
