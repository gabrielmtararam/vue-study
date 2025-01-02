<template>
  <base-div>
<!--    <template v-slot:base>-->
    <template #base>
      <active-element
          :topic-title="activeTopic && activeTopic.title"
          :text="activeTopic && activeTopic.fullText"
      ></active-element>
      <!--    <knowledge-base  @select-topic="activateTopic"></knowledge-base>-->
<!--      use default, for unamed default slot-->
<!--      <template v-slot:default></template>-->
      <knowledge-base></knowledge-base>
    </template>
  </base-div>
  <button @click="toggleComponents"> switch divs</button>
<!--  keep alive will keep the component data even if it changes-->
  <keep-alive>
    <component :is="currentComponent">

    </component>
  </keep-alive>
<!--  u can use this to send the element to a specific div-->
  <teleport to="body">
    <course-goals>
  <!--    u can use any name to slotProps, its the object where all  slot props will be available-->
<!--      # is the same as use v:slot -->
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <h3> {{slotProps['anotherProp']}}</h3>
        <button @click="toggleComponents"> component slot but call app method </button>
      </template>

    </course-goals>
  </teleport>
</template>

<script>
// import ActiveElement from "@/components/ActiveElement.vue";

// importing only localy the component will be available only by this vue file, not the childs or others
// app.component('active-element', ActiveElement);
export default {
  // components: {
  //   ActiveElement: ActiveElement,
  // },
  // for single object  can pass this way, if is not a complex object
  // components: {
  //   ActiveElement
  // },
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
              'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
              'Components are a core concept for building Vue UIs and apps',
          fullText:
              'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
      currentComponent: "comp-a"
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
    toggleComponents(){
      this.currentComponent = 'comp-b' === this.currentComponent ? 'comp-a' : 'comp-b';
    }
  },
  // avoid use, only use if need to passing through many levels, its bad to find where its being used
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.activateTopic
    }
  }

  // provide: {
  //   topics: [
  //     {
  //       id: 'basics',
  //       title: 'The Basics',
  //       description: 'Core Vue basics you have to know',
  //       fullText:
  //           'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
  //     },
  //     {
  //       id: 'components',
  //       title: 'Components',
  //       description:
  //           'Components are a core concept for building Vue UIs and apps',
  //       fullText:
  //           'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
  //     },
  //   ],
  // }
};
</script>
<!--//style afects all the files-->

<!--scoped restrict style to only affect this file-->
<!--<style> scoped-->
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>