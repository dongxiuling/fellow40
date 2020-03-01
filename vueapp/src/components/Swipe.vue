<template>
    <div>
        <!-- <ul class="swipe-box"> -->
        <transition-group tag="ul" name="fade" class="swipe-box">
            <li class="swipe-list" 
                v-for="(img,index) in imgs" 
                :key="index"
                v-show="index == iNow"
            >
            <!-- v-show="index == iNow" 索引==iNow的元素显示 其他隐藏 -->
                <img :src="img" alt="">
            </li>
        </transition-group>
        <!-- </ul> -->
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
                iNow:0//记录当前显示的索引
            }
        },
        props:["imgs"],
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
    .swipe-box{
        height:5rem;
        position: relative;
        .swipe-list{
            position: absolute;
            left:0px;
            top:0px;
            width:100%;
            height: 5rem;
            img{
                width:100%;
                height:5rem;
            }
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
    .fade-enter{
        transform: translate(-100%);
    }
    .fade-enter-active{
        transition: transform 1s linear;
    }
    .fade-enter-to{
        transform: translate(0%);
    }
    .fade-leave{
        transform: translate(0);
    }
    .fade-leave-active{
        transition: transform 1s linear;
    }
    .fade-leave-to{
        transform: translate(100%);
    }
    
    
</style>