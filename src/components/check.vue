<template>
  <div class="flex items-center gap-[5px] cursor-pointer" @click="checked = !checked">
    <div
      class="flex items-center justify-center w-[15px] h-[15px] rounded-[2px]"
      :class="{ 'bg-[#EEEEEE]': !checked, 'bg-primary': checked }"
    >
      <Icon v-if="checked" class="fill-white w-[9px]" :name="'check'" />
    </div>
    <p class="text-sm text-alt_color font-medium">
      {{ text }}
    </p>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
  props: {
    text: {
      default: "Check",
      type: String,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style scoped lang="scss"></style>
