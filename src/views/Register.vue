<template>
	<div>
	<Form @submit="register">
		<h2>Register</h2>
	</Form>
	<Modal ref="modal">
		<template v-slot:content>
			<p class="modal-text">akun berhasil dibuat silahkan login</p>
		</template>
		<template v-slot:button>
			<button class="btn" @click="$router.push('/login')">ok</button>
		</template>
	</Modal>
	</div>
</template>

<script>
	import Form from '@/components/Form';
	import { REGISTER } from '@/store/actions.type';
	import Modal from '@/components/Modal';

	export default {
		name: 'Register',
		components: {
			Form,
			Modal
		},
		methods: {
			register(value) {
				this.$store.dispatch(REGISTER, value)
					.then(() => {
						this.$refs.modal.showModal();
					});
			}
		}
	};
</script>

<style>
	.modal-text {
		margin-bottom: 1em;
		font-weight: bold;
	}
</style>
