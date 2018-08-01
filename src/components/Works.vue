<template>
    <div class="resume_works">
        <h1>作品展示</h1>
        <div class="project">
            <ul class="tab">
                <li v-for="tab,index in information.projects" :class="{active:currenTtab === index}" @click="onTab(index)">
                   <Eventable :value="tab.name" @edit="onEdit('projects['+index+'].name',$event)"/>
                    <div @click="removeTab" class="editTab" v-if="index>3">x</div>
                </li>
                <li @click="addTab">+</li>
            </ul>
            <ul>
              <li class="content" v-for="item,index in information.projects" v-show="index === currenTtab">
                  <div class="left">
                      <h2>
                        <Eventable :value="item.name" @edit="onEdit('projects['+index+'].name',$event)"></Eventable>
                      </h2>
                      <p class="item_description">
                        <Eventable :value="item.description" @edit="onEdit('projects['+index+'].description',$event)"></Eventable>
                      </p>
                      <p>
                        源码链接: <Eventable :value="item.link" @edit="onEdit('projects['+index+'].link',$event)" class="item_link"></Eventable>
                      </p>
                      <p>
                        预览链接: <Eventable :value="item.url" @edit="onEdit('projects['+index+'].url',$event)" class="item_link"></Eventable>
                      </p>  
                  </div>
                  <div class="right" >
                    <input type="file" name="img" accept="image/*" @change="onImage" v-show="showInput">
                    <img :src="workImage" id="img_input" v-show="showImage">
                 </div>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Eventable from "./Eventable";
export default {
  name: "Works",
  props: ["information"],
  data() {
    return {
      currenTtab: 0,
      workImage: '',
      showInput: true,
      showImage: false
    };
  },
  methods: {
    onTab(index) {
      this.currenTtab = index;
    },
    addTab() {
      this.information.works.push({ name: "项目名称" });
      this.information.projects.push({
        name: "项目名称",
        description: "项目简介",
        link: "htttps://",
        url: "https://",
        avatar: "头像"
      });
    },
    removeTab() {
      this.information.works.pop();
      this.information.projects.pop();
    },
    onEdit(key, value) {
      let reg = /\[(\d+)\]/g;
      key = key.replace(reg, (match, number) => {
        return "." + number;
      });
      let keys = key.split(".");
      let result = this.information;
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          result[keys[i]] = value;
        } else {
          result = result[keys[i]];
        }
      }
    },
    onImage(e){
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e)=>{
        this.workImage = e.target.result
        this.showInput = false
        this.showImage = true
      }
    }
  },
  components: {
    Eventable
  }
};
</script>


<style lang="scss" scoped>
.resume_works {
  width: 960px;
  margin: 80px auto 0 auto;
  padding-bottom: 100px;
  h1 {
    text-align: center;
  }
  .project {
    margin-top: 40px;
    .tab {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #dfe2e6;
      color: #9c9d9c;
      font-size: 14px;
      li {
        transition: all 0.4s;
        padding: 10px 20px;
        border: 1px solid #fff;
        cursor: pointer;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        user-select: none;
        position: relative;
        .editTab {
          position: absolute;
          right: 3px;
          top: -1px;
          color: #9c9d9c;
        }
      }
      li.active {
        border: 1px solid #dfe2e6;
        border-bottom: 2px solid #fff;
        color: #4d4d4d;
      }
    }
    .content {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      .left {
        width: 320px;
        padding: 20px;
        max-height: 400px;
        min-height: 200px;
        border:1px solid;
        h2 {
          margin-bottom: 20px;
        }
        .item_description {
          margin-bottom: 20px;
        }
        .item_link {
          color: #007bff;
        }
        p {
          color: #4d4d4d;
          margin-top: 5px;
          font-size: 16px;
          line-height: 1.4;
        }
      }
      .right {
        min-width: 300px;
        max-width: 400px;
        max-height: 400px;
        margin-left: 40px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        #img_input{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
