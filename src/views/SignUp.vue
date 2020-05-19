<template>
	<div>
	<Form @submit="signup">
		<h2>SignUp</h2>
	</Form>
	</div>
</template>

<script>
	import Form from '@/components/Form';

	export default {
		name: 'SignUp',
		components: {
			Form
		},
		methods: {
			signup(value) {
				console.log(value);
			}
		}
	};
</script>
