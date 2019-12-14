<template>
    <div class="chat">
        {{userName}}
        <moduleChat/>
    </div>
</template>

<script>
import moduleChat from './components/chat'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {

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
    },
    methods: {
        check () {
            if (!this.userName) {
                this.$router.push('/')
            }
        }
    }
}
</script>

<style>

</style>
