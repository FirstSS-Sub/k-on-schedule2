<template>
  <div class="create_group">
    <h1>新規グループ作成</h1>
    <div>
      <table class="form-table2">
        <tbody>
          <tr>
            <th>グループ名</th>
            <td><input type="text" placeholder="グループ名" v-model="group_name">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p><button @click="create_group()">新規グループ作成</button></p>
  </div>
</template>

<script>
import router from '../router/index.js'

export default {
  name: 'create_group',
  data: function () {
    return {
      group_name: ''
    }
  },
  methods: {
    create_group: function () {
      const config = {
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('jwt_token')
        }
      }

      this.$axios
        .post('/api/create_group', {
          group_name: this.group_name
        }, config)
        .then((res) => {
          // レスポンスが200の時の処理
          console.log('グループ名: ' + res.data.group_name + '登録しました。')
          window.alert(
            'グループ名: ' + res.data.group_name + '\n' +
            '登録しました。')
        })
        .catch(error => {
          console.log(error)
          if (error.response.data.msg === 'Signature verification failed') {
            window.alert('ログインしてください')
            router.push({ name: 'Login' }) // 強制的にログインページへ遷移
          }
        })
    }
  }
}
</script>

<style scope src="../css/table_style.css"></style>

<style scoped>
.form-table2 th {
    background: #CCFFCC;
  }
</style>
