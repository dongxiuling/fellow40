<template>
    <footer :style="{background:$store.state.color}">   
        <router-link v-for="(obj,index) in menu" 
            :key="index" 
            :to="obj.path"
            @click.native="$store.commit('change',obj)"
        >
            {{obj.title}}
        </router-link>
    </footer>
</template>

<script>
    export default {
        data(){
            return {
                menu:[
                    {
                        title:"电影",
                        path:"/movie",
                        color:'red'
                    },
                    {
                        title:"音乐",
                        path:"/music",
                        color:'yellow'
                    },
                    {
                        title:"图书",
                        path:"/book",
                        color:'green'
                    },
                    {
                        title:"图片",
                        path:"/photo",
                        color:'orange'
                    }
                ]
            }
        },
        // methods:{},
        // compouted:{

        // },
        // components:{

        // },
        // 每次刷新页面进来 state 会取到默认值
        created(){
            // 取到页面的路由的path 判断path和menu菜单中哪个obj对象是对应的 change(obj)
            // console.log(this.$route.path)
            this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path){
                    // 判断路径跟menu中哪个是匹配的 ，修改color title
                    this.$store.commit('change',obj);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    footer{
        height: 1rem;
        background: #f00;
        line-height: 1rem;
        position: fixed;
        bottom: 0px;
        width:100%;
        display: flex;
        a{
            flex:1;
            text-align: center;
            color:#000;
            font-size: 14px;
            cursor: pointer;
        }
        .router-link-active{
            color:#fff;
            text-decoration: none;
            cursor: pointer;
        }
    }
  
</style>