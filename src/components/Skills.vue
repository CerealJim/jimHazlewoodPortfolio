<template>
  <section class="experience" id="experience">
    <div class="wrapper" data-aos="fade-up">
      <h2>Skills</h2>
      <div class="iconContainer">
        <div v-for="skill in skills" :key="skill.name" class="icon">
          <p class="iconName">
            <i :class="skill.icon"></i>
            {{ skill.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Skill } from "@/types/interfaces";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Skills",
  setup() {
    const skills = ref<Skill[]>([
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "SASS", icon: "devicon-sass-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Nextjs", icon: "devicon-nextjs-plain" },
      { name: "Typescript", icon: "devicon-typescript-plain" },
      { name: "Nodejs", icon: "devicon-nodejs-plain" },
      { name: "Github", icon: "devicon-github-original" },
      { name: "Firebase", icon: "devicon-firebase-plain" },
      { name: "jQuery", icon: "devicon-jquery-plain" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
      { name: "Code Pen", icon: "devicon-codepen-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Responsive", icon: "fas fa-mobile-alt" },
      { name: "Accessibility", icon: "fas fa-universal-access" },
      { name: "11ty", icon: "devicon-eleventy-plain" },
    ]);

    return {
      skills,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
