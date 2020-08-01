<template>
  <div id="app">
    <div id="nav">
      <div class="hamburger_btn" @click='ActiveBtn=!ActiveBtn' v-bind:class="{'hamburger_btn-active':ActiveBtn}">
        <span class="line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
        <span class="line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
        <span class="line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
      </div>
      <transition name="menu">
        <div class="menu" v-bind:class="{'btn_menu':ActiveBtn}">
          <ul>
            <router-link tag="li" to="/"><a @click='ActiveBtn=!ActiveBtn'>Home</a></router-link>
            <router-link tag="li" to="/about"><a @click='ActiveBtn=!ActiveBtn'>About</a></router-link>
            <router-link tag="li" to="/user"><a @click='ActiveBtn=!ActiveBtn'>User</a></router-link>
            <router-link tag="li" to="/login"><a @click='ActiveBtn=!ActiveBtn'>Login</a></router-link>
            <router-link tag="li" to="/create_user"><a @click='ActiveBtn=!ActiveBtn'>CreateUser</a></router-link>
            <router-link tag="li" to="/schedule"><a @click='ActiveBtn=!ActiveBtn'>Schedule</a></router-link>
            <router-link tag="li" to="/test_db"><a @click='ActiveBtn=!ActiveBtn'>TestDB</a></router-link>
            <router-link tag="li" to="/create_group"><a @click='ActiveBtn=!ActiveBtn'>CreateGroup</a></router-link>
          </ul>
        </div>
      </transition>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ActiveBtn: false
    }
  }
}
</script>

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
