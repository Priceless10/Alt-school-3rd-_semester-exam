// RepoDetail.vue
<template>
  <div>
    <h1>{{repo.name}}</h1>
    <p>{{repo.description}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RepoDetail',
  data() {
    return {
      repo: {}
    }
  },
  created() {
    axios.get(`https://api.github.com/repos/Priceless10/${this.$route.params.id}`)
      .then(res => this.repo = res.data)
  }
}
</script>