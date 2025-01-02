<script>


import TheResources from "@/components/TheResources.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";


export default {
  components: {
    TheResources: TheResources,
    TheHeader: TheHeader,
  }


}

</script>

<template>
  <the-header title="Remember Me"></the-header>
  <the-resources  />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>