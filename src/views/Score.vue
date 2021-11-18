<template>
  <div class="container">
      <h1>
          总分 
          {{xxx}}
      </h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import store from '@/store/'
export default {
    data() {
        return {
            count: this.grade,
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            xxx: 0
        }
    },
    props: ['grade'],
    methods: {
        ...mapMutations[
            'addScore'
        ],
        compare() {

            if(store.state.itemNum <= store.state.itemDetail.length) {
            var ooo = store.state.answerid;
            ooo.forEach(element => {
                if(this.rightAnswer.some( function(item) {
                    ooo.shift()
                    return item === element
                } )){
                    this.xxx += 20;
                }
            });
            }

        }

    }

}
</script>

<style>

</style>