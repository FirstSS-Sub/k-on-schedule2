<template>
    <!--<v-card class='elevation-1 pa-3 login-card'>
    <v-card-text>
      <div class='layout column align-center'>
        <h1 class='flex my-4 primary--text font-weight-bold'>ログイン</h1>
      </div>
      <v-form ref='loginForm'>
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
    <router-view/>
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
    <div id="nav">
      <router-link to="/Login_forget">パスワードを忘れた方はこちら</router-link>
    </div>
  </div>
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
      const sha256 = this.$crypto.createHash('sha256')
      sha256.update(this.password)
      const hashPass = sha256.digest('base64')

      // auth.login(this.userid,this.password)
      this.$axios
        .post('/api/login', {
          user_name: this.user_name,
          password: hashPass
        })
        .then((res) => {
          // レスポンスが200の時の処理
          this.$cookies.set('jwt_token', res.data.access_token, { expires: 1 }) // 1日
          window.alert('ログインしました。')
        })
        .catch(error => {
          console.log(error)
          window.alert(error.response.data.message)
        })
    }
  }
}
</script>

<style scoped src="./css/table_style.css"></style>
<style scoped src="./css/router.css"></style>

<style scoped>
.login-table th {
    background: #FFCC66;
  }
</style>
