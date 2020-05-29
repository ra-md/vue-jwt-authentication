<template>
	<div>
	<Form @submit="register">
		<h2>Register</h2>
	</Form>
	<Modal ref="modalRef">
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
				this.$store.dispatch(`authModule/${REGISTER}`, value)
					.then(() => {
						this.$refs.modalRef.toggleModal();
					});
			}
		}
	};
</script>

<style>
	.modal-text {
		margin-bottom: 1em;
	}
</style>
