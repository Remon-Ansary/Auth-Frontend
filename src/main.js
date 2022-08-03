const { createApp } = require("vue")
import App from "./App.vue"
import Axios from "axios"
import store from "./store/store"
import createRouter from "./router"
Axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.token}`
createApp(App).use(createRouter()).use(store).mount("#app")
