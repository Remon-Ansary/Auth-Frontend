<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div class="container">
        <a href="/" class="navbar-brand">
          {{ useremail }}
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="" class="nav-link active"> Home </a>
            </li>

            <li class="nav-item">
              <a href="" class="nav-link active"> {{ userRole }} </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link active">
                <input type="button" value="Logout" @click="logout" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <div class="container">
        <span v-if="userRole == 'admin'">
          <h3>All registered users list</h3>
        </span>
        <div v-for="singleUser in userData" :key="singleUser.id">
          <div class="usercard">{{ singleUser.useremail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      useremail: "",
      userRole: "",
      userData: "",
    }
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login")
    } else {
      this.userRole = this.$store.getters.getUser.role
      if (this.userRole == "admin") {
        axios
          .get(process.env.VUE_APP_ROOT_API + "/allusers")
          .then((response) => {
            console.log(response.data)
            this.userData = response.data
          })
      }

      this.useremail = this.$store.getters.getUser.useremail
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$router.push("/login")
    },
  },
}
</script>
<style scoped>
.usercard {
  display: flex;
  justify-content: center;
  border: 1px solid #0e0606;
}
</style>
