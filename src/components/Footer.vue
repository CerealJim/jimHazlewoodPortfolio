<template>
  <footer>
    <div class="wrapper">
      <p>&copy; {{ currentYear }} Jim Hazlewood. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Footer-me",
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    return { currentYear };
  },
});
</script>
