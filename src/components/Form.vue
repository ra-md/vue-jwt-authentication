<template>
	<div class="auth">
		<div class="card">
			<slot></slot>
			<form class="flex-column" @submit.prevent="submit">
        <ValidationProvider class="flex-column" rules="required|email" v-slot="{ errors }">
  				<input
            class="text-input"
            :class="{'error': errors[0]}" 
            v-model="email" 
            v-on:keyup.enter="$event.target.nextElementSibling.focus()" 
            type="text" 
            placeholder="Email">
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="flex-column" rules="min:3|required" v-slot="{ errors }">
  				<input
            class="text-input"
            :class="{'error': errors[0]}" 
            v-model="password" 
            type="password" 
            placeholder="Password">
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
        <div v-show="errors">
          <p class="error-message">{{ errors }}</p>
        </div>
				<input :disabled="!isValid" :class="{ 'disabled-btn': !isValid }" class="btn" type="submit" value="submit">
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
      }),
      isValid() {
        return email.validate(this.email) && this.password.length >= 3
      }
    },
    beforeDestroy() {
      this.removeErrorMessage();
    },
		methods: {
			submit() {
				this.$emit('submit', { email: this.email, password: this.password });
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

  .btn {
    margin-top: .7em;
  }

  .disabled-btn {
    opacity: 0.3;
    cursor: default;
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
