<template>
  <div>
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header
    }
  };
</script>

<style lang="scss">
  @import '@/assets/scss/_colors.scss';
  @import '@/assets/scss/_mixin.scss';

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }

  .container {
    width: 90%;
    margin: auto;
  }
  
  .btn {
    border: none;
    padding: .7em 1.5em;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &--primary {
      @include btn-bg($primary-color);
    }

    &--danger {
      @include btn-bg($danger-color);
    }
  }

  .input-text {
    margin: .7em 0;
    background: #f5f5f5;
    border-radius: 4px;
    padding: 0.7em;
    border: 2px solid #cecece;

    &:focus {
      border-color: $primary-color;
      outline: none;
    }
  }

  .error-message {
    color: $danger-color;
    text-align: center;
  }
</style>
