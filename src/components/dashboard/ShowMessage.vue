<template>
    <div>
        <div class="continue-btn">
            <v-btn  class="mr-2 text-capitalize"  color="primary-purple" variant="flat">Continue<v-icon size="large" class="ml-1">mdi-chevron-right</v-icon></v-btn>
        </div>
        <div class="message-box d-flex align-center justify-center flex-col" :class="textColor">
                <p class="text-h6">{{message.message}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {

        }
    },
    computed: {
        textColor() {
            const colors = {
                success: 'text-success',
                error: 'text-red'
            }

            return colors[this.message.status]
        }
    }
}
</script>

<style scoped>
    .message-box {
        height: 500px;
    }
    .continue-btn {
    position: absolute;
    bottom: 20px;
    right: 15px;
}
</style>