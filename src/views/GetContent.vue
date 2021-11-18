<template>
  <div>
      <span>
          {{}}
      </span>
      <button @click="up()">update</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {

        }
    },

    methods: {
        up() {
            axios.get('https://cartoons-3bcc6-default-rtdb.firebaseio.com/cartoon.json').then( function(res) {
                console.log(res)
            })
        }

    }
}
</script>

<style>

</style>