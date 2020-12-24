<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/state">State</router-link> |
      <router-link to="/county">County</router-link> |
      <router-link to="/cemetery">Cemetery</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
