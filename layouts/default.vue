<template>
  <div>
    <app-header/>
    <main>
      <nuxt/>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader'
  import AppFooter from "~/components/AppFooter"
  export default {
    components: { AppHeader, AppFooter }
  }
</script>

<style>
* {
  z-index: 0;
}
  body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
  }
  main {
    margin: 32px auto;
    padding: 0 24px;
  }
  a {
    color: deepskyblue;
    text-decoration: none;
  }
  .break {
        padding: 0;
        margin: 30px 0;
        display: block;
        border-bottom: 1px solid silver;
    }
</style>
