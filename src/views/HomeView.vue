<!--<template>
<div v-for="item in repo" :key="item.id">
{{ item.name }} {{ item.html_url }}
</div>
</template>
<script setup>
import axios from "axios";
import style from "../style.css"
import Repository from '../components/Repository.vue'
import {ref,onMounted} from "vue"
const repo = ref([])
/**export default {**/
    const getRepo = async () => {
try {const res = await axios.get("https://api.github.com/users/Priceless10/repos")
console.log(res.data)
repo.value = res.data
} catch (error) {
console.log(error)
}
}
    onMounted (()=>{
getRepo()
    }) 
</script>
-->

// Home.vue
<template>
  <div>
    <h1>My GitHub Repositories</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <router-link :to="`/repo/${repo.id}`">{{repo.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      repos: []
    }
  },
  created() {
    axios.get('https://api.github.com/users/Priceless10/repos')
      .then(res => this.repos = res.data)
  }
}
</script>

