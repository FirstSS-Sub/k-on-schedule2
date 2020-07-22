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
    <p><button @click="create_user()">新規グループ作成</button></p>
  </div>
</template>

<script>

export default {
  name: 'create_group',
  data: function () {
    return {
      group_name: ''
    }
  },
  methods: {
    create_user: function () {
      window.alert('グループ名：' + this.group_name)
    }
  }
}
</script>

<style scope src="./css/table_style.css"></style>

<style scoped>
.form-table2 th {
    background: #CCFFCC;
  }
</style>
