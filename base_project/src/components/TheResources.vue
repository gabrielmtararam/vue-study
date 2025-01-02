<script>

import StoredResources from "@/components/StoredResources.vue";
import AddResource from "@/components/AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab :'stored-resources',
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
  provide (){
    return {
        resources : this.storedResource,
        addResource : this.addResource,
        removeResource : this.removeResource
    }
  },
  methods: {
    setSelectedTab (tab) {
      this.selectedTab = tab;
    },
    addResource (title, description, url) {
        const newResource = {
          id : new Date().toISOString(),
          title: title,
          description: description,
          link: url
        }
        this.storedResource.unshift(newResource);
        this.selectedTab = 'stored-resources';
    },
    removeResource (id) {
      const resIndex = this.storedResource.findIndex(resource => resource.id === id);
      this.storedResource.splice(resIndex, 1);
    }
  }
}
</script>

<template>
  <base-card>
    <!--    listeners are aplied to root element in the component.-->

    <base-button @click="setSelectedTab('stored-resources')" :mode="selectedTab==='stored-resources' ? null : 'flat'">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="selectedTab==='add-resource' ? null : 'flat'">Add Resource</base-button>
    <keep-alive>
    <component :is="selectedTab"></component>
   </keep-alive>
  </base-card>
</template>

<style scoped>

</style>