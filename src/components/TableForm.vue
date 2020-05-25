<template>
	<tr v-show="form">
    <td><input v-model="name" class="item" type="text"></td>
    <td><input v-model="email" class="item" type="text"></td>
    <td><input v-model="balance" class="item" type="number"></td>
    <td>
      <button @click="showForm" class="btn btn-action item">Cancel</button>
      <button @click="submitCustomer" class="btn btn-action item">Submit</button>
    </td>
	</tr>
</template>

<script>
	export default {
		name: 'TableForm',
		props: {
			form: {
				required: true,
				type: Boolean
			}
		},
		data() {
			return {
				name: '',
				email: '',
				balance: 0
			};
		},
		methods: {
			showForm() {
				this.$emit('showForm');
			},
			submitCustomer() {
				if (this.name.length !== 0 && this.email.length !== 0) {
					console.log(this.name, this.email, this.balance);
					this.name = '';
					this.email = '';
					this.balance = 0;
					this.$emit('showForm');
				}
			}
		}
	};
</script>
