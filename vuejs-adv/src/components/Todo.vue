<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: null
    }
  },
  methods: {
    addTodo() {
      console.log("add!");
      this.todos.push({
        title: this.newTodo,
        done: false
      });
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || []
  },
  watch: {
    todos: {
      handler() {
        console.log("watch");
        localStorage.setItem("todos", JSON.stringify(this.todos))
      },
      deep: true
    }
  }
};
</script>

<template>
  <div class="input-group mb-3 mt-5">
    <input v-model="newTodo" id="input" type="text" class="form-control p-2 rounded" placeholder="Your task goes here">
    <button @click="addTodo" id="addButton" class="btn btn-primary" type="button">Add</button>
  </div>
  <!-- Your code goes here -->
  <div v-for="todo in todos">
    <div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
      <input v-model="todo.done" type="checkbox" class="d-flex form-check-input me-1" />
      <div>{{todo.title}}</div>
    </div>
  </div>
</template>
