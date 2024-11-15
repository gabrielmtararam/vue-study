

<template>
  <li>
    <h2>{{name}} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails()">Show Details</button>
    <button @click="toggleFavorite()">Toggle favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{phoneNumber}}</li>
      <li><strong>Email:</strong> {{emailAddress}}</li>
    </ul>
  </li>
</template>
<script >
export default {
  // write in cammel case and will turn into html kebab case, but will be available as
  // javascipt object this.phoneNumber too
  // props: [
  //     'name',
  //     'phoneNumber',
  //     'emailAddress',
  //     'isFavorite',
  // ],
  props: {
    name : {
      type: String,
      required: true,
    },
    id : {
      type: String,
      required: true,
    },
    phoneNumber : {
      type: String,
      required: true,
    },
    emailAddress : {
      type: String,
      required: true,
    },
    isFavorite : {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        return value === true || value === false;
      }
    },
  },
  // emits make it clear to other developers know what events component emits
  emits : ['toggle-favorite'],
  //     {
  //   'toggle-favorite': function (id){
  //     if (id){
  //       return true;
  //     }else {
  //       console.warn('Id is missing');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
      // friend: {
      //   id: 'manuel',
      //   name: 'Manuel Lopez',
      //   phone: '0123123123',
      //   email: 'manuel@asdasdl.com',
      // }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
      // this.$emit('toggle-favorite',);
    },
  },
}
</script>
<style scoped>

</style>