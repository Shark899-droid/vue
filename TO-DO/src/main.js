import { createApp } from 'vue'
import App from './App.vue'
import Add from "./components/Add/Add.vue"
import Header from "./components/Main/Header.vue"
import Section from "./components/Main/Section.vue"

const app = createApp(App)
    
app.component("App", App)
app.component("header-main", Header)
app.component("section-main", Section)
app.component("add", Add);
    
app.mount('#app')
