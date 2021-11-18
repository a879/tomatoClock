<template>
  <header>
      <div>
          sss
      </div>
      <slot>
          <div>ooo</div>
      </slot>
      <div>
          iop
      </div>

      <p>全局组件复用在Header单文件组件中</p>
        <fruit-tomato></fruit-tomato>

    <p>fruit-orange单文件组件</p>
    <FruitOrange></FruitOrange> 
  </header>
</template>

<script>
import FruitOrange from '@/commons/Fruit-orange'
export default {
    components: {
        FruitOrange
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-around;
        align-items: center
    }
</style>