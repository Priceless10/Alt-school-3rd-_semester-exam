<template>
  <div class="repo-page">
      <h1>Welcome to the Jessica Dung's Repository </h1>
      <div v-if="isLoading">
          <h1>Loading...</h1>
          <!-- <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>
          </div> -->
      </div>
      <div v-else class="ret-items ">
          <div v-for="repo in paginatedArray" :key="repo.id">
              <div class="card card2 d-flex justify-content-center mx-auto pt-5 mt-5 bg-dark">
                  <div class="card-body cardbody2">
                    <div class="repo-name">
                        <h2 class="card-title text-white">Repo Name:</h2>
                        <p class="card-text text-light">{{ repo.name }}</p>
                    </div>
                    <div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item mt-5"><span>Visibility: </span>{{ repo.visibility }}</li>
                          <li class="list-group-item mt-2">Copy Url: {{ repo.clone_url }}</li>
                          <li class="list-group-item mt-2">Date Created: {{ repo.created_at }}</li>
                          <li class="list-group-item mt-2">Last Commit: {{ repo.updated_at }}</li>

                      </ul>
                    </div>

                      <RouterLink to="/{{repo.}}" href="#" class="btn btn-primary mt-4">Visit Repo</RouterLink>
                  </div>
              </div>

          </div>

          <div aria-label="Page navigation example"  class="mx-auto">
              <div class="pagination mt-4">
                  <p class="page-item"><span @click="prevPage" :disabled="currPage == 1">prev</span></p>
                  <p class="text-dark">{{ currPage }} of {{ pages }}</p>

                  <p class="page-item"><span @click="nextPage" :disabled="currPage == pages">next</span></p>
              </div>
          </div>
      </div>

  </div>
</template>


<style>
.repo-page {
  width: 100%;
}

.repo-page h1 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}
.repo-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2% 0;
    font-size: 1rem;
}
.repo-name h2{
    font-size: 1rem;
}
.ret-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pagination {
  display: flex;
  gap: 10px;
  margin: 0 auto 20px;
}

.pagination span {
  padding: 1em;
  background-color: rgb(107, 5, 59);
  border: none;
  color: white;
  border-radius: 5px;
}

.card2{
  width: 100%;
  border: 1px solid rgb(80, 13, 24);
  margin: 2% auto;
  padding: .5rem 1rem;
  background-color: rgb(80, 13, 24);
  color: white;

}
</style>


<script>

export default {

  data() {
      return {
          repos: [],
          isLoading: true,
          pageSize: 3,
          currPage: 1

      }

  },
  computed: {
      pages: function () {
          return Math.ceil(this.repos.length / this.pageSize)

      },

      paginatedArray() {
          const start = (this.currPage - 1) * this.pageSize;
          const end = start + this.pageSize;
          return this.repos.slice(start, end)

      }
  },
  mounted() {
    console.log("hello")
      this.fetchRepo();
  },
  updated() {
      console.log(this.paginatedArray);
  },
  methods: {
     fetchRepo () {
        console.log("start")
          fetch('https://api.github.com/users/Priceless10/repos')
              .then((response) => response.json())
              .then((data) => {
                  this.repos = data
                  this.isLoading = false
                  console.log(data)
              })
      },
      prevPage(){
          this.currPage -- 
      },
      nextPage(){
          this.currPage ++
      }

  }

}
</script>