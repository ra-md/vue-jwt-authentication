<template>
	<tr class="table__row">
		<td class="table__data">{{ customerData.name }}</td>
		<td class="table__data">{{ customerData.email }}</td>
		<td class="table__data">{{ customerData.balance }}</td>
		<td v-if="isAuthenticated" class="table__data">
			<button
				id="btn-edit"
				@click="toggleModal"
				:disabled="loadingEdit"
				class="btn btn--primary"
			>
				{{ loadingEdit ? 'Loading...' : 'Edit' }}
			</button>
			<button
				id="btn-delete"
				@click="deleteCustomer"
				:disabled="loadingDelete"
				class="btn btn--primary"
			>
				{{ loadingDelete ? 'Loading...' : 'Delete'}}
			</button>
		</td>
		<ModalInput 
			ref="modalInput"
			@submit="updateCustomer" 
			:customerData="customerData"/>
	</tr>
</template>

<script>
	import api from '@/api';
	import { FETCH_CUSTOMERS } from '@/store/actions.type';
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
		data() {
			return {
				loadingEdit: false,
				loadingDelete: false
			};
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
				this.loadingEdit = true;

				api.updateCustomer(this.customerData._id, newCustomerData)
					.then(() => {
						this.fetchCustomers();
					});
			},
			deleteCustomer() {
				this.loadingDelete = true;

				api.deleteCustomer(this.customerData._id)
					.then(() => {
						this.fetchCustomers();
					});
			},
			fetchCustomers() {
				this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`)
					.then(() => {
						this.loadingEdit = false;
						this.loadingDelete = false;
					});	
			}
		}
	};
</script>

<style scoped>
	.table__data {
		border-bottom: thin solid black;
		padding: 1em 0;
	}

	.btn {
		padding: .3em 1.5em;
		margin-left: 1em;
	}
</style>
