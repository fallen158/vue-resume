<template>
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
                        <dt>邮箱</dt>
                        <dd><Eventable :value="resume.email" @edit="onEdit('email',$event)"/></dd>
                        <dt>手机</dt>
                        <dd><Eventable :value="resume.phone" @edit="onEdit('phone',$event)"/></dd>
                    </dl>
                </div>
            </address>
        </div> 
        <ResumeSkill/>
        <ResumeWorks/>
        <ResumeComments/>
    </div>
</template>

<script>
import Eventable from "./Eventable";
import ResumeSkill from "./Resume_skill";
import ResumeWorks from "./Resume_works";
import ResumeComments from "./Resume_comments";

export default {
  name: "Resume",
  components: {
    Eventable,
    ResumeSkill,
    ResumeWorks,
    ResumeComments
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
        email: "79334424@qq.com",
        phone: 13717022872
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


