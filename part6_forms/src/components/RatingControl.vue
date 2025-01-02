<script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
      activeOption (){
        return this.modelValue ;
      }
    },
    methods: {
      activate(option){
        this.activeOption = option;
        this.$emit('update:modelValue', option);
      }
    }
  }
</script>

<template>
  <ul>
    <li :class="{active: activeOption==='Poor'}"><button type="button" @click="activate('Poor')">Poor</button></li>
    <li :class="{active: activeOption==='Average'}"><button type="button" @click="activate('Average')">Average</button></li>
    <li :class="{active: activeOption==='Great'}"><button type="button" @click="activate('Great')">Great</button></li>
  </ul>
</template>

<style scoped>
.active{
  border-color: green;
}
.active button{
  color: green;
  background-color: #a5faa7;
}
  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
  }
  li {
    margin: 0 1rem;
    border: 1px solid black;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
  button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>