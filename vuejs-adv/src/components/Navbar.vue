<script>
  export default {
    props: ['changePage']
  }
</script>

<template>
  <div class="navbar">
    <a @click.prevent="changePage('hello')" href="#">Hello World!</a>
    <a @click.prevent="changePage('todo')" href="#">Todo list</a>
  </div>
</template>

<style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    gap: 24px;
    padding: 16px;
    box-shadow: 0 0 8px rgba(0,0,0,0.3);
  }
  .navbar a:before {
    content: '🤘';
  }
</style>