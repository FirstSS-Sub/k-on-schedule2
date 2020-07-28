<template>
  <div class="User">
    <h1>This is a Userpage.</h1>
    <h2>ようこそ、{{ userName }}</h2>
  </div>
</template>

<script>
import router from '../router/index.js'

export default {
  name: 'User',
  components: {
  },
  data: function () {
    return {
      userName: '名無しゲスト'
    }
  },
  mounted () {
    const config = {
      headers: {
        Authorization: 'Bearer ' + this.$cookies.get('jwt_token')
      }
    }
    this.$axios
      .get('/api/get_login_user', config)
      .then(res => {
        this.userName = res.data.user_name
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
        console.log(config)
        window.alert('もう一度ログインしてから試してください')
        router.push({ name: 'Login' }) // 強制的にログインページへ遷移
      })
  }
}
</script>
