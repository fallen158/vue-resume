<template>
    <div class="resume_works">
        <h1>作品展示</h1>
        <div class="project">
            <ul class="tab">
                <li v-for="tab,index in tabs" :class="{active:currenTtab === index}" @click="onTab(index)">
                    {{tab}}
                    <div @click="editTab" class="editTab" v-if="index>3">x</div>
                </li>
                <li @click="addTab">+</li>
            </ul>
            <div class="content" v-for="item,index in myWorks" v-show="index === currenTtab">
                <div class="left">                           
                    <h3>{{item}}</h3>
                    <p>简介使用ES6 class 语法，面向对象编程，利用 ajax 向豆瓣 api 发送请求，然后拿到 json 数据进行 html 拼接，并渲染到页面。使用 css3的 vw 跟 vh 属性适配移动端各种大小屏幕 此项目适配移动端，请用微信扫下面二维码。（鼠标移动在“传送链接”会</p>
                    <p>源码: </p>
                    <p>预览链接: </p>
                </div>
                <div class="right">
                    上传图像
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Eventable from './Eventable'
export default {
  name: "Works",
  components:{
      Eventable
  },
  data() {
    return {
      tabs: ["QQ音乐", "名称", "名称", "名称"],
      myWorks: ["项目名称1", "项目名称2", "项目名称", "项目名称"],
      currenTtab: 0
    };
  },
  methods: {
    onTab(index) {
      this.currenTtab = index;
    },
    addTab() {
      if (this.tabs.length < 8) {
        this.tabs.push("名称");
        this.myWorks.push("项目名称");
      } else {
        alert("不好意思，目前最多支持8个技能");
      }
    },
    editTab() {
      this.tabs.pop("名称");
      this.myWorks.pop("项目");
    },
    onEdit(key,value){
        console.log(key,value)
    }
  }
};
</script>


<style lang="scss" scoped>
.resume_works {
  border: 1px solid;
  width: 960px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
  .project {
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
      margin-top: 40px;
      .left {
        width: 400px;
        border: 1px solid;
        padding: 20px;
        h3{
            margin-bottom: 20px;
        }
      }
      .right {
        min-width: 200px;
        max-width: 400px;
        max-height: 400px;
        margin-left: 70px;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
