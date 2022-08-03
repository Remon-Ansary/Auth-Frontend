<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="UserEmail" v-model="useremail" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
import AuthService from "@/services/AuthService.js"

export default {
  data() {
    return {
      useremail: "",
      password: "",
      msg: "",
    }
  },
  methods: {
    async login() {
      try {
        const credentials = {
          useremail: this.useremail,
          password: this.password,
        }
        // console.log(credentials)
        const response = await AuthService.login(credentials)
        // console.log(response)
        this.msg = response.msg
        const token = response.token
        const user = response.user

        this.$store.dispatch("login", { token, user })
        this.$router.push("/")
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
