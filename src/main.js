import {createApp} from 'vue';
import App from './App.vue';
import store from './store';

//import axios from 'axios';
//import VueAxios from 'vue-axios';

//axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

createApp(App)
  .use(store)
  //.use(VueAxios, axios)
  .mount('#app');
