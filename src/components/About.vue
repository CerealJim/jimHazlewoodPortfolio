<template>
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-roboto-slab font-bold text-gray-900">About</h2>
        <p class="mt-4 text-xl font-nunito text-gray-600">FrontEnd Developer</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
