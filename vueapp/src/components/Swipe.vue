<template>
    <div>
        <ul class="swipe-box">
            <li class="swipe-list" 
                v-for="(img,index) in imgs" 
                :key="index"
                v-show="index == iNow"
            >
            <!-- v-show="index == iNow" 索引==iNow的元素显示 其他隐藏 -->
                <img :src="img" alt="">
            </li>
        </ul>
        <ul class="btns-box">
            <li 
                :class="{btns:true,active:iNow == index}" 
                v-for="(img,index) in imgs"
                :key="index"
            ></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                iNow:0//记录当前显示的索引
            }
        },
        created(){
            setInterval(()=>{
                this.iNow++;
                if(this.iNow == this.imgs.length){
                    this.iNow = 0;
                }
            },2000)
        }

    }
</script>

<style lang="scss" scoped>
    .swipe-list{
        img{
            width:100%;
            height:5rem;
        }
    }
    .btns-box{
        display: flex;
        justify-content: center;
        .btns{
            width:0.2rem;
            height:0.2rem;
            background: #ccc;
            border-radius: 50%;
            margin:0.1rem;
        }
        .active{
            background: #000;
        }
    }
    
</style>