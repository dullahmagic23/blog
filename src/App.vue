<template>
  <div id="app">
    <div class="container mt-5">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link to="login" class="nav-link">
            <button class="btn btn-dark">
              Login
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="register" class="nav-link">
            <button class="btn btn-dark">
              Register
            </button>
          </router-link>
        </li>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
