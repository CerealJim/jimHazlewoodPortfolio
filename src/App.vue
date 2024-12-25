<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <Header @toggle-theme="toggleDarkMode" :isDarkMode="isDarkMode" />
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
