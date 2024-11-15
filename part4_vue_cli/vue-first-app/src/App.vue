<template>
  <section>
    <header><h2> My Friends</h2></header>
    <ul>
<!--       parent child comunication-->
<!--      u cannot change this properties in component is-->
<!--      a unidirectional data flow-->
<!--      u can set prop isFavorite and create a data isFriendFavorite = this.isFavorite;-->
      <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-address="friend.email"
          :is-favorite="friend.isFavorite"
          @toggle-favorite="toggleFavoriteStatus"
      > </friend-contact>
<!--      <friend-contact-->
<!--          name="name2"-->
<!--          phone-number="phone2"-->
<!--          email-address="email2@gmail.com"-->
<!--      > </friend-contact>-->
    </ul>
  </section>
</template>

<script>
// const app = {
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lopez',
          phone: '0123123123',
          email: 'manuel@asdasdl.com',
          isFavorite: false,
        },
        {
          id: 'manuel332',
          name: 'Manuel2 Lope3333z',
          phone: '33012323123123',
          email: 'manuel33@asdasdl.com',
          isFavorite: true,
        }
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId){
      // when u change the property here, will update de component too
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>