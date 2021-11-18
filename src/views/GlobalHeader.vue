<template>
  <div>
      <div class="top">
          <div class="left_top">
              <span @click="isLogin=!isLogin" style="color: #eee">clearGale</span>
          </div>

          <div v-if="isLogin" class="right_top">
               <el-button type="primary" >登陆</el-button>
               <el-button type="primary" >注册</el-button>
          </div>

        <div v-else class="right_top">
              <el-dropdown>
                <el-button type="primary">
                   oh！ clearGale<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>资料</el-dropdown-item>
                    <el-dropdown-item>编辑</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: true
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0 auto;
    }

    .top {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;          
        background-image:  linear-gradient(#152331, #000000);

    }

    .left_top {
        margin-left: 50px;
    }

    .right_top {
        margin-right: 150px;
        width: 100px;
        display: flex;
        justify-content: space-between;
    }
</style>