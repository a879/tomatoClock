<template>
  <div>
      <span>ColumnList</span>
      <el-row type="flex" :gutter="20">
          <el-col v-for="list in lists" :key="list.id" :span="8" >
              <h3 style="margin-top: 10px">
                  {{list.title }}
              </h3>

              <el-card style="margin:0 20px;">
                   <img :src="list.avatar" alt="" width="180px" height="250px">

                     <span  style="padding: 14px;" v-rainbow  @click="toPage(list.linkRouteParams)">
                        {{list.description | ellipsis}}
                    </span>
              </el-card>
          </el-col>
      </el-row>

  </div>
</template>

<script>
export default {
    data () {
        return {
            // avatar: lists.avatar
            lists: this.list

        }
    },
    props: {
        list: Array
    },
    methods: {
        toPage(idc) {

                 this.$router.push(idc).catch(err => {
                    console.log(err)
                 })
            
               
        }
    },
    filters: {
        ellipsis(el) {
            return  `${el.trim().slice(0, 20)}...`
        }
    },
    directives: {
        rainbow(el) {
            // console.log(el)
             el.style.color = '#' + Math.random().toString(16).slice(2,8)
        }
    }
}
</script>

<style>

    .box {
        display: flex;
        
    }

    span {
        display: block;
        font-weight: bolder;
    }

    /* el-col {
        display: flex;
        align-items: center;
        justify-content: center;
    } */


</style>