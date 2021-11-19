<template>
    <div class="container">

        <span style="color: white;" :class="key1  = itemNum-1">
            {{
                itemDetail[itemNum-1].topic_name
            }}
        </span>

        <h1 style="color: green">

            <Score ref="child"></Score>
        </h1>

        <div class="title-center" v-if="onstart">
            <img src="../images/1-2.png" alt="">
        </div>

        <div style="color: white" v-if="!onstart" class="titleChoice">
            
            <!-- <div style="margin-top: 20px"  v-for="(arr, index) in itemDetail[0].topic_answer" :key="index">
                
                    {{ arr.answer_name }} 
                    {{index}}
            </div> -->

            <div v-for="(list, index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="taped(index, list)" :class="{isTaped: isT === index}">

                <!-- <div style="margin-top: 20px;color: black"  v-for="(arr, ind) in itemDetail[fir].topic_answer" :key="ind">
                
                    {{ arr.answer_name }} 
                   
                </div> -->
                   
                    <span v-tap>
                        {{
                        index | abcd 
                        }}
                    </span>

                    {{
                        list.answer_name
                    }}

            </div>

        </div>
            <button @click="lastDance()" :class="{first:onstart}">

            </button>

            <button @click="toPageX()"  :class="{next: isnext, end: !isnext}" v-if="!onstart">
                
            </button>
    </div>
</template>

<script>
import Score from '@/views/Score'
import store from '@/store/'
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            onstart: true,
            a: 0,
            isnext: true,
            isT: false,
            test: true,
            state :store.state,
            fir: 0,
            isTaped: false
            // arrs: store.state.itemDetail[0].topic_answer[0].answer_name
        }
    },
    components:  {Score} ,
    methods: {
        ...mapMutations([
            'addNum', 'addScore'
        ]),
        join() {

        },
        lastDance(){
            this.onstart = false;
        },
        toPageX() {
           
            if(this.isT === false) {
                alert("请选择一项");
                return;
            }

            if(this.a < this.state.itemDetail.length) {
                this.toPage()
            }
                        
        },
        toPage() {

            this.addNum(1);
            this.a++;
            if(this.state.itemNum === 5){
                this.isnext = false;
            }
            this.isT = false;
            console.log(this.state.itemDetail[this.key1].topic_answer[index].topic_answer_id);
            // console.log(index)
            var ss = this.state.itemDetail[this.key1].topic_answer[index].topic_answer_id;
            
            this.addScore(ss);
            
            this.$refs.child.compare();

        },
        taped(index, list) {

            if(this.isT !== index){
                this.isT = index;
            }else {
                this.isT = false;
            }
            window.index = index;
            this.grade = list.topic_answer_id 
        }
    },
    created() {
        // console.log(this.state)
        console.log(this.arrs)
        
    },
    filters: {
        abcd(old) {
            if(old === 0) {
                return 'A'
            }else if(old === 1){
                return 'B'
            }else if(old === 2){
                return 'C'
            }else if(old === 3){
                return 'D'
            }else {
                return 'Error'
            }
        }
    },
    directives: {
        tap(el) {
            el.style.color = 'yellow'
        }
    },
    computed: 
         mapState([
            'level', 'itemDetail', 'itemNum'
        ])
    

       
    
}
</script>

<style>
    .titleChoice{
        margin-top: 50px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }

    .title-center img{
        width: 80%;
        height: 250px;
        /* background-size: contain; */
        /* background:no-repeat url('../images/1-2.png'); */
    }

    .isTaped {
        color: red !important;
    }

    html {
        height: 100%;
    }

    body{
        background-image: url('../images/1-1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -2;
        /* overflow: hidden; */
    }

    .imgChoice{
        width: 200px;
        height: 300px;
        float: right;
        background:no-repeat url('../images/WechatIMG2.png');
    }

    .context {
        width: 100%;
        height: 300px;
        top: 50px;
        left: 50%;
        margin-top: 150px;
        
    }

    .end {
        width: 122px;
        height: 67px;
        background: url('../images/3-1.png') no-repeat;
        background-size: 100% 100%;
    }


    .next {
        width: 122px;
        height: 67px;
        background: url('../images/2-2.png') no-repeat;
        background-size: 100% 100%;
        margin-top: 50px;
    }

    .first {
        width: 122px;
        height: 67px;
        background: url('../images/1-4.png') no-repeat;
        background-size: 100% 100%;
    }
</style>




