<template>
	<div class="auth">
		<div class="card">
			<slot></slot>
			<form @submit.prevent="submit">
				<input v-model="email" v-on:keyup.enter="$event.target.nextElementSibling.focus()" type="email" placeholder="Email">
				<input v-model="password" type="password" placeholder="Password">
        <div v-show="errors">
          <p class="errors-message">{{ errors }}</p>
        </div>
				<input class="btn" type="submit" value="submit">
			</form>
		</div>
	</div>
</template>

<script>
  import { mapState } from 'vuex';
  import { SET_ERROR } from '@/store/mutations.type';

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
        errors: state => state.authModule.errors
      })
    },
    mounted() {
      this.removeErrorMessage();
    },
		methods: {
			submit() {
        if (this.email.length !== 0 && this.password.length !== 0) {
  				this.$emit('submit', { email: this.email, password: this.password });
        } else {
          this.$store.commit(SET_ERROR, "Email or Password can't be blank");
        }
			},
      removeErrorMessage() {
        this.$store.commit(SET_ERROR, null);
      }
		}
	};
</script>

<style scoped>
	.card {
    padding: 2em;
    background: white;
    color: black;
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

  .errors-message {
    color: red;
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
