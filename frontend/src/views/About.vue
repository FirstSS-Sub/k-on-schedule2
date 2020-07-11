<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="onamae">お名前ボタン</button>
    <ul>
      <li v-for="(data, key) in datalist" v-bind:key="key">
        {{data.last}} {{data.first}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    onamae: function () {
      this.$axios
        .get('http://localhost:5000/create_user')
        .then(res => {
          this.datalist = res.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
