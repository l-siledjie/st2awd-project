import { createApp } from 'vue'; // Correct import for Vue 3
import App from './App.vue';
import router from './router'; // Optional: If you are using Vue Router
// import store from './store';   // Optional: If you are using Vuex or Pinia
import GAuth from 'vue3-google-login';

const app = createApp(App);

// if (store) {
//   app.use(store);
// }

app.use(GAuth, {
  clientId: "7162206182-npqsjkc26aq8ttg6u9sag38nplavs2g6.apps.googleusercontent.com",
  scope: 'profile email',
  prompt: 'consent',
});

app.use(router);
app.mount('#app');
