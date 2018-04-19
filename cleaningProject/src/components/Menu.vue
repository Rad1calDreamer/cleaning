<template>
  <div>
    <div class="main-menu">
      <a href="#/wipers">Дворники</a>
      <a href="">Адреса</a>
      <a href="#/management-company">УК</a>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="less">
  @import "../assets/partials/variables";

  .main-menu {
    display: flex;
    justify-content: flex-start;
    a {
      color: @baseText;
      font-size: 18px;
      margin-right: 8px;
      &:hover{
        color: @border-color-input;
      }
    }
  }

</style>
