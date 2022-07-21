<template>
  <friendMenuView/>
  <FriendFormView @Add_data="addFriend" />
  <FriendCardView v-for="list in listFriends" :key="list" :friend="list" />
</template>

<script>
import FriendMenuView from "./components/FriendMenu.vue";
import FriendFormView from "./components/FriendForm.vue";
import FriendCardView from './components/FriendCard.vue';
export default {
  components: { FriendMenuView, FriendFormView, FriendCardView},
  data() {
    return {
       listFriends:[],
    };
  },

  methods:{
    addFriend(data) {
      this.listFriends.push(data);
    }
  }
};
</script>

<style>

</style>
