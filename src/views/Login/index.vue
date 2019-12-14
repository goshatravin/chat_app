<template>
    <div class="login">
        <div class="login__form">
            <p>Представтесь</p>
            <input type="text" v-model="userName">
            <input type="submit" @click="goToTheChat">
            <p v-if="errors">{{errors}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data () {
        return {
            userName: '',
            errors: ''
        }
    },
    methods: {
        goToTheChat () {
            if (!this.userName || this.userName.length < 3) {
                this.errors = 'Пожалуйста... укажите коректное имя длиной от 3 символов'
            } else {
                axios({
                    method: 'post',
                    url: '/',
                    data: {
                        userName: this.userName
                    }
                })
                    .then(result => {
                        console.debug('ответ на вход', result)
                        this.$store.dispatch('saveUserName', this.userName)
                        this.$router.push('/chat')
                    })
                    .catch(error => {
                        console.error('ответ на вход', error)
                    })
            }
        }
    }

}
</script>
