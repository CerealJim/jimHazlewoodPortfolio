<template>
  <section class="about" id="about">
    <div class="wrapper">
      <div class="introContainer">
        <div class="introText">
          <p class="helloText">Hello! I'm Jim</p>
          <p>
            I'm a front-end web developer with a passion for creating engaging,
            responsive websites that provide an excellent user experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About-me",
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
