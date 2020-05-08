<template>
	<div class="auth">
		<div class="card">
			<slot></slot>
			<form @submit.prevent="submit">
				<input v-model="email" type="email" placeholder="Email">
				<input v-model="password" type="password" placeholder="Password">
				<input class="btn" type="submit">
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Form',
		data() {
			return {
				email: '',
				password: ''
			};
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

  .auth h1 {
    margin-bottom: .5em;
  }

  .auth form {
    display: flex;
    flex-direction: column;
  }

  .auth input[type=password],
  .auth input[type=email] {
    margin: .7em 0;
    background: #f5f5f5;
    border-radius: 4px;
    padding: 0.7em;
    border: 2px solid #cecece;
  }

  .auth input:focus {
    border-color: blue;
    outline: none;
  }

  .auth .btn {
    margin-top: .7em;
  }

  .auth .btn:hover {
    background-color: black;
  }

  .auth .btn:focus {
    outline: none;
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
