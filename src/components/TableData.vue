<template>
	<tr>
		<td>{{ customerData.name }}</td>
		<td>{{ customerData.email }}</td>
		<td>{{ customerData.balance }}</td>
		<td v-if="isAuthenticated">
			<button class="btn btn-action">Edit</button>
			<button class="btn btn-action">Delete</button>
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
				isAuthenticated: state => state.authModule.isAuthenticated
			})
		}
	};
</script>
