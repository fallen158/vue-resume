<template>
    <div class="login">
        <h2>Remit</h2>
        <div class="content_wraper">
          <h3>Welcome!</h3>
          <p class="prompt">Sign up by entering the information below</p>
          <form class="form_relef" @submit.prevent="onSingUp">
            <label>
              <input type="text" class="name" placeholder="请输入邮箱" v-model="email">
            </label>
            <label>
              <input type="password" class="name" placeholder="请输入密码" v-model="password">
            </label>
            <div class="work">
              <label>
                <input type="checkbox"> Remember Me
              </label>
              <div>
                  <span>Forgotten Password</span>
              </div>
          </div>
            <div class="submit">
              <button type="submit">Sing up</button>
              <div class="switching">
                <router-link to="/singin">Have an account? Log in here.</router-link>
              </div>
            </div>
          </form>
        </div>
        <footer>
          <p>© 2018 Remit</p>
        </footer>
    </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSingUp(key) {
      var user = new AV.User();
      user.setUsername(this.email);
      user.setPassword(this.password);
      user.setEmail(this.email);
      user.signUp().then(res=>{
        alert('注册成功')
        this.email = ''
        this.password = ''
      }).catch(err=>{
        if(err.code === 203){
          alert('此电子邮箱已经被占用')
        }else if(err.code === 125){
          alert('请输入正确的邮箱')
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  margin: 0 auto;
  min-width: 505px;
  font-size: 16px;
  h2 {
    color: #eb5468;
    margin: 28px 0 74px 0;
  }
  .content_wraper {
    width: 380px;
    margin: 0 auto;
    h3 {
      font-weight: 350;
    }
    .prompt {
      color: #8a929c;
      margin: 20px 0;
    }
    .form_relef {
      margin: 40px 0;
      .name {
        width: 370px;
        height: 30px;
        display: block;
        margin: 10px auto;
        padding: 0 5px;
        font-size: 12px;
        color: #999;
      }
      .work {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #aab2bc;
      }
      .submit {
        button {
          width: 380px;
          height: 46px;
          background: #58a1f5;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 16px;
          margin-top: 1em;
        }
        .switching {
          font-size: 12px;
          color: #aab2bc;
          margin-top: 1.5em;
        }
      }
    }
  }
  footer {
    color: #d3d9e0;
    font-size: 13px;
    margin-top: 150px;
  }
}
</style>
