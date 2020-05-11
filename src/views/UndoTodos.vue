<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5 col-sm-10 col-lg-6">
        <ul class="list-group">
          <li
            class="d-flex align-items-center list-group-item"
            v-for="(todo, index) in todos"
            :key="index"
          >
            <button class="btn border-0 flex-grow-1 text-left shadow-none">
              <span>{{ todo.description }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DoneTodos",
  created() {
    this.todos = JSON.parse(localStorage.getItem("todoItems") || "[]");
    this.todos = this.todos.filter(todo => todo.completed == false);
  },
  data() {
    return {
      todos: []
    };
  }
};
</script>

<style lang="scss"></style>
