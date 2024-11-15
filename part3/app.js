const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
      message: ""
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx,1);
    },
    setText(){
      // its a vanilla javascript html object
      this.message = this.$refs.userText.value;
    }
  },
  beforeCreate() {
    // here there is nothing on the screen yet
    // it only will show the screen in the mounted() method
    console.log('beforeCreate');
  }
});

const appComponent = Vue.createApp({

  data() {
    return {
      friends: [

      ]
    }
  },


  });

// always use - and multiple words to avoid be the same tag as html elements
appComponent.component('friend-contact', {
  template: `
   <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails()">Show Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible : false,
      friend:  {
        id:'manuel',
        name:'Manuel Lopez',
        phone: '0123123123',
        email: 'manuel@asdasdl.com',
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },

})
app.mount('#user-goals');
appComponent.mount('#app2');
