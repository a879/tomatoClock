<template>
  <div>
      <input type="text" v-model="title">
      <input type="text">
      <button @click="commited()">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
            title: '',

        }
    },
    methods: {
        commited() {
            axios.post('https://cartoons-3bcc6-default-rtdb.firebaseio.com/cartoon.json', {
                title: this.title
            }).then( res => {
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>