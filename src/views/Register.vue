<template>
	<div>
	<Form @submit="register" name="Register" />
	<Modal ref="modal">
		<template v-slot:content>
			<p class="modal__text">akun berhasil dibuat silahkan login</p>
		</template>
		<template v-slot:button>
			<button class="btn btn--primary" @click="$router.push('/login')">ok</button>
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
						this.$refs.modal.toggleModal();
					});
			}
		}
	};
</script>

<style scoped>
	.modal__text {
		margin-bottom: 1em;
	}
</style>
