<template>
	<div class="auth">
		<div class="card">
			<slot></slot>
			<form class="flex-column" @submit.prevent="submit">
        <ValidationProvider class="flex-column" rules="required|email" v-slot="{ errors }">
  				<input 
            :class="{'errors': errors[0]}" 
            v-model="email" 
            v-on:keyup.enter="$event.target.nextElementSibling.focus()" 
            type="text" placeholder="Email">
          <span class="errors-message">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="flex-column" rules="min:3|required" v-slot="{ errors }">
  				<input 
            :class="{'errors': errors[0]}" 
            v-model="password" 
            type="password" 
            placeholder="Password">
          <span class="errors-message">{{ errors[0] }}</span>
        </ValidationProvider>
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
  import { ValidationProvider, extend } from 'vee-validate';
  import { required, email, min } from 'vee-validate/dist/rules';

  extend('required', {
    ...required,
    message: 'this field is required'
  });

  extend('email', {
    ...email,
    message: 'email is invalid'
  });

  extend('min', {
    ...min,
    message: (fieldName, placeholder) => {
      return `min ${placeholder.length} characters`;
    }
  });

	export default {
		name: 'Form',
    components: {
      ValidationProvider
    },
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
    beforeDestroy() {
      this.removeErrorMessage();
    },
		methods: {
			submit() {
        if (this.email.length !== 0 && this.password.length !== 0) {
  				this.$emit('submit', { email: this.email, password: this.password });
        } else {
          this.$store.commit(`authModule/${SET_ERROR}`, 'Incorrect email or password');
        }
			},
      removeErrorMessage() {
        this.$store.commit(`authModule/${SET_ERROR}`, null);
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

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  input[type=password],
  input[type=text] {
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

  .errors {
    border-color: red!important;
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
