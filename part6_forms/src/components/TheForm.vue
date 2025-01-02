<script>
// checkbox vmodel need to start with array
  import RatingControl from "@/components/RatingControl.vue";

export default {
  components: {RatingControl},
    data () {
      return {
        userName : "",
        userAge  : null,
        referrer : 'wom',
        interest : [],
        how : null,
        confirm : false,
        usernameValidity : 'pending',
      }
    },
    methods : {
      submitForm (){
        console.log('username ', this.userName);
        // console.log('userAge ', this.userAge);
        // console.log('referrer ', this.referrer);
        // console.log('interest ', this.interest);
        // console.log('how ', this.how);
        // console.log('confirm ', this.confirm);
        console.log("rating")
        console.log(this.rating)
        this.userName = "";
      },
      validateInput(){
        if (this.userName === '') {
          this.usernameValidity = 'invalid';
        }else{
          this.usernameValidity = 'valid';
        }
        console.log(this.usernameValidity);
      }
    }
  }
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control"  :class="{invalid : usernameValidity==='invalid'}" >
      <label for="user-name">Your Name</label>
<!--       blur is loose focus-->
      <input @blur="validateInput" id="user-name" name="user-name" type="text" v-model.trim="userName" />
      <p v-if="usernameValidity==='invalid'"> please enter a valid name</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
<!--      v modal convert to number if u use ref will get a string-->
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
<!--        need to set value-->
        <input id="interest-news" name="interest" value="News" type="checkbox" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" value="Tutorials"  type="checkbox" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" value="Nothing"  type="checkbox" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="Courses" v-model="how"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio"  value="Blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="Other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <form-control>
<!--      single element make it true or false and not include in an array-->
      <input id="interest-confirm" name="confirm"  type="checkbox" v-model="confirm" />
      <label for="interest-nothing">confirm</label>
    </form-control>
    <form-control>
<!--      its realy topll need this on the rating component-->
<!--      props: ['modelValue'],-->
<!--      emits: ['update:modelValue'],-->
<!--      this.$emit('update:modelValue', option);-->
      <rating-control v-model="rating"></rating-control>
    </form-control>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}


.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid label{
  color : red;

}

.form-control.invalid input{
  border-color : red;

}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>