<template>
  <div class="relative w-[375px] h-[810px] bg-primary rounded-[25px] overflow-hidden shadow-[0_0_20px] shadow-[rgba(0,0,0,0.2)]">
    <!-- Top menu -->
    <Navbar class="absolute top-[0] z-[10]" />

    <!-- Content -->
    <slot />

    <!-- Circles -->
    <div
      class="absolute top-[-70px] right-[-70px] w-[250px] aspect-square bg-primary-light rounded-full z-[5]"
    />
    <div
      class="absolute top-[200px] left-[-5px] w-[25px] aspect-square bg-primary-light rounded-full z-[5]"
    />
    <div
      class="absolute top-[220px] left-[50px] w-[60px] aspect-square bg-primary-light rounded-full z-[5]"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped lang="scss"></style>
