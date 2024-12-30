<template>
  <header>
    <div class="wrapper headerContent">
      <nav class="headerNav">
        <a href="/" class="logoLink">
          <div class="logoContainer">
            <img src="@/assets/jhLogoCrop.jpg" alt="JH" />
          </div>
        </a>
        <button
          class="hamburger"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
          aria-label="Open Mobile Navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <ul class="navList" :class="{ active: isMenuOpen }">
          <li>
            <a href="#portfolio" class="navLink" @click="closeMenu">Projects</a>
          </li>
          <li>
            <a href="#contact" class="navLink" @click="closeMenu">Let's Talk</a>
          </li>
        </ul>
      </nav>
      <div class="introContainer">
        <div class="modeToggleCheck">
          <input
            type="checkbox"
            id="toggle"
            class="toggleCheckbox"
            :checked="isDarkMode"
            @change="$emit('toggle-theme')"
          />
          <label for="toggle" class="toggleLabel" aria-label="Toggle dark mode">
            <span class="toggleLabelBackground"></span>
          </label>
        </div>
        <IntroSection />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IntroSection from "./IntroSection.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    IntroSection,
  },
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggle-theme"],
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
