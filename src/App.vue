<script setup>
import {RouterLink, RouterView} from 'vue-router';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  
  <nav>
    <RouterLink to="/" class="btn btn-primary ">Home</RouterLink><br>
    <RouterLink to="/repo" class="btn btn-primary ">Git Repos</RouterLink><br>
    <RouterLink to="/contact" class="btn btn-primary ">About</RouterLink>
    
    
  </nav>

  <main>
    <RouterView/>
  </main>
  <footer>
    <p>Priceles@2023</p> 
  </footer>
</template>

<style scoped>
*{
  margin: 0;
  /* width: fit-content; */
  padding: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;

}
nav{
  display: flex;
  width: 65%;
  /* align-items: center; */
  margin: 0 auto;
  margin-bottom: 12px;
  padding: .5rem;
  justify-content:space-evenly;
  background: rgb(196, 6, 126);
}
nav a{
  text-decoration: none;
  color:  white;
  font-size: 1.2rem;
  font-weight: 300;
  
}
nav img{
  width: 40px;
  height: 40px;
}

footer{
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(196, 6, 126);
  text-align: center;
  width: 100%;
  height: 40px;
  color: white;
}


</style>
