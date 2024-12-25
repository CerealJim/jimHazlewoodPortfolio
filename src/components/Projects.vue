<template>
  <section class="portfolio" id="portfolio">
    <div class="wrapper">
      <h2>Projects</h2>
      <div class="projectContainer">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Project } from "@/types/interfaces";
import ProjectCard from "./ProjectCard.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  components: {
    ProjectCard,
  },
  setup() {
    const projects = ref<Project[]>([
      {
        title: "AI Trivia Generator",
        description:
          "Unlock the power of AI! This Nextjs app leverages the openai API to assist in generating questions on any topic the user selects.",
        image: "/assets/trivia-ai-desktop.jpg",
        liveSite: "https://ai-trivia-using-chatgpt.netlify.app",
        githubCode: "https://github.com/CerealJim/trivia-chatgpt-nextjs",
        technologies: [
          { name: "Nextjs", icon: "devicon-nextjs-plain" },
          { name: "Typescript", icon: "devicon-typescript-plain" },
          { name: "CSS3", icon: "devicon-css3-plain" },
        ],
      },
      // Add other projects here
    ]);

    return {
      projects,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
