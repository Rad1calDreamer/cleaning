
<template>
  <header class="l-cleaning-header">
    <div class="md-cleaning-header white--text">Дворник</div>
    <div class="md-cleaning-header white--text">Адрес</div>
    <div class="md-cleaning-header white--text">Дата начала</div>
    <div class="md-cleaning-header white--text">Дата окончания</div>
    <div class="md-cleaning-header white--text">Тип</div>
    <div class="md-cleaning-header white--text">Сумма</div>
    <div class="md-cleaning-header white--text">Действия</div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="less">
  @import "../../../assets/styles.less";
  .l-cleaning-header {
    display: none;
    width: 100%;
    @media (min-width: 601px) {
      margin: 25px 0 0;
      display: flex;
    }
    .md-cleaning-header {
      width: 100%;
      flex-basis: calc(100% / 7);
      background-color: @background-color;
      border: 1px solid @border-color-input;
      padding: 0 15px;
      display: flex;
      height: 45px;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      @media (min-width: 601px) {
        justify-content: flex-start;
      }
    }
  }
</style>
