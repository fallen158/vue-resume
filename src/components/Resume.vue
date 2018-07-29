<template>
    <div class="app_content">
      <silebar/>
      <div class="resume">
        <nav class="navigation">
           <div class="logo">
               <h3>{{logo}}</h3>
           </div>
           <ul class="topbar clearfix">
               <li>关于</li>
               <li>技能</li>
               <li>作品</li>
               <li>博客</li>
               <li>联系</li>
           </ul>
        </nav>
        <div class="IntroContet">
          <h1>关于我</h1>
          <div class="Introduction">
            <div class="IntroWraper">   
                <div class="wraperImge">
                    上传头像
                </div>
            </div>
            <address class="IntroMessage">
                <div class="Profile clearfix">
                    <h1><Eventable :value="resume.name" @edit="onEdit('name',$event)"/></h1>
                    <p><Eventable :value="resume.jobTitle" @edit="onEdit('jobTitle',$event)"/></p>
                    <hr>
                    <dl>
                        <dt>年龄</dt>
                        <dd><Eventable :value="resume.age" @edit="onEdit('age',$event)"/></dd>
                        <dt>学历</dt>
                        <dd><Eventable :value="resume.Education" @edit="onEdit('Education',$event)"/></dd>
                        <dt>所在城市</dt>
                        <dd><Eventable :value="resume.city" @edit="onEdit('city',$event)"/></dd>
                        <dt>爱好</dt>
                        <dd><Eventable :value="resume.Hobby" @edit="onEdit('Hobby',$event)"/></dd>
                        <dt>梦想</dt>
                        <dd><Eventable :value="resume.dream" @edit="onEdit('dream',$event)"/></dd>
                    </dl>
                </div>
            </address>
          </div> 
        </div>
        <Skills/>
        <Works/>
        <Comments/>
      </div>
    </div>
</template>

<script>
import Silebar from "./Silebar"
import Eventable from "./Eventable";
import Skills from "./Skills";
import Works from "./Works";
import Comments from "./Comments";

export default {
  name: "Resume",
  components: {
    Eventable,
    Skills,
    Works,
    Comments,
    Silebar
  },
  data() {
    return {
      logo: "re",
      editingName: false,
      resume: {
        name: "刘文超",
        jobTitle: "前端开发工程师",
        age: 21,
        Education: "高中",
        city: "深圳",
        Hobby: "旅游",
        dream: "全栈工程师"
      },
      message: "1"
    };
  },
  methods: {
    onEdit(key, value) {
      this.resume[key] = value;
      console.log(key);
    }
  }
};
</script>


<style lang="scss" scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.resume {
  height: 100vh;
  overflow: auto;
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
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
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

        dl,
        dd {
          float: left;
          width: 70%;
          color: black;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>


