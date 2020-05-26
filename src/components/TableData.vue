<template>
	<tr>
		<td>{{ customerData.name }}</td>
		<td>{{ customerData.email }}</td>
		<td>{{ customerData.balance }}</td>
		<td v-if="isAuthenticated">
			<button @click="showForm" class="btn btn-action">Edit</button>
			<button @click="deleteCustomer" class="btn btn-action">Delete</button>
		</td>
		<TableForm ref="tableFormRef" @submit="submitCustomer" :customerData="customerData"/>
	</tr>
</template>

<script>
	import { UPDATE_CUSTOMER, DELETE_CUSTOMER, FETCH_CUSTOMERS } from '@/store/actions.type';
	import { mapState } from 'vuex';
	import TableForm from './TableForm';

	export default {
		name: 'TableData',
		components: {
			TableForm
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
			showForm() {
				this.$refs.tableFormRef.showForm();
			},
			submitCustomer(newCustomerData) {
				this.$store.dispatch(`customerModule/${UPDATE_CUSTOMER}`, { id: this.customerData._id, newCustomerData })
					.then(() => {
						this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
						this.$refs.tableFormRef.resetInput();
						this.showForm();
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
