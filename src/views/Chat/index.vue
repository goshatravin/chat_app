<template>
    <div class="chat">
        {{userName}}
        {{message}}
        <moduleChat/>
    </div>
</template>

<script>
import io from 'socket.io-client'
import moduleChat from './components/chat'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            socketIo: io('localhost:3000'),
            message: []
        }
    },
    components: {
        moduleChat
    },
    computed: {
        ...mapGetters([
            'userName'
        ])
    },
    mounted: function () {
        this.check()
        this.enterToChat()
        this.socketIo.on('CONNECT', (data) => {
            this.message.push(data)
        })
    },
    methods: {
        check () {
            if (!this.userName) {
                this.$router.push('/')
            }
        },
        enterToChat () {
            this.socketIo.emit('ENTER_TO_CHAT', {
                userName: this.userName
            })
        }
    }
}
</script>

<style>

</style>
