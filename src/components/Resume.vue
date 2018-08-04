<template>
    <div class="app_content">
      <silebar :resume="resume"/>
      <div class="resume">
        <nav class="navigation">
           <div class="logo">
               <h3><Eventable :value="resume.logo" @edit="onEdit('logo',$event)"/></h3>
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
                    <input type="file" name="img" accept="image/*" @change="onImage" v-show="showInput" class="fileSelect">
                    <img :src="resume.userImg" id="img_input" v-show="showImage">
                    <i class="el-icon-plus avatar-uploader-icon" @click="uploadImg" v-show="showIcon"></i>
                </div>
            </div>
            <address class="IntroMessage">
                <div class="Profile clearfix">
                    <dl>
                        <dt>姓名 :</dt>
                        <dd><Eventable :value="resume.name" @edit="onEdit('name',$event)"/></dd>
                        <dt>年龄 :</dt>
                        <dd><Eventable :value="resume.age" @edit="onEdit('age',$event)"/></dd>
                        <dt>学历 :</dt>
                        <dd><Eventable :value="resume.Education" @edit="onEdit('Education',$event)"/></dd>
                        <dt>所在城市 :</dt>
                        <dd><Eventable :value="resume.city" @edit="onEdit('city',$event)"/></dd>
                        <dt>爱好 :</dt>
                        <dd><Eventable :value="resume.Hobby" @edit="onEdit('Hobby',$event)"/></dd>
                        <dt>应聘职位 :</dt>
                        <dd><Eventable :value="resume.dream" @edit="onEdit('dream',$event)"/></dd>
                    </dl>
                </div>
            </address>
          </div>
        </div>
        <Skills :abilitys="resume" :slider="resume.skills" :filling="resume.values"/>
        <Works :information="resume"/>
        <Comments :contact="resume.information"/>
      </div>
    </div>
</template>

<script>
import Silebar from "./Silebar";
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
      editingName: false,
      showInput: false,
      showImage: false,
      showIcon: true,
      currentUser: {
        objectId: undefined,
        email: ""
      },
      previewUser: {
        objectId: undefined
      },
      previewResume: {},
      resume: {
        name: "刘文超",
        jobTitle: "前端开发工程师",
        age: 22,
        Education: "xxxx",
        city: "深圳",
        Hobby: "xxx",
        dream: "前端工程师",
        logo: "resume",
        userImg: "",
        projects: [
          {
            name: "在线简历编辑",
            description: "项目简介",
            link: "htttps://",
            url: "https://",
            workImage: ""
          },
          {
            name: "QQ音乐",
            description: "项目简介",
            link: "htttps://",
            url: "https://",
            workImage: ""
          },
          {
            name: "cnode社区",
            description: "项目简介",
            link: "htttps://",
            url: "https://",
            workImage: ""
          },
          {
            name: "在线便利贴",
            description: "项目简介",
            link: "htttps://",
            url: "https://",
            workImage: ""
          }
        ],
        information: {
          email: "79334424@qq.com",
          qq: 79334424,
          github: "www.github.fallen158",
          wechat: 13717022872,
          Blog: "myBlog"
        },
        skills: {
          name: "HTML5 & CSS3",
          name2: "ECMAScript5,6,7",
          name3: "Vue",
          name4: "React",
          name5: "Node.js",
          name6: "python"
        },
        values: {
          value: 20,
          value2: 25,
          value3: 30,
          value4: 40,
          value5: 50,
          value6: 60
        },
        summary: [
          {
            name: "HTML5 & CSS3",
            description: "掌握HTML5 & CSS3技能描述1",
            message: "掌握HTML5 & CSS3技能描述2"
          },
          {
            name: "ECMAScript5,6,7",
            description: "掌握 ECMAScript5,6,7 技能描述1",
            message: "掌握 ECMAScript5,6,7 技能描述2"
          },
          {
            name: "Vue",
            description: "掌握 Vue 技能描述1",
            message: "掌握 Vue 技能描述2"
          },
          {
            name: "React",
            description: "掌握 React 技能描述1",
            message: "掌握 React 技能描述2"
          },
          {
            name: "Node.JS",
            description: "掌握 Node.js 技能描述1",
            message: "掌握 Node.js 技能描述2"
          },
          {
            name: "python",
            description: "掌握 Python 技能描述1",
            message: "掌握 Python 技能描述2"
          }
        ],
        message: "1"
      }
    };
  },
  methods: {
    onEdit(key, value) {
      this.resume[key] = value;
    },
    onImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.resume.userImg = e.target.result;
        this.showInput = false;
        this.showImage = true;
      };
    },
    uploadImg() {
      if (!this.showInput) {
        document.querySelector(".fileSelect").click();
        this.showIcon = false;
      }
    }
  },
  beforeMount() {
    let currentUser = AV.User.current();
    currentUser = currentUser.toJSON();
    if (currentUser) {
      this.hideLogin = false;
      this.hideOut = true;
      this.currentUser.objectId = currentUser.objectId;
    }

    var query = new AV.Query("User");
    query.get(this.currentUser.objectId).then(user=>{
      let resume = user.toJSON().resume
      this.resume = resume
      console.log(this.resume)

    });
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
    padding: 25px;
    color: #409eff;
    background-color: transparent;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
    .topbar {
      li {
        float: left;
        margin-left: 20px;
      }
    }
  }
  h1 {
    text-align: center;
  }
  .Introduction {
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    .IntroWraper {
      padding: 30px;
      .wraperImge {
        width: 300px;
        height: 300px;
        margin-right: 50px;
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        position: relative;
        img {
          width: 100%;
          height: 300px;
          z-index: 1;
        }
        .avatar-uploader-icon {
          font-size: 50px;
          color: #8c939d;
          position: absolute;
          top: 40%;
          left: 42%;
        }
      }
    }
    .IntroMessage {
      flex: 1;
      padding: 20px;
      .Profile {
        margin-top: -10px;
        dl,
        dt {
          float: left;
          width: 30%;
          color: grey;
          font-size: 16px;
          margin-top: 25px;
        }

        dl,
        dd {
          float: left;
          width: 70%;
          color: black;
          margin-top: 25px;
        }
      }
    }
  }
}
</style>


