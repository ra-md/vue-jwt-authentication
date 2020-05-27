<template>
	<Modal ref="modal">
		<template v-slot:content>
			<input placeholder="name" v-model="name" type="text">
			<input placeholder="email" v-model="email" type="text">
			<input placeholder="balance" v-model="balance" type="number">
		</template>
		<template v-slot:button>
			<div class="btn-group">
				<button @click="showInput" class="btn">Cancel</button>
				<button @click="submit" class="btn">Submit</button>
			</div>
		</template>
	</Modal>
</template>

<script>
	import Modal from './Modal';

	export default {
		name: 'Input',
		components: {
			Modal
		},
		props: {
			customerData: {
				type: Object,
				default: () => {
					return {
						name: '',
						email: '',
						balance: 0
					};
				}
			}
		},
		data() {
			return {
				name: this.customerData.name,
				email: this.customerData.email,
				balance: this.customerData.balance
			};
		},
		methods: {
			showInput() {
				this.$refs.modal.showModal();
			},
			submit() {
				const customer = {
					name: this.name,
					email: this.email,
					balance: this.balance
				};

				if (this.name.length !== 0 && this.email.length !== 0) {
					this.$emit('submit', customer);
					this.showInput();
					this.name = '';
					this.email = '';
					this.balance = 0;
				}
			}
		}
	};
</script>

<style scoped>
	input, button {
		margin: .5em;
	}
</style>
