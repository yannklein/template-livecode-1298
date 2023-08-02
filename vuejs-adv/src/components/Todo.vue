<script>
export default {
  data() {
    return {
      message:
        'If you see this message in your browswer, that means Vue is successfully mounted! 🙌',
      todos: [],
      newTodo: null,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push({ title: this.newTodo, done: false });
        this.newTodo = null;
      }
    },
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div id="todosContainer">
    <!-- {{message}} -->
    <input
      v-model="newTodo"
      type="text"
      class="form-control p-2 rounded"
      placeholder="Your task goes here"
    />
    <div class="d-grid mb-3">
      <button @click="addTodo" class="btn btn-primary" type="button">Add</button>
    </div>
    <div v-for="todo in todos" class="shadow-sm rounded px-4 py-3 mb-2 border d-flex justify-content-between" :key="todo" >
      <div class="d-flex">
        <input
          v-model="todo.done"
          class="d-flex form-check-input me-1"
          type="checkbox"
        />
        <div>{{ todo.title }}</div>
      </div>
    </div>
  </div>
</template>
