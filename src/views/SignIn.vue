<template>
	<div>
	<Form @submit="signin">
		<h2>SignIn</h2>
	</Form>
	</div>
</template>

<script>
	import Form from '@/components/Form';

	export default {
		name: 'SignIn',
		components: {
			Form
		},
		methods: {
			signin(value) {	
				console.log(value);
			}
		}
	};
</script>
