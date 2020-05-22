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
		<tbody>
			<tr>
				<td>Neymar</td>
				<td>Neymar@neymar.com</td>
				<td>200</td>
				<td>
					<button class="btn">Edit</button>
					<button class="btn">Delete</button>
				</td>
			</tr>
			<tr>
				<td>Neymar</td>
				<td>Neymar@neymar.com</td>
				<td>200</td>
				<td>
					<button class="btn">Edit</button>
					<button class="btn">Delete</button>
				</td>
			</tr>
			<tr>
				<td>Neymar</td>
				<td>Neymar@neymar.com</td>
				<td>200</td>
				<td>
					<button class="btn">Edit</button>
					<button class="btn">Delete</button>
				</td>
			</tr>
		</tbody>

	</table>
</template>

<script>
	export default {
		name: 'Table',
		data() {
			return {

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

	button {
		padding: .3em 1.5em;
		margin-left: 1em;
	}

  table {
		border-spacing: 0;
  }

	tr {
		text-align: center;
	}

	th, tr:not(:last-child) td {
		border-bottom: thin solid black;
	}

	th, td {
		padding: 1em;
	}

</style>
