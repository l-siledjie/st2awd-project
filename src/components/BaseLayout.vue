<template>
    <div>
      <base-header/>
      <slot/> <!-- slot for children to be rendered between header and footer -->
      <base-footer/>
    </div>
</template>
  
<script>
    import BaseHeader from './BaseHeader.vue'
    import BaseFooter from './BaseFooter.vue'

    export default {
        name: 'BaseLayout',
        components: {
        BaseHeader,
        BaseFooter
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    div {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    base-header, base-footer {
        font-family: 'Roboto', sans-serif;
    }
</style>
  