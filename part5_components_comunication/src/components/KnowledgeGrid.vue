<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
    <!--      @select-topic="$emit('select-topic', $event)"-->

  </ul>
</template>

<script>
export default {
  emits: ['select-topic'],
  // can only use in parents not neighbor, and need to be in higher level
  inject: ['topics'],
};
</script>