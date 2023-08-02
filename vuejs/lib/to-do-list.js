import { createApp } from "vue";

createApp({
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
}).mount('#todosContainer');
