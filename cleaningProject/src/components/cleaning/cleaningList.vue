<template>
  <section class="l-cleaning-list-container">
    <slot name="cleaning-list-header"></slot>
    <slot name="cleaning-list-body" @removeItem="this.$emit('removeItem')"></slot>
  </section>
</template>

<script>
  export default {

  }
</script>
