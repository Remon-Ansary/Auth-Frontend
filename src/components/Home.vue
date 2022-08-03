<template>
  <div>
    <h1>{{ useremail }}</h1>
    <h1>{{ userRole }}</h1>
    <input type="button" value="Logout" @click="logout" />
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
      if (this.userRole == "admin") {
        this.$router.push("/admin")
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
