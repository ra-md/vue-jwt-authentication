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
			<tr>
				<td><input type="" name=""></td>
				<td><input type="" name=""></td>
				<td><input type="" name=""></td>
				<td>
					<button class="btn btn-action">Edit</button>
					<button class="btn btn-action">Delete</button>
				</td>
			</tr>
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
		props: {
			customers: {
				type: Array,
				required: true
			}
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.authModule.isAuthenticated
			})
		}
	};
</script>

<style>
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

	td {
		border-bottom: thin solid black;
		padding: 1em 0;
	}

	.btn-action {
		padding: .3em 1.5em;
		margin-left: 1em;
	}
</style>
