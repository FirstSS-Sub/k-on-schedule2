<template>
  <div class="create_user">
    <h1>新規アカウント作成</h1>
    <div>
      <table class="form-table">
        <tbody>
          <tr>
            <th>ユーザ名</th>
            <td><input type="text" placeholder="ユーザ名" v-model="user_name">
            </td>
          </tr>
          <tr>
            <th>パスワード</th>
            <td><input type="password" placeholder="パスワード" v-model="password">
            </td>
          </tr>
          <tr>
            <th>パスワード（確認用）</th>
            <td><input type="password" placeholder="パスワード（確認用）" v-model="password_check">
            </td>
          </tr>
          <tr>
            <th>メールアドレス</th>
            <td><input type="email" placeholder="メールアドレス" v-model="email">
            </td>
          </tr>
        </tbody>
      </table>
    <p>
      <button @click="create_user()">新規アカウント作成</button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'create_user',
  data: function () {
    return {
      user_name: '',
      password: '',
      email: ''
    }
  },
  methods: {
    create_user: function () {
      if (this.user_name === '' || this.password === '' || this.password_check === '' || this.email === '') {
        window.alert('全ての項目を記入してください。')
      } else if (this.password !== this.password_check) {
        window.alert('パスワードが一致していません。' + '\n' + 'もう一度確認した上で、パスワードを記入し直してください。')
      } else {
        const sha256 = this.$crypto.createHash('sha256')
        sha256.update(this.password)
        const hashPass = sha256.digest('base64')

        this.$axios
          .post('/api/create_user', {
            user_name: this.user_name,
            password: hashPass,
            email: this.email
          })
          .then(() => {
            // レスポンスが200の時の処理
            console.log('うぇいよー')
            window.alert(
              'ユーザー名:' + this.user_name + '\n' +
              'email:' + this.email + '\n ' +
              '登録しました。')
          })
          .catch(error => {
            console.log(error)
            window.alert(error.response.data.msg)
          })
      }
    }
  }
}
</script>

<style scope src="../css/table_style.css"></style>

<style scoped>
.form-table th {
    background: #CCFFCC;
  }
</style>
