<template>
  <header>
    <img :src="picture" alt="SOW Hassane" />
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    computed: {
      picture() {
        return "https://avatars2.githubusercontent.com/u/21036470?v=4";
      }
    }
  }
</script>

<style scoped>
  header {
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid silver;
  }
  img {
    width: 60px;
    border-radius: 50%;
    margin: auto;
  }
</style>