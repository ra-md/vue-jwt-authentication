<template>
	<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signin">SignIn</router-link> |
    <router-link to="/signup">SignUp</router-link>
  </div>
</template>

<script>
	export default {
		name: 'Header'
	};
</script>

<style scoped>
  #nav {
  	position: fixed;
    padding: .5em;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
