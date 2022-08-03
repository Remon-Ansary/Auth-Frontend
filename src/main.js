const { createApp } = require("vue")
import App from "./App.vue"
import store from "./store/store"
import createRouter from "./router"
createApp(App).use(createRouter()).use(store).mount("#app")
