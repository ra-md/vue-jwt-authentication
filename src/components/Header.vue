<template>
	<header class="header">
		<div class="container">
			<div class="logo">
				<h2><router-link to="/">VueJwt</router-link></h2>
			</div>
			<nav>
				<div v-if="isAuthenticated" class="authenticated">
					<button @click="toggleModal" id="btn-add" class="btn btn--primary" :disabled="loading">
						{{ loading ? 'Loading...' : 'Add new customer' }}
					</button>
					<button @click="logout" class="btn btn--danger">Log Out</button>
				</div>
				<div v-else class="notAuthenticated">
			    <router-link to="/login">
			    	<button :disabled="$route.name === 'login'" class="btn btn--primary">
			    		Login
			    	</button>
			    </router-link>
			    <router-link to="/register">
			    	<button :disabled="$route.name === 'register'" class="btn btn--primary">
			    		Register
			    	</button>
			    </router-link>
				</div>
			</nav>
		</div>
		<AddCustomer @set-loading="setLoading" ref="addCustomer"/>
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
		data() {
			return {
				loading: false
			};
		},
		computed: {
			...mapState({
				isAuthenticated: state => state.authModule.isAuthenticated
			})
		},
		methods: {
			setLoading(value) {
				this.loading = value;
			},
			toggleModal() {
				this.$refs.addCustomer.toggleModal();
			},
			logout() {
				this.$store.commit(`authModule/${PURGE_AUTH}`);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/_colors.scss';
	
	a {
		text-decoration: none;
	}

	.header {
		box-shadow: 1px 0 7px 1px rgba(0,0,0,0.2);
		padding: 0.5em 0;
		position: fixed;
		width: 100%;
		background: white;

		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.logo {
		a {
			color: black;
		}

		a:hover {
			color: $primary-color;
		}
	}

	.authenticated {
		.btn:last-child {
			margin-left: 1em;
		}
	}

	.notAuthenticated {
		a:last-child {
			margin-left: 1em;
		}

		a {
			outline: none;
			color: white;
		}
	}

	@media (max-width: 768px) {
		.btn {
			padding: .7em .6em;
		}

		.authenticated {
			.btn:last-child {
				margin-left: 0.5em;
			}
		}

		.notAuthenticated {
			a:last-child {
				margin-left: .5em;
			}
		}
	}

</style>
