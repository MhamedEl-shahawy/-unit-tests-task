<template>
 <div class="container">
   <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <li class="d-flex align-items-center list-group-item"  v-for="(todo, index) in todos">
            <button class="btn border-0 flex-grow-1 text-left shadow-none">
              >
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
  name: "Todos",
  created(){
    this.todos = JSON.parse(this.$localStorage.get("todoItems") || "[]");
  },
  data() {
    return {
      todos: []
    }
  }
};
</script>

<style lang="scss"></style>
