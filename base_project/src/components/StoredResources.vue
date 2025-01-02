<script>

import ResourceComponent from "@/components/Resource.vue";

export default {
  components: {
    ResourceComponent: ResourceComponent,
  },
  inject: ["resources"],
  data() {
    return {
      storedResource: [
        {
          id: 'OfficialGuide',
          title: 'Official Guide',
          description: 'The Guideline Guide',
          link: 'https://www.vuejs.com',
        },
        {
          id: 'Google',
          title: 'Google',
          description: 'Google data',
          link: 'https://www.google.com',
        }
      ]
    }
  },
  methods: {
    deleteResource(resourceId) {
      console.log("here")
      this.storedResource = this.storedResource.filter(resource => resource.id !== resourceId);
      console.log("this.storedResource ", this.storedResource)

    }
  }
}
</script>

<template>
  <ul>
    <resource-component
        v-for="resource in resources"
        :key="resource.id"
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
        @delete-resource="deleteResource"
    >
    </resource-component>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>