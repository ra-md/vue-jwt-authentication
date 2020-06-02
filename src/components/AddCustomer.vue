<template>
	<ModalInput ref="modalInput" @submit="addCustomer"/>
</template>

<script>
	import { FETCH_CUSTOMERS, ADD_CUSTOMER } from '@/store/actions.type';
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
				this.$store.dispatch(`customerModule/${ADD_CUSTOMER}`, customerData)
					.then(() => {
						this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
						this.$refs.modalInput.resetInput();
					});
			}
		}
	};
</script>
