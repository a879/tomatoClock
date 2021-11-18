<template>
  <div class="container">
      倒计时{{closehour}} 时 {{closemin}}分 {{closesecond}} 秒
      <button v-on:click="$emit('adsfasa')"></button>
  </div>
</template>

<script>
export default {
    name: 'CloseClock',
    props: [ 'cdata'],
    data() {
        return{
            huhe: "mi",
            closehour: this.cdata.chour,
            closemin: this.cdata.cmin,
            closesecond: this.cdata.csecond
        }
    },
    // watch: {
    //     hour(newVal, oldVal){
    //         this.closehour = newVal
    //     }
    // }
    mounted(){
        console.log(this.$props.cdata)
    }
}
</script>

<style>

</style>