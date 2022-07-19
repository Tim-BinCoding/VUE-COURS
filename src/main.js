import { createApp } from 'vue'
import App from './App.vue'
import FriendMenu from './components/FriendMenu.vue';
import FriendForm from './components/FriendForm.vue';
import FriendCard from './components/FriendCard.vue';

const app = createApp(App);
app.component('friend-menu', FriendMenu);
app.component('friend-form', FriendForm);
app.component('friend-card', FriendCard);
app.mount('#app')
