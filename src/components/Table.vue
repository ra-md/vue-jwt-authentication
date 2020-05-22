<template>
	<table class="card">
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Balance</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody v-for="(customer, index) in customers" :key="index">
			<TableData :customerData="customer"/>
		</tbody>
	</table>
</template>

<script>
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
		}
	};
</script>

<style scoped>
	.card {
    background: white;
    color: var(--font-color);
    box-shadow: 0 3px 7px 1px rgba(0,0,0,0.3);
    border-radius: 4px;
  }

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
