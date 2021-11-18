<template>
  <div class="container">
    <h1>当前时间{{hour}}时  {{min}}分 {{second}}秒 </h1>
    <span v-on:changetitle=change($event)>确定番茄钟的时间</span>
    
    <ul>
      <li>
        <input value="" ref="hourref" type="number" placeholder="时" min="0" max="99">
      </li> 
      
      <li>
        <input ref="minref" type="number"  placeholder="分" min="0" max="59">
      </li> 
      
      <li>
        <input type="number" ref="seref" placeholder="秒" min="0" max="59">
      </li>
    </ul>
    
    <button @click="startTiming">Start</button>

    <span>
      倒计时 {{time_hour}} h {{time_min}} min {{time_se}} s
    </span>

    <span v-if="show">success</span>

    <!-- <fruit-tomato></fruit-tomato>
    <CloseClock :cdata="cdata"></CloseClock> -->

    <!-- <Header>
      <input type="text" value="ajsdkfl">
    </Header>
    <Header></Header> -->

  <!-- <FruitOrange></FruitOrange> -->

  </div>
</template>

<script>
import CloseClock from '@/components/CloseClock'
import Header from '@/commons/Header'
import FruitOrange from '@/commons/Fruit-orange'

export default {
    name: 'clocktime',
    components: {CloseClock, Header, FruitOrange},
    data(){
      return{
        hour:"",
        min: "",
        second: "",
        cdata:{
          chour: 0,
          cmin: 0,
          csecond: 0
        },
          time_hour: 0,
          time_min: 0,
          time_se: 0,
          show: false
        
      }
    },
    methods: {
      change(val){

      },
      getCurrentTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let second = time.getSeconds();

        this.hour = hour;
        this.min = min;
        this.second = second;
      },
      startTiming() {
        this.time_hour = this.$refs.hourref.value;
        this.time_min = this.$refs.minref.value;
        this.time_se = this.$refs.seref.value;

      //  let alltime = this.time_hour * 3600 + this.time_min*60 + this.time_se;
      

         let alltime = this.time_hour * 3600 + this.time_min*60 + this.time_se;
    
        
        let loop = setInterval(()=>{
            alltime--;
            if(alltime===0){
              this.show = true;
               clearInterval(loop)
            }
            
             console.log(alltime)

           },5000)
            

        
        // if(newtime === 0){
        //   this.show = true;
        // }

       
      }

      
    },
    created() {
      setInterval(() => {
        this.getCurrentTime()
      }, 1000);

    }
}
</script>

<style scoped>

  li{
    list-style: none;
  }

</style>