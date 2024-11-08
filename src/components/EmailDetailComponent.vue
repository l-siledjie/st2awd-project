<template>
    <div v-if="email">
      <h2>{{ email.subject }}</h2>
      <p><strong>From:</strong> {{ email.sender }}</p>
      <p><strong>Content:</strong></p>
      <p>{{ email.content }}</p>
    </div>
    <div v-else>
      <p>Please select an email to view the details.</p>
    </div>
</template>
  
<script>
  export default {
    name: 'EmailDetailComponent',
    props: ['email']
  };
</script>
  
<style scoped>
  div {
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 10px;
  }
</style>