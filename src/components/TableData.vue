<template>
	<tr>
		<td>{{ customerData.name }}</td>
		<td>{{ customerData.email }}</td>
		<td>{{ customerData.balance }}</td>
		<td v-if="isAuthenticated">
			<button class="btn">Edit</button>
			<button class="btn">Delete</button>
		</td>
	</tr>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'TableData',
		props: {
			customerData: {
				required: true,
				type: Object
			}
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.auth.isAuthenticated
			})
		}
	};
</script>

<style scoped>
	button {
		padding: .3em 1.5em;
		margin-left: 1em;
	}

	td {
		border-bottom: thin solid black;
	}

	td {
		padding: 1em;
	}

</style>
