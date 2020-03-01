<template>
    <div>
        <swipe :imgs="imgs"></swipe>
    </div>
</template>

<script>
    import Swipe from './../components/Swipe'
    export default {
        data(){
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ]
            }
        },
        components:{
            Swipe
        }
    }
</script>

<style lang="scss" scoped>

</style>