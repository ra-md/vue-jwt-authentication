<template>
	<tr>
		<td>{{ customerData.name }}</td>
		<td>{{ customerData.email }}</td>
		<td>{{ customerData.balance }}</td>
		<td v-if="isAuthenticated">
			<button id="btn-edit" @click="toggleModal" class="btn btn-action">Edit</button>
			<button id="btn-delete" @click="deleteCustomer" class="btn btn-action">Delete</button>
		</td>
		<ModalInput 
			ref="modalInput"
			@submit="updateCustomer" 
			:customerData="customerData"/>
	</tr>
</template>

<script>
	import { UPDATE_CUSTOMER, DELETE_CUSTOMER, FETCH_CUSTOMERS } from '@/store/actions.type';
	import { mapState } from 'vuex';
	import ModalInput from './ModalInput';

	export default {
		name: 'TableData',
		components: {
			ModalInput
		},
		props: {
			customerData: {
				required: true,
				type: Object
			}
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.authModule.isAuthenticated
			})
		},
		methods: {
			toggleModal() {
				this.$refs.modalInput.toggleModal();
			},
			updateCustomer(newCustomerData) {
				this.$store.dispatch(`customerModule/${UPDATE_CUSTOMER}`, { id: this.customerData._id, newCustomerData })
					.then(() => {
						this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
					});
			},
			deleteCustomer() {
				this.$store.dispatch(`customerModule/${DELETE_CUSTOMER}`, this.customerData._id)
					.then(() => {
						this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
					});
			}
		}
	};
</script>

<style>
	.btn-action {
		padding: .3em 1.5em;
		margin-left: 1em;
	}
</style>
