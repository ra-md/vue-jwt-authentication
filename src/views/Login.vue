<template>
	<Form @submit="login" name="Login" />
</template>

<script>
	import Form from '@/components/Form';
	import { LOGIN } from '@/store/actions.type';

	export default {
		name: 'Login',
		components: {
			Form
		},
		methods: {
			login(value) {	
				this.$store.dispatch(`authModule/${LOGIN}`, value)
					.then(() => {
						this.$router.push('/');
					});
			}
		}
	};
</script>
