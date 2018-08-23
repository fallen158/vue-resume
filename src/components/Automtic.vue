<template>
    <div class="automtic content">
        <pre id="code-text">
            <pre id="code"></pre>
            <pre id="code2"></pre>
        </pre>
        <button @click="exitPage" class="eixtPage">退出预览</button>
    </div>
</template>


<script>
import "../assets/prism.css";
import "../assets/prism.js";

let result = `/**
 * 面试官你好，我是刘文超
 * 只用文字做自我介绍太单调了
 * 我就用代码来介绍把
 */
/**
 * 改变背景颜色
 */
 body {
    background: rgb(63,82,99);
    color: black;
 }
 .token.comment {
    color: #857F6B;
 }
/**
 * 给所有的元素加上一个过渡效果
 */
 * {
    transition: all 1s;
 }
/**
 * 样式太单调啦，我们来改变一下
 */
 #code:not(:empty) {
    overflow: auto;
    background: rgb(48, 48, 48);
    border: 1px solid #ccc;
    width: 49%;
    max-height: 56%;
    font-size: 14px;
    font-family: monos;
    padding: 10px 10px 20px;
    box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
    white-space: pre-wrap;
    outline: 0;
 }
/**
 * 接下来,把我们的代码移到右边
 */
 #code{
    transform: translateX(95%);
    position: absolute;
 }
 /**
 * 代码高亮
 */
 .token.selector      { color: #E69F0F; }
 .token.property      { color: #64D5EA; }
 .token.function      { color: #BE84F2; }
 .content             { color: #BE84F2; }
 .token.punctuation   { color: #fff; }
/**
 * 加点 3D 效果
 */
 body {
    perspective: 1000px;
 }
 #code:not(:empty) {
    transform: translateX(99%) rotateY(-10deg);
    transform-origin: right;
    max-height: 90%;
 }
/**
 * 不玩啦，我来介绍下我自己吧
 * 接下来我需要准备个编辑器
 */
#code2:not(:empty){
    width: 48%;
    padding: 10px 10px 20px;
    margin: -15px 0 0 10px;
    color: white;
    overflow: auto;
    height: 93%;
    border: 1px solid #ccc;
    background: rgb(48, 48, 48);
    box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
    white-space: pre-wrap;
    outline: 0;
    transform: rotateY(10deg);
    transform-origin: left;
 }
`;

let md = marked(
  "## 自我介绍\n\n我叫刘文超,来自江西南昌,年龄22岁,大专学历。\n" +
    "## 技能介绍\n" +
    "熟悉编写语义化HTML，结构化的CSS等.\n" +
    "熟悉使用ES5,ES6,AJAX,JSONP,CORS,jQuery等.\n" +
    "熟悉使用Vue，vuex，vue-router，生命周期，双向绑定等.\n" +
    "了解使用TypeScript，react常用的特性及JSX语法和Node.j常用的fs,http模块等.\n" +
    "## 作品\n" +
    "在线简历编辑器，高仿cnodes社区\n" +
    "Canvas画板，自动皮卡丘\n" +
    "音乐播放器,vuex搭建的猜题游戏\n" +
    "## 爱好\n" +
    "编程，吉他唱歌，看电影，旅游\n" +
    "到此结束!\n" +
    "谢谢观看。"
);

function writeCode(data, fn, time) {
  let n = 0;
  let id = setInterval(() => {
    n += 1;
    code.innerHTML = data.substring(0, n);
    code.innerHTML = Prism.highlight(data.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = data.substring(0, n);
    code.scrollTop = code.scrollHeight;
    if (n >= data.length) {
      window.clearInterval(id);
      fn.call();
    }
  }, time);
}

function writeMarkdown(markdown, time) {
  let n = 0;
  let div = setInterval(() => {
    n += 1;
    code2.innerHTML = markdown.substring(0, n);
    code2.scrollTop = code2.scrollHeight;
    if (n >= markdown.length) {
      clearInterval(div);
    }
  }, time);
}

export default {
  created() {
    writeCode(
      result,
      () => {
        writeMarkdown(md, 50);
      },
      20
    );
  },
  methods: {
    exitPage() {
      this.$router.push("/");
      window.location.reload()
    }
  }
};
</script>

<style lang="scss" scoped>
#code-text {
  height: 100vh;
  width: 100%;
}
.token.comment,
.token.property,
.token.selector,
.token.function,
.token.punctuation {
  color: black;
}
#play,
#stop {
  width: 50px;
  height: 30px;
}
.eixtPage {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 5px;
  border-radius: 4px;
  background: #e6686a;
  border: 1px solid #e6686a;
  color: white;
}
</style>
