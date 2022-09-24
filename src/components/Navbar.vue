<template>
  <div class="container w-full flex items-center justify-between py-[5px]">
    <p class="text-sm font-normal text-white">13:32</p>
    <div class="flex items-center gap-[5px]">
      <Icon :name="'ethernet'" class="w-[14px] fill-white" />
      <Icon :name="'wifi'" class="w-[14px] fill-white" />
      <Icon :name="'battery'" class="w-[14px] fill-white" />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
};
</script>

<style scoped lang="scss"></style>
