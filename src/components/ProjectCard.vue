<template>
  <div
    class="project"
    data-aos="fade-up"
    :class="{ discontinued: project.discontinued }"
  >
    <div v-if="project.discontinued" class="discontinued-text-box">
      <p>Board Game Atlas API Discontinued and app is currently down</p>
    </div>
    <div class="projectContent">
      <div class="projectImg">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div class="projectInfo">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div>
          <ul class="devTools">
            <li v-for="tech in project.technologies" :key="tech.name">
              <i :class="tech.icon"></i>
              <p class="iconName">{{ tech.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="portfolioLinks">
      <a :href="project.liveSite" target="_blank">Live Site</a>
      <a :href="project.githubCode" target="_blank">GitHub Code</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "@/types/interfaces";

export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
</style>
