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
			<TableForm @showForm="showForm" :form="form"/>
		</tbody>
		<button v-if="!form" @click="showForm" class="btn btn-add">add new customer</button>
	</table>
</template>

<script>
	import { mapState } from 'vuex';
	import TableData from './TableData';
	import TableForm from './TableForm';

	export default {
		name: 'Table',
		components: {
			TableData,
			TableForm
		},
		props: {
			customers: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				form: false
			};
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.authModule.isAuthenticated
			})
		},
		methods: {
			showForm(val) {
				this.form = !this.form;
			}
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

	.btn-add {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 1em 0;
	}
</style>
