<template>
	<div>
	<Form @submit="signup">
		<h2>SignUp</h2>
	</Form>
	<Modal ref="modal"/>
	</div>
</template>

<script>
	import Form from '@/components/Form';
	import { REGISTER } from '@/store/actions.type';
	import Modal from '@/components/Modal';

	export default {
		name: 'SignUp',
		components: {
			Form,
			Modal
		},
		mounted() {
			console.log(this.$refs.modal.openModal());
		},
		methods: {
			signup(value) {
				this.$store.dispatch(REGISTER, value)
				.then(() => console.log('push route'));
			}
		}
	};
</script>
