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
    --font-color: black;
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--font-color);
  }

  .container {
    width: 90%;
    margin: auto;
  }
  
  .btn {
    background: var(--primary-color);
    border: none;
    padding: .7em;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
