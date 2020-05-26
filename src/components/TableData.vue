<template>
	<tr>
		<td v-if="showEditInput"><input v-model="name" type="text" name=""></td>
		<td v-else>{{ customerData.name }}</td>

		<td v-if="showEditInput"><input v-model="email" type="text" name=""></td>
		<td v-else>{{ customerData.email }}</td>
		
		<td v-if="showEditInput"><input v-model="balance" type="number" name=""></td>
		<td v-else>{{ customerData.balance }}</td>

		<!-- <TableForm/> -->

		<td v-if="isAuthenticated">
			<button @click="showEditInput = !showEditInput" class="btn btn-action">
				{{ showEditInput ? 'Cancel' : 'Edit'}}
			</button>
			<button @click="showEditInput ? submitCustomer() : deleteCustomer()" class="btn btn-action">
				{{ showEditInput ? 'Submit' : 'Delete' }}
			</button>
		</td>
	</tr>
</template>

<script>
	import { UPDATE_CUSTOMER, DELETE_CUSTOMER, FETCH_CUSTOMERS } from '@/store/actions.type';
	import { mapState } from 'vuex';
	// import TableForm from './TableForm';

	export default {
		name: 'TableData',
		components: {
			// TableForm
		},
		data() {
			return {
				showEditInput: false,
				name: this.customerData.name,
				email: this.customerData.email,
				balance: this.customerData.balance
			};
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
			submitCustomer() {
				const customerUpdated = {
					name: this.name,
					email: this.email,
					balance: this.balance
				};

				if (this.name.length !== 0 && this.email.length !== 0) {
					this.$store.dispatch(`customerModule/${UPDATE_CUSTOMER}`, { id: this.customerData._id, customerUpdated })
						.then(() => {
							this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
							this.showEditInput = !this.showEditInput;
						});
				};
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
