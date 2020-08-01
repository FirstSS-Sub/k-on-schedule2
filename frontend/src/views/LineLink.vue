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
    <h1>Line連携</h1>
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
    <p><button @click="link()">連携</button></p>
  </div>
</template>

<script>

export default {
  name: 'line_link',
  data: function () {
    return {
      user_name: '',
      password: ''
    }
  },
  methods: {
    link: function () {
      const sha256 = this.$crypto.createHash('sha256')

      /** 150 ～ 180までの整数乱数 */
      const x = Math.floor(Math.random() * (180 - 150)) + 150
      sha256.update(x)
      /** base64でエンコードすると4/3倍の長さで4倍長の数になるので、200 〜 240までのハッシュ生成 **/
      const nonce = sha256.digest('base64')

      sha256.update(this.password)
      const hashPass = sha256.digest('base64')

      // auth.login(this.userid,this.password)
      this.$axios
        .post('/api/line_link', {
          user_name: this.user_name,
          password: hashPass,
          nonce: nonce
        })
        .then((res) => {
          // レスポンスが200番台の時の処理
          location.href(
            'https://access.line.me/dialog/bot/accountLink?linkToken=' +
            this.$route.query.linkToken + '&nonce=' + nonce
          )
        })
        .catch(error => {
          console.log(error)
          window.alert(error.response.data.msg)
        })
    }
  }
}
</script>

<style scoped src="../css/table_style.css"></style>
<style scoped src="../css/router.css"></style>

<style scoped>
.login-table th {
    background: #FFCC66;
  }
</style>
