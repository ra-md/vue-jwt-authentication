<template>
	<header>
		<div class="container">
			<div class="logo">
				<h2><router-link to="/">VueJwt</router-link></h2>
			</div>
			<nav>
				<div v-if="isAuthenticated">
					<button class="btn">Create Customer</button>
					<button @click="logout" class="btn logout-btn">Log Out</button>
				</div>
				<div v-else>
					<button class="btn">
				    <router-link to="/login">Login</router-link>
					</button>
					<button class="btn">
				    <router-link to="/register">Register</router-link>
					</button>
				</div>
			</nav>
		</div>
  </header>
</template>

<script>
	import { LOGOUT } from '@/store/actions.type';

	export default {
		name: 'Header',
		computed: {
			isAuthenticated() {
				return this.$store.state.auth.isAuthenticated;
			}
		},
		methods: {
			logout() {
				this.$store.dispatch(LOGOUT);
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

	.btn {
		margin-left: 1em;
	}

	.btn a {
		color: white;
	}

	.logout-btn {
		background-color: var(--danger-color);
	}

</style>
