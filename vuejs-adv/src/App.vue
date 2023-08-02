<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Todo from './components/Todo.vue'

export default {
  data() {
    return {
      currentPage: 'hello'
    }
  },
  components: {HelloWorld, Navbar, Todo},
  methods: {
    changePage(page) {
      this.currentPage = page
    } 
  }
}
</script>

<template>
  <Navbar :changePage='changePage' />
  <div class="main">
    <HelloWorld v-if="currentPage === 'hello'" msg="Hi batch #1298" />
    <Todo v-else />
  </div>
</template>

<style scoped>
  .main {
    margin-top: 64px;
    padding: 2rem;
  }
</style>
