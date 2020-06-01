<template>
	<header>
		<div class="container">
			<div class="logo">
				<h2><router-link to="/">VueJwt</router-link></h2>
			</div>
			<nav>
				<div v-if="isAuthenticated">
					<button @click="toggleModalInput" class="btn">Add new customer</button>
					<button @click="logout" class="btn logout-btn">Log Out</button>
				</div>
				<div v-else>
			    <router-link to="/login">
			    	<button class="btn">Login</button>
			    </router-link>
			    <router-link to="/register">
			    	<button class="btn">Register</button>
			    </router-link>
				</div>
			</nav>
		</div>
		<ModalInput ref="modalInputRef" @submit="submitCustomer"/>
  </header>
</template>

<script>
	import { FETCH_CUSTOMERS, ADD_CUSTOMER } from '@/store/actions.type';
	import { PURGE_AUTH } from '@/store/mutations.type';
	import ModalInput from './ModalInput';

	export default {
		name: 'Header',
		components: {
			ModalInput
		},
		computed: {
			isAuthenticated() {
				return this.$store.state.authModule.isAuthenticated;
			}
		},
		methods: {
			toggleModalInput() {
				this.$refs.modalInputRef.toggleModalInput();		
			},
			submitCustomer(customer) {
				this.$store.dispatch(`customerModule/${ADD_CUSTOMER}`, customer)
					.then(() => {
						this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
						this.$refs.modalInputRef.resetInput();
					});
			},
			logout() {
				this.$store.commit(`authModule/${PURGE_AUTH}`);
			}
		}
	};
</script>

<style scoped>
	
	header {
		box-shadow: 1px 0 7px 1px rgba(0,0,0,0.2);
		padding: 0.5em 0;
		position: fixed;
		width: 100%;
		background: white;
	}

	header .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
	}

	.logo a {
		color: black;
	}

	.logo a:hover {
		color: var(--primary-color);
	}

	button {
		margin-left: 1em;
	}

	button a {
		color: white;
	}

	.logout-btn {
		background-color: var(--danger-color);
	}

	@media (max-width: 768px) {
		button {
			margin-left: .5em;
		}
	}

</style>
