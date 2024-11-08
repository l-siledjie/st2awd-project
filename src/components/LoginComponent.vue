<template>
    <div>
      <button class="base-button" @click="signInWithGoogle" style="margin-right: 15px;">Login with Google</button>
      <button class="base-button" @click="signInWithMicrosoft" style="margin-right: 15px;">Login with Microsoft</button>
      <button class="logout-button" @click="signOut" v-if="isAuthenticated" style="margin-right: 15px;">Logout</button>
    </div>
</template>

<script>
    import { msalInstance } from '../lib/microsoftGraph';

    export default {
    name: 'LoginComponent',
    methods: {
        async signInWithGoogle() {
        try {
            await this.$gAuth.signIn();
            const profile = this.$gAuth.getUserProfile();
            console.log('Google User:', profile);
        } catch (error) {
            console.error('Google Sign-In error:', error);
        }
        },

        async signInWithMicrosoft() {
        const loginRequest = {
            scopes: ['user.read', 'mail.read']
        };
        try {
            const response = await msalInstance.loginPopup(loginRequest);
            console.log('Microsoft User:', response.account);
        } catch (error) {
            console.error('Microsoft Sign-In error:', error);
        }
        },

        async signOut() {
            if (this.authProvider === 'google') {
                try {
                    await this.$gAuth.signOut();
                    console.log('Google User signed out');
                } catch (error) {
                    console.error('Google Sign-Out error:', error);
                }
            } else if (this.authProvider === 'microsoft') {
                try {
                    msalInstance.logoutPopup();
                    console.log('Microsoft User signed out');
                } catch (error) {
                    console.error('Microsoft Sign-Out error:', error);
                }
            }
            this.isAuthenticated = false;
            this.authProvider = null;
            }
    }
    };
</script>

<style>
    .base-button {
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 10px;

        background-color: #4285F4;
        color: #fff;
    }

    .base-button:hover  {
        border: 10px;
        background-color: #fff;
        color: #4285F4;
     }

    .logout-button  {
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 10px;
    }
</style>