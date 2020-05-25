<template>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Balance</th>
				<th v-if="isAuthenticated">Actions</th>
			</tr>
		</thead>
		<tbody v-for="(customer, index) in customers" :key="index">
			<TableData :customerData="customer"/>
		</tbody>
	</table>
</template>

<script>
	import { mapState } from 'vuex';
	import TableData from './TableData';

	export default {
		name: 'Table',
		components: {
			TableData
		},
		data() {
			return {
				customers: [
					{
						name: 'Neymar',
						email: 'neymar@email.com',
						balance: 10
					},
					{
						name: 'Mithrandir',
						email: 'mithrandir@email.com',
						balance: 100
					},
					{
						name: 'Tywin',
						email: 'tywin@email.com',
						balance: 46
					}
				]
			};
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.auth.isAuthenticated
			})
		}
	};
</script>

<style scoped>
  table {
		border-spacing: 0;
  }

	tr {
		text-align: center;
	}

	th {
		border-bottom: thin solid black;
	}

	th {
		padding: 1em;
	}
</style>
