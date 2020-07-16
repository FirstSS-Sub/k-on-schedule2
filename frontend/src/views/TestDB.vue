<template>
  <div class="TestDB">
    <table class="vue_tbl">
      <thead>
      <tr>
        <th>id</th>
        <th>user_name</th>
        <th>password</th>
        <th>email</th>
        <th>thu</th>
        <th>fri</th>
        <th>sat</th>
        <th>sun</th>
        <th>mon</th>
        <th>tue</th>
        <th>wed</th>
        <th>update</th>
        <th>comment</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in userList" v-bind:key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.user_name }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.thu }}</td>
        <td>{{ user.fri }}</td>
        <td>{{ user.sat }}</td>
        <td>{{ user.sun }}</td>
        <td>{{ user.mon }}</td>
        <td>{{ user.tue }}</td>
        <td>{{ user.wed }}</td>
        <td>{{ user.update }}</td>
        <td>{{ user.comment }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'TestDB',
  data () {
    return {
      userList: []
    }
  },
  created () {
    this.$axios
      .get('/api/test_db')
      .then(res => {
        this.datalist = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
