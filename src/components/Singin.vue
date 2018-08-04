<template>
    <div class="login">
        <h2>Remit</h2>
        <div class="content_wraper">
          <h3>Welcome!</h3>
          <p class="prompt">Sign in by entering the information below</p>
          <form class="form_relef" @submit.prevent="onSingIn">
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
              <button type="submit">Sing in</button>
              <div class="switching">
                <router-link to="/singup">Don't have an account? Create one here.</router-link>
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
  name: "",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSingIn() {
      AV.User.logIn(this.email, this.password)
        .then(user => {
          alert("登录成功");
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
          if (err.code === 210) {
            alert("用户名和密码不匹配");
          } else if (err.code === 211) {
            alert("请输入正确的邮箱");
          }
        });
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
