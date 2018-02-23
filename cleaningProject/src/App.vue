<template>
  <v-app>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/styles";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
