<template>
  <div id="app">
    <div id="nav">
      <ul>
        <router-link tag="li" to="/"><a>Home</a></router-link>
        <router-link tag="li" to="/about"><a>About</a></router-link>
        <router-link tag="li" to="/user"><a>User</a></router-link>
        <router-link tag="li" to="/login"><a>Login</a></router-link>
        <router-link tag="li" to="/create_user"><a>CreateUser</a></router-link>
        <router-link tag="li" to="/schedule"><a>Schedule</a></router-link>
        <router-link tag="li" to="/test_db"><a>TestDB</a></router-link>
        <router-link tag="li" to="/create_group"><a>CreateGroup</a></router-link>
      </ul>
    </div>
    <router-view/>
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
body {
  background-image: url(../public/static/background.jpg);    /* 背景画像指定 */
}
</style>

<style scoped src="./css/globalnavi.css"></style>
