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
    <h1>ログイン</h1>
    <div>
      <table class="login-table">
        <tbody>
          <tr>
            <th>ユーザ名</th>
            <td><input type="text" placeholder="ユーザ名" v-model="user_name">
            </td>
          </tr>
          <tr>
            <th>パスワード</th>
            <td><input type="text" placeholder="パスワード" v-model="password">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p><button @click="login()">ログイン</button></p>
</template>

<script>

export default {
  name: 'login',
  data: function () {
    return {
      user_name: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // auth.login(this.userid,this.password)
      window.alert('user_name:' + this.user_name + '\n' + 'password:' + this.password)
    }
  }
}
</script>

<style scope src="./css/table_style.css"></style>

<style scoped>
.login-table th {
    background: #CCFFCC;
  }
</style>
