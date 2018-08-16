<template>
    <div class="app_content">
      <silebar :resume="resume" @click-share="hiedeShare" v-if="mode === 'edit'" @click-skins="hideSkins"/>
      <div class="resume">
        <nav class="navigation">
            <div class="tobNavBar">
              <div class="logo">
              <Eventable :mode="mode" :value="resume.logo" @edit="onEdit('logo',$event)"/>
              </div>
              <ul class="topbar clearfix">
                <li>关于</li>
                <li>技能</li>
                <li>作品</li>
                <li>博客</li>
                <li>联系</li>
              </ul>
           </div>
           <div class="banner">
             <div class="banner__mask"></div>
           </div>
        </nav>
        <div class="IntroContet">
          <div class="Introduction">
            <div class="IntroWraper">
                <div class="wraperImge">
                    <input type="file" name="img" accept="image/*" @change="onImage" v-show="showInput" class="fileSelect">
                    <img :src="resume.userImg" id="img_input" v-show="showImage">
                    <i class="el-icon-plus avatar-uploader-icon" @click="uploadImg" v-show="showIcon"></i>
                    <div class="exitImg" :mode="mode" v-show="exitImg" @click="showImg" v-if="mode === 'edit'">x</div>
                </div>
            </div>
            <address class="IntroMessage">
                <div class="Profile">
                  <div class="row">
                    <span class="row_center">姓名 :</span>
                    <Eventable :mode="mode" :value="resume.name" @edit="onEdit('name',$event)"/>
                  </div>
                  <div class="row">
                    <span class="row_center">年龄 :</span>
                    <Eventable :mode="mode" :value="resume.age" @edit="onEdit('age',$event)"/>
                  </div>
                  <div class="row">
                    <span class="row_center">学历 :</span>
                    <Eventable :mode="mode" :value="resume.Education" @edit="onEdit('Education',$event)"/>
                  </div>
                  <div class="row">
                    <span class="row_center">城市 :</span>
                    <Eventable :mode="mode" :value="resume.city" @edit="onEdit('city',$event)"/>
                  </div>
                  <div class="row">
                    <span class="row_center">爱好 :</span>
                    <Eventable :mode="mode" :value="resume.Hobby" @edit="onEdit('Hobby',$event)"/>
                  </div>
                  <div class="row">
                    <span class="row_center">职位 :</span>
                    <Eventable :mode="mode" :value="resume.dream" @edit="onEdit('dream',$event)"/>
                  </div>
                </div>
            </address>
          </div>
          <el-button class="showPreview" type="danger" @click="exitPreview" v-show="showPreview" size="small">退出预览</el-button>
        </div>
        <Skills id="skills" :mode="mode" :abilitys="resume" :slider="resume.skills" :filling="resume.values"/>
        <Works id="works" :mode="mode" :information="resume"/>
        <Comments id="comments" :mode="mode" :contact="resume.information"/>
        <Footer :resume="resume" :mode="mode"/>
      </div>
      <Share @close="showShares" v-show="showShare" :shareLink="shareLink"/>
      <Skins v-show="showSkin"  @close="showSkins"/>
    </div>
</template>

<script>
import Silebar from "./Silebar";
import Eventable from "./Eventable";
import Skills from "./Skills";
import Works from "./Works";
import Comments from "./Comments";
import Share from "./share";
import Skins from "./Skins";
import Footer from "./Footer";

