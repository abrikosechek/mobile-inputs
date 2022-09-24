<template>
  <div class="flex flex-col gap-[10px] w-full">
    <div class="text-lg font-bold">{{ title }}</div>
    <div
      class="flex items-center gap-[5px] w-full py-[5px] border-b-[1px] border-light-grey"
    >
      <input
        ref="inputPopup"
        class="flex-[1_1_auto] border-[0] bg-transparent p-[0] m-[0] text-md text-light-grey font-semibold caret-alt_color outline-0 focus:text-black"
        :placeholder="placeholder"
      />
      <Icon
        v-if="password"
        class="w-[16px] fill-light-grey cursor-pointer hover:fill-black"
        :name="'eye'"
        @click="changeFormIsShown(!showContent)"
      />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
  props: {
    title: {
      type: String,
      default: "Input",
    },
    placeholder: {
      type: String,
      default: "Type your text...",
    },
    password: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showContent: this.password,
    };
  },
  methods: {
    changeFormIsShown(value) {
      this.showContent = value;

      if (value == false) {
        this.$refs.inputPopup.setAttribute("type", "password");
      } else if (value == true) {
        this.$refs.inputPopup.setAttribute("type", "text");
      } else return;
    },
  },
  mounted() {
    this.showContent == this.password;

    if (this.password == true) {
      this.changeFormIsShown(false);
    } else {
      this.changeFormIsShown(true);
    }
  },
};
</script>

<style scoped lang="scss"></style>
