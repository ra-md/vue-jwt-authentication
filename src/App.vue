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

<style>

  * {
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: blue;
    --danger-color: red;
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }

  .container {
    width: 90%;
    margin: auto;
  }
  
  .btn {
    background: var(--primary-color);
    border: none;
    padding: .7em 1.5em;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.7;
  }

  .btn:focus {
    background-color: black;
  }

  .text-input {
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

  .error {
    border-color: red!important;
  }

  .error-message {
    color: red;
    text-align: center;
  }
</style>
