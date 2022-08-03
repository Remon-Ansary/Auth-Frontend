<template>
  <div>
    <!-- <h1>{{ useremail }}</h1>
    <h1>{{ userRole }}</h1>
    <input type="button" value="Logout" @click="logout" /> -->
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      useremail: "",
      userRole: "",
    }
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login")
    } else {
      this.userRole = this.$store.getters.getUser.role

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
