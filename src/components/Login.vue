<template>
  <div>
    <!-- <h1>Login</h1>
    <input type="text" placeholder="UserEmail" v-model="useremail" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p> -->
    <body>
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-sm-center h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div class="text-center my-5">
                <img
                  src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                  alt="logo"
                  width="100"
                />
              </div>
              <div class="card shadow-lg">
                <div class="card-body p-5">
                  <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                  <form
                    method="POST"
                    class="needs-validation"
                    novalidate=""
                    autocomplete="off"
                  >
                    <div class="mb-3">
                      <label class="mb-2 text-muted" for="email"
                        >E-Mail Address</label
                      >
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        v-model="useremail"
                        required
                        autofocus
                      />
                      <div class="invalid-feedback">Email is invalid</div>
                    </div>

                    <div class="mb-3">
                      <div class="mb-2 w-100">
                        <label class="text-muted" for="password"
                          >Password</label
                        >
                      </div>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        v-model="password"
                        required
                      />
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          class="form-check-input"
                        />
                        <label for="remember" class="form-check-label"
                          >Remember Me</label
                        >
                      </div>
                      <input
                        type="button"
                        @click="login"
                        value="Login"
                        class="btn btn-primary ms-auto"
                      />
                    </div>
                  </form>
                </div>
                <div class="card-footer py-3 border-0">
                  <p v-if="msg">{{ msg }}</p>
                  <div class="text-center">
                    Don't have an account?
                    <router-link to="/signup"> Create One</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
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