export default {
  name: "Resume",
  components: {
    Eventable,
    Skills,
    Works,
    Comments,
    Silebar,
    Share,
    Skins,
    Footer
  },
  data() {
    return {
      editingName: false,
      showInput: false,
      showImage: true,
      exitImg: true,
      showIcon: false,
      showShare: false,
      showPreview: false,
      showSkin: false,
      currentUser: {
        objectId: undefined,
        email: ""
      },
      previewUser: {
        objectId: undefined
      },
      previewResume: {},
      resume: {
        name: "xxx",
        jobTitle: "前端开发工程师",
        age: 22,
        Education: "xxxx",
        city: "深圳",
        Hobby: "xxx",
        dream: "前端工程师",
        logo: "resume",
        userImg: "http://pa3otstvm.bkt.clouddn.com/18-8-16/76373380.jpg",
        projects: [
          {
            name: "项目名称1",
            description: "项目的介绍，用到的技术和遇到的困难",
            link: "htttps://",
            url: "https://",
            workImage: "http://pa3otstvm.bkt.clouddn.com/18-8-16/73752957.jpg"
          },
          {
            name: "项目名称2",
            description: "项目的介绍，用到的技术和遇到的困难",
            link: "htttps://",
            url: "https://",
            workImage: "http://pa3otstvm.bkt.clouddn.com/18-8-16/36287342.jpg"
          },
          {
            name: "项目名称3",
            description: "项目的介绍，用到的技术和遇到的困难",
            link: "htttps://",
            url: "https://",
            workImage: "http://pa3otstvm.bkt.clouddn.com/18-8-16/9999178.jpg"
          },
          {
            name: "项目名称4",
            description: "项目的介绍，用到的技术和遇到的困难",
            link: "htttps://",
            url: "https://",
            workImage: "http://pa3otstvm.bkt.clouddn.com/18-8-16/70127004.jpg"
          }
        ],
        information: {
          email: "email",
          qq: 79334424,
          github: "www.github.fallen158",
          wechat: 123456789,
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
            message: "掌握HTML5 & CSS3技能描述"
          },
          {
            message: "掌握 ECMAScript5,6,7 技能描述"
          },
          {
            message: "掌握 Vue 技能描述"
          },
          {
            message: "掌握 React 技能描述"
          },
          {
            message: "掌握 Node.js 技能描述"
          },
          {
            message: "掌握 Python 技能描述"
          }
        ],
        message: "1"
      },
      shareLink: "不知道",
      mode: "edit"
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
        this.exitImg = true;
      };
    },
    showImg() {
      this.exitImg = false;
      this.resume.userImg = "";
      this.showIcon = true;
      this.showImage = false;
    },
    uploadImg() {
      if (!this.showInput) {
        document.querySelector(".fileSelect").click();
        this.showIcon = false;
      }
    },
    getResume(user) {
      var query = new AV.Query("User");
      return query.get(user.objectId).then(
        user => {
          let resume = user.toJSON().resume;
          return resume;
        },
        function(error) {}
      );
    },
    hiedeShare() {
      this.showShare = true;
    },
    showShares() {
      this.showShare = false;
    },
    hideSkins() {
      this.showSkin = true;
    },
    showSkins() {
      this.showSkin = false;
    },
    exitPreview() {
      this.mode = "edit";
      this.showPreview = false;
      this.shareLink = location.origin + location.pathname;
      location.href = this.shareLink;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeMount() {
    //获取当前用户
    let currentUser = AV.User.current();
    if (currentUser === null) {
      return;
    } else {
      currentUser = currentUser.toJSON();
      this.currentUser.objectId = currentUser.objectId;
      if (this.currentUser.objectId) {
        this.getResume(this.currentUser).then(resume => {
          this.resume = resume;
          this.shareLink =
            location.origin +
            location.pathname +
            "?user_id=" +
            this.currentUser.objectId;
        });
      }
    }
  },
  created() {
    //获取预览用户
    let search = location.search;
    let regex = /user_id=([^&]+)/;
    let metches = search.match(regex);
    let userId;
    if (metches) {
      userId = metches[1];
      this.mode = "preview";
      this.getResume({ objectId: userId }).then(resume => {
        this.previewResume = resume;
        this.showPreview = true;
      });
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
    .tobNavBar {
      position: fixed;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 18px 20px;
      color: #e6686a;
      font-size: 24px;
      height: 25px;
      background: white;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
      z-index: 999;
      .topbar {
        margin-right: 130px;
        li {
          float: left;
          margin-right: 40px;
          font-size: 18px;
        }
      }
    }
    .banner {
      height: 515px;
      background: url("../assets/make.png") center center;
      background-size: cover;
      .banner__mask {
        height: 515px;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  .showPreview {
    position: absolute;
    right: 20px;
    bottom: 30px;
  }
  .Introduction {
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin: -260px auto 150px auto;
    background: white;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    .IntroWraper {
      padding: 40px;
      .wraperImge {
        width: 300px;
        height: 320px;
        margin-right: 50px;
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        position: relative;
        img {
          width: 100%;
          height: 320px;
          z-index: 1;
        }
        .avatar-uploader-icon {
          font-size: 50px;
          color: #8c939d;
          position: absolute;
          top: 40%;
          left: 42%;
        }
        .exitImg {
          font-size: 20px;
          position: absolute;
          right: 8px;
          top: 0;
          color: black;
          z-index: 2;
        }
      }
    }
    .IntroMessage {
      flex: 1;
      padding: 20px;
      .Profile {
        margin-top: 50px;
        .row {
          margin-top: 25px;
          .row_center {
            color: grey;
            font-size: 16px;
            display: inline-block;
            margin-right: 50px;
          }
          font-size: 20px;
        }
      }
    }
  }
}
</style>


