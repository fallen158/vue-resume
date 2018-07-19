<template>
    <div class="resume">
       <nav class="navigation">
           <div class="logo">
               <h3>resume</h3>
           </div>
           <ul class="topbar clearfix">
               <li>关于</li>
               <li>技能</li>
               <li>作品</li>
               <li>博客</li>
               <li>联系</li>
           </ul>
       </nav>
       <div class="Introduction">
            <div class="IntroWraper">   
                <div class="wraperImge">
                    上传头像
                </div>
            </div>
            <address class="IntroMessage">
                <div class="Profile clearfix">
                    <h1>刘文超</h1>
                    <p>前端开发工程师</p>
                    <hr>
                    <dl>
                        <dt>年龄</dt>
                        <dd>21</dd>
                        <dt>学历</dt>
                        <dd>高中</dd>
                        <dt>所在城市</dt>
                        <dd>深圳</dd>
                        <dt>邮箱</dt>
                        <dd>79334424@qq.com</dd>
                        <dt>手机</dt>
                        <dd>13717022872</dd>
                    </dl>
                </div>
            </address>
        </div>    
    </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.resume {
  .navigation {
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    padding: 15px;
    .logo {
    }
    .topbar {
      li {
        float: left;
        margin-left: 20px;
      }
    }
  }
  .Introduction {
    border: 1px solid;
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .IntroWraper {
      padding: 30px;
      .wraperImge {
        width: 200px;
        height: 200px;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .IntroMessage {
      flex: 1;
      padding: 20px;
      .Profile {
        dl,
        dt {
          float: left;
          width: 30%;
          color: grey;
          font-size: 16px;
          margin-top: 10px;
        }

        dl,dd {
          float: left;
          width: 70%;
          color:black;
           margin-top: 10px;
        }
      }
    }
  }
}
</style>
