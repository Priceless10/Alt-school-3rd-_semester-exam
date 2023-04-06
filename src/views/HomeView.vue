<template>
  <div >
      <div class="home-page">
          <p>Repo</p>

      <RouterLink to="/repo" class="btn btn-secondary w-25 home-page-btn">Get Started</RouterLink>
      </div>
      
      
  </div>
  
</template>
<style scoped>
.home-page{
  width:fit-content;
}
.home-page h1{
  font-size: 3rem;
}
.home-page h3{
  font-size: 1.3rem;
  text-align: center;
  margin-top: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
.home-page p{
  margin-top: 150px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 70px;
  
}
.home-page-btn{
  margin-top: 130px;

  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;


  background-color: #99eeb1;
  border: none;
  border-radius: 6px;
  padding: 12px 10px;
  color: black;


}
</style>