<template>
    <div>
      <h2>Add Email</h2>
      <form @submit.prevent="addEmail">
        <label for="subject">Subject:</label>
        <input type="text" v-model="newEmail.subject" id="subject" required />
  
        <label for="content">Content:</label>
        <textarea v-model="newEmail.content" id="content" required></textarea>
  
        <button type="submit">Add Email</button>
      </form>
    </div>
</template>

<script>
    export default {
    name: 'AddEmailComponent',
    data() {
        return {
            newEmail: {
                subject: '',
                content: ''
            }
        };
    },
    methods: {
        addEmail() {
        const email = {
            id: Date.now(),
            subject: this.newEmail.subject,
            content: this.newEmail.content,
            sender: 'You'
        };
        this.$emit('email-added', email);
        this.newEmail.subject = '';
        this.newEmail.content = '';
        }
    }
    };
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-top: 10px;
    }

    input, textarea {
        padding: 8px;
        font-size: 16px;
        margin-top: 5px;
    }

    button {
        margin-top: 15px;
        padding: 10px;
        font-size: 16px;
    }
</style>