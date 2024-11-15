<script >
 export default {
   mounted() {
     console.log('asdasd ',this.$slots.base);
   }
 }
</script>

<template>
<!--  only show slot div if provided by parent, or remove and use default-->
  <div v-if="$slots.base">
    <slot name="base">
      <h1> default content that will be cleared if some content is provided</h1>
    </slot>
  </div>
</template>

<style scoped>
  div {
    background-color: #779cf8;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 2rem auto;
    max-width: 40rem;
    padding: 1rem;
    border-radius: 12px;
  }
</style>