<script >
  export default {
    data(){
      return {
        goals: ['asd','asd2','asd3']
      }
    }
  }
</script>

<template>
  <ul>
      <li v-for="goal in goals" :key="goal">
<!--        doing this vbind will be available where u pass data to slot-->
        <slot :item="goal" another-prop="ccccccc"></slot>
      </li>

  </ul>
</template>

<style scoped>

</style>