<template>
    <div class="resume_works">
      <h1>作品展示</h1>
        <div class="project">
            <ul class="tab">
                <li v-for="tab,index in information.projects" :class="{active:currenTtab === index}" @click="onTab(index)">
                   <Eventable :mode="mode" :value="tab.name" @edit="onEdit('projects['+index+'].name',$event)"/>
                    <div @click="removeTab" class="editTab" v-if="index >=5 && mode === 'edit'" >x</div>
                </li>
                <li @click="addTab" v-if="mode === 'edit'">+</li>
            </ul>
            <ul>
              <li class="content" v-for="item,index in information.projects" v-show="index === currenTtab">
                  <div class="left">
                      <h2>
                        <Eventable :mode="mode" :value="item.name" @edit="onEdit('projects['+index+'].name',$event)"></Eventable>
                      </h2>
                      <p class="item_description">
                        <Eventable :mode="mode" :value="item.description" @edit="onEdit('projects['+index+'].description',$event)"></Eventable>
                      </p>
                      <p>
                        源码链接: <Eventable :mode="mode" :value="item.link" @edit="onEdit('projects['+index+'].link',$event)" class="item_link"></Eventable>
                      </p>
                      <p>
                        预览链接: <Eventable :mode="mode" :value="item.url" @edit="onEdit('projects['+index+'].url',$event)" class="item_link"></Eventable>
                      </p>
                  </div>
                  <div class="right" >
                    <EventImg :mode="mode" :value="item.workImage" @edit="onEdit('projects['+index+'].workImage',$event)"/>
                 </div>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Eventable from "./Eventable";
import EventImg from "./EventImg";
export default {
  name: "Works",
  props: ["information","mode"],
  data() {
    return {
      currenTtab: 0,
    };
  },
  methods: {
    onTab(index) {
      this.currenTtab = index;
    },
    addTab() {
      this.information.projects.push({ name: "项目名称" });
      this.information.projects.push({
        name: "项目名称",
        description: "项目简介",
        link: "htttps://",
        url: "https://",
        avatar: ""
      });
    },
    removeTab() {
      this.information.projects.pop();
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
    }
  },
  components: {
    Eventable,
    EventImg
  }
};
</script>


<style lang="scss" scoped>
@media print{
  h1{
    text-align: center;
  }
  .project{
    width: 700px;
  }
}
.resume_works {
  width: 960px;
  margin: 80px auto 0 auto;
  padding-bottom: 100px;
  h1 {
    text-align: center;
    margin: 40px 0;
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
        margin-top: 20px;
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
        h2 {
          margin-bottom: 20px;
        }
        .item_description {
          margin-bottom: 20px;
        }
        .item_link {
          color: #e6686a;
        }
        p {
          color: #4d4d4d;
          margin-top: 5px;
          font-size: 16px;
          line-height: 1.4;
        }
      }
    }
  }
}
</style>
