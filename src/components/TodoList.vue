<template>
    <!-- 
        在删除下标小的元素后，会导致下一个元素下标修改，且样式也变化， checkbox 被设置成true

        点击提交，导致不断生成的内容 让页面很多元素挤在一起
                1： 生成内容时，自动加长页面， 达到某个数值， 整个页面拉长
                2： 隐藏生成的内容， 用下拉查看

        页面生成的时候，会有一个空的数据
     -->

  <div class="bg">

        <div class="box" ref="box" id="box">

            <div id="title_top">
                <img src="@/assets/note.75134fb0.svg" alt="" width="80" height="100">

            <div class="title">
                <span>To-Do List</span>
            </div>

            </div>

            <h4> ~ 今天， 我需要做的 ~</h4>

            <div stype="display:flex; flex-direction:row;">
                <input style="margin-right: 10px" class="ipt" type="text" placeholder="添加新任务..." v-model="ipt_aims"> 
                <button class="btn" @click="tran(ipt_aims)">
                    提交
                </button>
            </div>

            <!-- <div style="overflow:hidden; width: 100%; height: 50%;"> -->
            <!-- style="overflow-y: scroll;overflow-x: hidden;" -->
            <div class="aim_items">
                <!-- v-bind:class="{isc : isColor}" -->
                <div class="aim_item" v-for="(aim,index) in ipt_aims_list" :key="index" :id="`aim${index}`">
                   <div>
                    <input type="checkbox" id="checkTrue" :ref="`checkone${index}`" @click="unfinished(`checkone${index}`, index)"> {{aim.values}}
                    <!-- {{aim.indexValue}}  -->
                   </div>
                   
                   <span @click.prevent="finished(`checkone${index}`, index)">❌</span>
                   <!-- <button>✔</button> -->
                </div>

            </div>

            <!-- </div> -->

            <div>


                <button @click="clearAims()">
                    Clear Completed
                </button>
            </div>
        </div>

    <div v-show="" class="btn_btm">
        Congrat, you have no more tasks to do
    </div>
  </div>
</template>

<script>
// import './assets/css/global.css'

import { mapMutations } from 'vuex'
import store from '@/store/'

export default {
    data() {
        return {
            ipt_aims: '',
            ipt_aims_list: '',
            isColor: false
        }
    },

    mounted: function(){
            this.tran()
    },
    methods: {
        unfinished (arg4, arg5) {

            // console.log(this.$refs[`${arg4}`])
            if(this.$refs[`${arg4}`][0].checked === false) {
                document.getElementById(`aim${arg5}`).removeAttribute('class')
                document.getElementById(`aim${arg5}`).setAttribute('class','aim_item')
                console.log(document.getElementById(`aim${arg5}`))
                this.isColor = false
            } else {
                document.getElementById(`aim${arg5}`).setAttribute('class','isc aim_item')
                console.log(document.getElementById(`aim${arg5}`))
                               
                this.isColor = true
            }

        },

        finished (arg2, arg3) {
            // console.log(arg2)
            // console.log(this.$refs[`${arg2}`][0].checked)
            
            // console.log(this.$refs[`${arg2}`])
            
            store.state.todolists.splice(arg3, 1)
            // 当前代码，在删除下标小的元素后，会导致下一个元素下标修改，且样式也变化， checkbox 被设置成true
            document.getElementById(`aim${arg3}`).removeAttribute('class')
            document.getElementById(`aim${arg3}`).setAttribute('class','aim_item')
            // 修改颜色变化




            // document.getElementsByClassName(`${arg2}`).type.checkbox = false


            // 当前判断false true ，触发颜色变化
            //  且 将 当前input 的值 在vuex 中修改

           
        },

        tran(arg) {

            let obj = {
                    values: "",
                    checkState: false
            }

            // console.log(store.state.todolists)
            if(arg !== "") {
                obj.values = arg
                obj.indexValue = store.state.todolists.length

                this.addAims(obj)

            }
            this.ipt_aims_list = store.state.todolists
            this.ipt_aims = ''

            if(store.state.todolists.length > 2) {
                console.log(document.getElementsByClassName('box'))
                console.log(this.$refs.box.style.width)
            }

            
        },
        clearAims(){
            store.state.todolists.splice(0, store.state.todolists.length)
        },
        ...mapMutations([
            'addAims'
        ])
    }
}
</script>

<style>

    html,
    body,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .bg {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgb(255, 134, 154), rgb(255, 165, 123));

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    }

    .isc {
        background-color: #fe7345;
        color: white;
        
    }

    .aim_items {
        width: 80%;
    }

    .aim_item {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;
        height: 40px;
        border-radius: 5px;
    }

    .box {
        background-color: white;
        height: 600px;
        width: 450px;

        border-radius: 15px;

        display: flex;
        flex-direction: column;


        align-items: center;
        justify-content: space-around;

    }

    #title_top {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;

        align-items: center;
    }

    .title {

        margin-left: 15px;
        background-color: #fe7345;
        transform: rotate(4deg);
        padding: 5px 5px;
        font-size: 18px;
        color: white;
        height: 27px;

        border-radius: 5px 5px 20px 5px;
    }

    .ipt {
        border: none;
        border-bottom: dotted #fe7345;
        outline: none;
    }

    .btn{
        width: 80px;
        height: 30px;
        transform: rotate(5deg);
        border: double;
        background-color: white;

    }

    .btn :hover {
        
        animation: toTransform 2s;
    }


    @keyframes toTransform {
        from {
            transform: rotate(5deg);
        }
        to {
            transform: rotate(0deg);
        }
    }
    
</style>