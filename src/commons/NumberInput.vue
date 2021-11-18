<template>
  <div class="container">
      <input type="number" v-model="count">
      <button @click="count++">-</button>
      <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: {
                type: Number,
                default: 5
            }
        }
    }
}
</script>

<style>

</style>