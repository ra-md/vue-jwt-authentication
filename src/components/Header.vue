<template>
	<header>
		<div class="container">
			<div class="logo">
				<h2><router-link to="/">VueJwt</router-link></h2>
			</div>
			<nav>
				<div v-if="isAuthenticated">
					<button @click="toggleModal" id="btn-add" class="btn">Add new customer</button>
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
		<AddCustomer ref="addCustomer"/>
  </header>
</template>

<script>
	import { PURGE_AUTH } from '@/store/mutations.type';
	import { mapState } from 'vuex';
	import AddCustomer from './AddCustomer';

	export default {
		name: 'Header',
		components: {
			AddCustomer
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.authModule.isAuthenticated
			})
		},
		methods: {
			toggleModal() {
				this.$refs.addCustomer.toggleModal();
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
