<template>
	<table class="table">
		<tr class="table__row">
			<th class="table__head">Name</th>
			<th class="table__head">Email</th>
			<th class="table__head">Balance</th>
			<th v-if="isAuthenticated" class="table__head">Actions</th>
		</tr>
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

<style lang="scss">
	.table {
		border-spacing: 0;
		max-height: 3em;

		.table__row {
			text-align: center;
		}

		.table__head {
			border-bottom: thin solid black;
			padding: 1em;
		}
	}
</style>
