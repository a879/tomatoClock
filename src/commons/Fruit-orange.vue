<template>
  <div class="container">
      <span @click="double">单文件组件</span>
      {{countnew}} 

      <p>全局组件</p>
      <fruit-tomato></fruit-tomato>
  </div>
</template>

<script>
export default {
    data() {
        return {
            countnew : this.$props.count
        }
    },
    props: {
        count: {
            type: Number,
            // default: 0
        }
    },
    methods: {
        double() {
            this.countnew = this.$props.count * 2
            
            console.log(this.countnew)
        }
    }
}
</script>

<style>

</style>