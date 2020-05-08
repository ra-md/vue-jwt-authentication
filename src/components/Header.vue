<template>
	<header>
		<div class="container">
			<div class="logo">
				<h2><router-link to="/">VueJwt</router-link></h2>
			</div>
			<nav>
		    <router-link to="/signin">SignIn</router-link> |
		    <router-link to="/signup">SignUp</router-link>
			</nav>
		</div>
  </header>
</template>

<script>
	export default {
		name: 'Header'
	};
</script>

<style scoped>
	
	header {
		box-shadow: 1px 0 7px 1px rgba(0,0,0,0.2);
		padding: 0.5em 0;
		position: fixed;
		width: 100%;
		background: white;
	}

	header .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		color: black;
		text-decoration: none;
	}

	a:hover {
		color: blue;
	}

</style>
