<template>
	<Modal ref="modal">
		<template v-slot:content>
			<label>Name</label> 
			<input 
				v-on:keyup.enter="$event.target.nextElementSibling.nextElementSibling.focus()" 
				class="text-input" 
				placeholder="name" 
				v-model="name" type="text">
			<label>Email</label>
			<input 
				v-on:keyup.enter="$event.target.nextElementSibling.nextElementSibling.focus()" 
				class="text-input" 
				placeholder="email" 
				v-model="email" 
				type="text">
			<label>Balance</label>
			<input 
				v-on:keyup.enter="submit" 
				class="text-input" 
				placeholder="balance" 
				v-model="balance" 
				type="number">
		</template>
		<template v-slot:button>
			<div class="btn-group">
				<button @click="toggleModalInput" class="btn">Cancel</button>
				<button @click="submit" class="btn">Submit</button>
			</div>
		</template>
	</Modal>
</template>

<script>
	import Modal from './Modal';

	export default {
		name: 'ModalInput',
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
			toggleModalInput() {
				this.$refs.modal.toggleModal();
			},
			submit() {
				const customer = {
					name: this.name,
					email: this.email,
					balance: this.balance
				};

				if (this.name.length !== 0 && this.email.length !== 0) {
					this.$emit('submit', customer);
					this.toggleModalInput();
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
