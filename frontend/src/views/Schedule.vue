<template>
  <div class="Schedule">
    <h1>スケジュール登録ページだよーーーー</h1>
  </div>
</template>

<script>

export default {
  name: 'Schedule',
  data () {
    return {
      datalist: []
    }
  },
  created() {
    this.$axios
      .get('/api/schedule')
      .then(res => {
        this.datalist = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
