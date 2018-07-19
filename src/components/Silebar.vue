<template>
    <aside class="silebar">
        <div class="uper">
            <el-button size="small" class="save">保存简历</el-button>
            <el-button size="small">登录账户</el-button>
            <el-button size="small">注册账户</el-button>
            <el-button size="small">分享简历</el-button>
            <el-button size="small">打印简历</el-button>
            <el-button size="small">风格设置</el-button>
            <el-button size="small">自动简历</el-button>
        </div>
        <div class="down">
            <el-button type="warning" size="small" class="save">登出账户</el-button>
        </div>
    </aside>
</template>


<script>
export default {
  name: "Silebar"
};
</script>


<style lang="scss" scoped>
.silebar {
 border-right:1px solid  #999;
  width: 100px;
  display: flex;
  flex-direction: column;
  .el-button:nth-child(1){
      margin-top: 10px;
  }
  .el-button{
     margin-top: 16px; 
  }
  .save{
      margin-left: 10px;
  }
  .down{
    flex:1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;
  }
}
</style>

