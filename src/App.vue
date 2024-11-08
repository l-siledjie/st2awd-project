<template>
  <base-layout>
    <router-view /> <!-- Render current route inside the layout -->
  </base-layout>
</template>

<script>
  import BaseLayout from './components/BaseLayout.vue';

  export default {
    name: 'App',
    components: {
      BaseLayout,
    },
  };
</script>
