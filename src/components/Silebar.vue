<template>
    <aside class="silebar">
        <div class="uper">
            <button>保存简历</button>
            <router-link to="/singin">
              <button v-show="hideLogin">登录账户</button>
            </router-link>
            <router-link to="/singup">
              <button v-show="hideLogin">注册账户</button>
            </router-link>
              <button>分享简历</button>
            <button>打印简历</button>
            <button>风格设置</button>
            <router-link to="/automtic">
              <button>自动简历</button>
            </router-link>
        </div>
        <div class="down">
            <button class="warning" @click="logOut" v-show="hideOut"> 登出账户</button>
        </div>
    </aside>
</template>


<script>
export default {
  name: "Silebar",
  props: ["userId"],
  data() {
    return {
      hideLogin: true,
      hideOut: false
    };
  },
  methods: {
    logOut() {
      AV.User.logOut().then(res => {
        this.hideLogin = true
        this.hideOut = false
        alert('登出成功')
      });
    }
  },
  beforeMount() {
    let currentUser = AV.User.current();
    currentUser = currentUser.toJSON();
    this.userId = currentUser.objectId;
    if (this.userId) {
      this.hideLogin = false;
      this.hideOut = true;
    }
  }
};
</script>


<style lang="scss" scoped>
.silebar {
  border-right: 1px solid #999;
  width: 100px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  .uper {
    button {
      padding: 9px 15px;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      border: 1px solid #dcdfe6;
      color: #606266;
      text-align: center;
      margin: 10px 10px;
    }
  }
  .down {
    position: absolute;
    bottom: 0;
    margin-bottom: 16px;
    .warning {
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
      line-height: 1;
      border-radius: 3px;
      font-size: 12px;
      padding: 9px 15px;
      margin-left: 10px;
    }
  }
}
</style>

