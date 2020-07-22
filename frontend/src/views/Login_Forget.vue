<template>
  <div class="login_forget">
    <h1>パスワードを忘れた方</h1>
    <div>
      <table class="login-table2">
        <tbody>
          <tr>
            <th>メールアドレス</th>
            <td><input type="text" placeholder="メールアドレス" v-model="login_mail">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p><button @click="send_mail()">このメールアドレスにパスワードを送る</button></p>
  </div>
</template>

<script>

export default {
  name: 'login_forget',
  data: function () {
    return {
      login_mail: ''
    }
  },
  methods: {
    send_mail: function () {
      window.alert('メールアドレス：' + this.login_mail)
    }
  }
}
</script>

<style scope src="./css/table_style.css"></style>

<style scoped>
.login-table2 th {
    background: #CCFFCC;
  }
</style>
