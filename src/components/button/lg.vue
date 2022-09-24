<template>
  <button class="flex items-center justify-center w-full h-[50px] bg-primary border-0 rounded-[100px] hover:bg-primary-light">
    <p class="text-lg text-white font-semibold">{{ text }}</p>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      default: 'Click on me!',
      type: String,
    }
  }
}
</script>

<style scoped lang="scss">

</style>