import { createApp } from 'vue';

// u can use any name instead of App, but for convetion u use the same name as the file
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App)

app.component('friend-contact', FriendContact)

app.mount('#app');