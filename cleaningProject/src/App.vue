<template>
  <v-app dark>
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

<style lang="less">
  @import "assets/styles.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @baseText;
  /*margin-top: 60px;*/
}
</style>
