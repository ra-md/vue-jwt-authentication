<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default {
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
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .btn {
    background: blue;
    border: none;
    padding: .7em;
    color: white;
  }

  .card {
    padding: 2em;
    background: white;
    box-shadow: 0 3px 7px 1px rgba(0,0,0,0.3);
    border-radius: 3px;
  }

  .auth {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .auth h1 {
    margin-bottom: .5em;
  }

  .auth form {
    display: flex;
    flex-direction: column;
  }

  .auth input {
    margin: 1em 0;
    background: #f5f5f5;
    border-radius: 5px;
    padding: 0.7em;
    border: 2px solid #929292;
  }

  .auth input:focus {
    border-color: blue;
    outline: none;
  }

  .auth .btn:focus {
    outline: none;
  }

  @media (max-width: 667px) {
    .auth {
      width: 100%;
    }
  }
</style>
