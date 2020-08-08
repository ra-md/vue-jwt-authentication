<template>
	<Modal ref="modal">
		<template v-slot:content>
			<label>Name</label> 
			<input 
				v-on:keyup.enter="$event.target.nextElementSibling.nextElementSibling.focus()" 
				class="input-text" 
				placeholder="name" 
				v-model="name" type="text">
			<label>Email</label>
			<input 
				v-on:keyup.enter="$event.target.nextElementSibling.nextElementSibling.focus()" 
				class="input-text" 
				placeholder="email" 
				v-model="email" 
				type="text">
			<label>Balance</label>
			<input 
				v-on:keyup.enter="submit" 
				class="input-text" 
				placeholder="balance" 
				v-model="balance" 
				type="number">
		</template>
		<template v-slot:button>
			<div class="btn-group">
				<button @click="toggleModal" class="btn btn--primary">Cancel</button>
				<button @click="submit" class="btn btn--primary">Submit</button>
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
		watch: {
			customerData() {
				this.name = this.customerData.name;
				this.email = this.customerData.email;
				this.balance = this.customerData.balance;
			}
		},
		methods: {
			toggleModal() {
				this.$refs.modal.toggleModal();
			},
			resetInput() {
				this.name = '';
				this.email = '';
				this.balance = 0;
			},
			submit() {
				const customer = {
					name: this.name,
					email: this.email,
					balance: this.balance
				};

				if (this.name.length !== 0 && this.email.length !== 0) {
					this.$emit('submit', customer);
					this.toggleModal();
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
