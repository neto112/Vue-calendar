import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAENGTtrb5hwONvJO0jTrQ0ykiOuywxTnI",
  authDomain: "vue-calendar-a77c8.firebaseapp.com",
  projectId: "vue-calendar-a77c8",
  storageBucket: "vue-calendar-a77c8.appspot.com",
  messagingSenderId: "794344245549",
  appId: "1:794344245549:web:041f185a7587aa196c6ba4"
});

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
