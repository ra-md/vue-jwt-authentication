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

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    width: 90%;
    margin: auto;
  }
  
  .btn {
    background: blue;
    border: none;
    padding: .7em;
    color: white;
    border-radius: 4px;
    transition: 0.5s;
  }
</style>
