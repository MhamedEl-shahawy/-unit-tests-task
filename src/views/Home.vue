<template>
 <div>
    <todo-list list-name="My to-dos" />
 </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  name: "Home",
  components: {
    TodoList
  },
};
</script>

<style lang="scss">
</style>
