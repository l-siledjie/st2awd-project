<template>
    <div>
      <h2>Your Emails</h2>
      <ul>
        <li v-for="email in emails" :key="email.id" @click="selectEmail(email)">
          {{ email.subject }} - {{ email.sender }}
        </li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    name: 'EmailListComponent',
    props: ['emails'],
    methods: {
      selectEmail(email) {
        this.$emit('email-selected', email);
      }
    }
  };
</script>
  
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  li:hover {
    background-color: #f0f0f0;
  }
</style>