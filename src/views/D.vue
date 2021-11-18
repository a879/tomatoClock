<template>
  <div>
      <h1>
          D
      </h1>
    <Dt :value='this.newD'></Dt>
  </div>
</template>

<script>
import Dt from '@/views/Dt'
export default {
    data(){
        return {
            newD: 'sss'
        }
    },
    components: { Dt }
}
</script>

<style>

</style>