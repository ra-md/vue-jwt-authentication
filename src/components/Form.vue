<template>
	<div class="auth">
		<div class="card">
			<slot></slot>
			<form @submit.prevent="submit">
				<input v-model="email" type="email" placeholder="Email">
				<input v-model="password" type="password" placeholder="Password">
        <div v-if="errors">
          <p>{{ errors }}</p>
        </div>
				<input class="btn" type="submit">
			</form>
		</div>
	</div>
</template>

<script>
  import { mapState } from 'vuex';

	export default {
		name: 'Form',
		data() {
			return {
				email: '',
				password: ''
			};
		},
    computed: {
      ...mapState({
        errors: state => state.auth.errors
      })
    },
		methods: {
			submit() {
				this.$emit('submit', { email: this.email, password: this.password });
			}
		}
	};
</script>

<style scoped>
	.card {
    padding: 2em;
    background: white;
    color: var(--font-color);
    box-shadow: 0 3px 7px 1px rgba(0,0,0,0.3);
    border-radius: 4px;
  }

	.auth {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input[type=password],
  input[type=email] {
    margin: .7em 0;
    background: #f5f5f5;
    border-radius: 4px;
    padding: 0.7em;
    border: 2px solid #cecece;
  }

  input:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  .btn {
    margin-top: .7em;
  }

  .btn:focus {
    background-color: black;
  }

  @media (max-width: 768px) {
    .auth {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .auth {
      width: 30%;
    }
  }
</style>
