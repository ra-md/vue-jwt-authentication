<template>
	<div class="card">
		<h2>{{ name }}</h2>
		<form class="form" @submit.prevent="submit">
      <ValidationProvider class="form__validation" rules="required|email" v-slot="{ errors }">
				<input
          class="input-text"
          :class="{'error-border': errors[0]}" 
          v-model="email" 
          v-on:keyup.enter="$event.target.nextElementSibling.focus()" 
          type="text" 
          placeholder="Email">
        <span class="error-message">{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider class="form__validation" rules="min:3|required" v-slot="{ errors }">
				<input
          class="input-text"
          :class="{'error-border': errors[0]}" 
          v-model="password" 
          type="password" 
          placeholder="Password">
        <span class="error-message">{{ errors[0] }}</span>
      </ValidationProvider>
      <div v-show="errors">
        <span class="error-message">{{ errors }}</span>
      </div>
			<input
        class="btn btn--primary"
        id="btn-submit"
        :disabled="!isValid || loading"
        type="submit"
        :value="loading ? 'Loading...' : name"
      >
		</form>
    <div v-if="$route.name === 'login'" class="testing">
      <p class="testing__text">email: test@test.com</p>
      <p class="testing__text">password: test</p>
    </div>
	</div>
</template>

<script>
  import { mapState } from 'vuex';
  import { SET_ERROR } from '@/store/mutations.type';
  import { ValidationProvider, extend } from 'vee-validate';
  import { required, email, min } from 'vee-validate/dist/rules.umd.js';

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
    props: {
      fucek: {
        type: String,
        default: 'default'
      }
    },
		data() {
			return {
				email: '',
				password: '',
        loading: false
			};
		},
    watch: {
      errors(newVal, oldVal) {
        if (!oldVal) {
          this.loading = false;
        }
      }
    },
    computed: {
      ...mapState({
        errors: state => state.authModule.errors
      }),
      isValid() {
        return email.validate(this.email) && this.password.length >= 3;
      }
    },
    beforeDestroy() {
      this.removeErrorMessage();
    },
		methods: {
			submit() {
        this.loading = true;
				this.$emit('submit', { email: this.email, password: this.password });
			},
      removeErrorMessage() {
        this.$store.commit(`authModule/${SET_ERROR}`, null);
      }
		}
	};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_colors.scss';

	.card {
    padding: 2em;
    background: white;
    color: black;
    box-shadow: 0 3px 7px 1px rgba(0,0,0,0.3);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 50%;
  }

  .form {
    &__validation {
      display: flex;
      flex-direction: column;
    }
  }

  .btn {
    width: 100%;
    margin-top: .7em;
  }

  .testing {
    display: inline-flex;
    padding-top: 1em;

    &__text {
      padding: 0 0.5em;
    }
  }

  .error-border {
    border-color: $danger-color!important;
  }

  @media (max-width: 768px) {
    .card {
      width: 90%;
    }

    .testing {
      display: block;

      &__text {
        padding: 0.2em 0;
      }
    }
  }

  @media (min-width: 1024px) {
    .card {
      width: 30%;
    }
  }
</style>
