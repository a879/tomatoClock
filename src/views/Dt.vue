<template>
  <h2>
      Dt

      {{data1}}
  </h2>

  
</template>

<script>
export default {
    data() {
        return {
            data1: this.newD
        }
    },
    props: [newD]
}
</script>

<style>

</style>