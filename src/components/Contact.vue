<template>
  <section class="contact" id="contact">
    <div class="wrapper">
      <h2>Let's Connect</h2>
      <div class="contactMe">
        <div class="contactInfo">
          <p>Feel free to reach out through any of these platforms:</p>
          <div class="socialMedia">
            <ul>
              <li>
                <a href="https://github.com/YourGithub" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/YourLinkedIn" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:your.email@example.com">
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact-me",
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
