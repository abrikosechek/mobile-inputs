<template>
  <div
    id="app"
    class="relative flex items-center justify-center w-[100vw] h-[100vh] bg-[#FFCB78] overflow-hidden"
  >
    <!-- Layout -->
    <div class="flex gap-[120px] z-[10]">
      <Screen class="mb-[60px] flex flex-col justify-end">
        <p class="container mb-[80px] text-xl font-bold text-white z-[10]">Login</p>

        <div class="relative w-full h-[550px] py-[40px] bg-white rounded-[25px] z-[20]">
          <div class="container h-full w-full overflow-auto">
            <!-- Inputs -->
            <div class="flex flex-col gap-[30px]">
              <Input :title="'Email'" :placeholder="'Enter your email'" />

              <Input
                :title="'Password'"
                :placeholder="'Enter your password'"
                :password="true"
              />
            </div>

            <div class="flex items-center justify-between mt-[20px]">
              <Check :text="'Stay logged in?'" />

              <p class="text-sm text-alt_color font-medium cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <ButtonLg class="mt-[35px]" :text="'Login'" />

            <p class="mx-[5px] mt-[20px] text-center text-sm font-medium">
              Don`t have an account yet? Register
              <span class="text-primary font-semibold">here</span>
            </p>

            <!-- Splitter -->
            <div class="flex items-center justify-between gap-[15px] my-[30px]">
              <hr class="flex-[1_0_auto] bg-light-grey border-0 h-[1px]" />

              <p class="text-[13px] leading-[16.25px] text-alt_color font-medium">
                Or login with
              </p>

              <hr class="flex-[1_0_auto] bg-light-grey border-0 h-[1px]" />
            </div>

            <div class="flex justify-center gap-[20px]">
              <button
                class="w-[40px] h-[40px] bg-white border-0 rounded-full shadow-[#E2E2E2] shadow-[0_0_10px]"
              >
                <p class="text-lg font-semibold">S</p>
              </button>
              <button
                class="w-[40px] h-[40px] bg-white border-0 rounded-full shadow-[#E2E2E2] shadow-[0_0_10px]"
              >
                <p class="text-lg font-semibold">M</p>
              </button>
            </div>
          </div>
        </div>
      </Screen>

      <Screen class="mt-[60px] flex flex-col justify-end">
        <p class="container mb-[80px] text-xl font-bold text-white z-[10]">Register</p>

        <div class="relative w-full h-[550px] py-[40px] bg-white rounded-[25px] z-[20]">
          <div class="container h-full w-full overflow-auto">
            <!-- Inputs -->
            <div class="flex flex-col gap-[30px]">
              <Input :title="'Name'" :placeholder="'Your Name, e.g : John Doe'" />

              <Input :title="'Email'" :placeholder="'Enter your email'" />
              
              <Input :title="'Phone Number'" :placeholder="'Your phone number, e.g : +01 112 xxx xxx'" />

              <Input
                :title="'Password'"
                :placeholder="'Enter your password'"
                :password="true"
              />
              
              <Input
                :title="'Confirm Password'"
                :placeholder="'Re-type your password'"
                :password="true"
              />
            </div>

            <div class="flex items-center justify-between mt-[20px]">
              <Check :text="'I confirm Privacy Policy and Terms of Use'" />
            </div>

            <ButtonLg class="mt-[35px]" :text="'Register'" />

            <p class="mx-[5px] mt-[20px] text-center text-sm font-medium">
              Already have account? Login
              <span class="text-primary font-semibold">here</span>
            </p>

            <!-- Splitter -->
            <div class="flex items-center justify-between gap-[15px] my-[30px]">
              <hr class="flex-[1_0_auto] bg-light-grey border-0 h-[1px]" />

              <p class="text-[13px] leading-[16.25px] text-alt_color font-medium">
                Or login with
              </p>

              <hr class="flex-[1_0_auto] bg-light-grey border-0 h-[1px]" />
            </div>

            <div class="flex justify-center gap-[20px]">
              <button
                class="w-[40px] h-[40px] bg-white border-0 rounded-full shadow-[#E2E2E2] shadow-[0_0_10px]"
              >
                <p class="text-lg font-semibold">S</p>
              </button>
              <button
                class="w-[40px] h-[40px] bg-white border-0 rounded-full shadow-[#E2E2E2] shadow-[0_0_10px]"
              >
                <p class="text-lg font-semibold">M</p>
              </button>
            </div>
          </div>
        </div>
      </Screen>
    </div>

    <!-- Background circles -->
    <div
      class="absolute bottom-[-265px] left-[-265px] w-[530px] aspect-square bg-primary opacity-20 rounded-full"
    />
    <div
      class="absolute top-[-250px] right-[-250px] w-[500px] aspect-square bg-primary opacity-20 rounded-full"
    />
    <div
      class="absolute bottom-[270px] right-[380px] w-[280px] aspect-square bg-inherit border-[3px] border-solid border-primary opacity-50 rounded-full"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Screen from "@/components/Screen.vue";
import Input from "@/components/Input.vue";
import Check from "@/components/check.vue";
import ButtonLg from "@/components/button/lg.vue";

export default {
  components: { Navbar, Screen, Input, Check, ButtonLg },
};
</script>

<style lang="scss"></style>
