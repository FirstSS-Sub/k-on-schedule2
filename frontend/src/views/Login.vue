<template>
    <!--<v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <div class="layout column align-center">
        <h1 class="flex my-4 primary--text font-weight-bold">ログイン</h1>
      </div>
      <v-form ref="loginForm">
        <v-text-field
          append-icon="person"
          name="login"
          label="メールアドレス"
          type="text"
          v-model="model.email"
          :counter="128"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          append-icon="lock"
          name="password"
          label="パスワード"
          id="password"
          type="password"
          v-model="model.password"
          :counter="32"
          :rules="passwordRules"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <div class="login-btn">
      <v-btn block color="primary" @click="login" :loading="loading">ログイン</v-btn>
    </div>
  </v-card>
  -->
  <div class="login">
      <div id="login">
    <div>
      <input type="text" placeholder="ログインID" v-model="userid">
    </div>
    <div>
      <input type="text" placeholder="パスワード" v-model="password">
    </div>
    <button @click="login()">ログイン</button>
</template>

<script>

export default {
  name: 'Login',
  data: function () {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // auth.login(this.userid,this.password)
      window.alert('userid:' + this.userid + '\n' + 'password:' + this.password)
    }
  }
}
</script>
