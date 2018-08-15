<template>
  <div class="skills">
      <h2>更换颜色</h2>
      <ul class="row">
        <li class="cyan" @click="styleCyan"></li>
        <li class="pink" @click="stylePink"></li>
        <li class="orange" @click="styleOrange"></li>
        <li class="blue" @click="styleBlue"></li>
        <li class="green" @click="styleGreen"></li>
        <li class="yellow" @click="styleYello"></li>
      </ul>
      <div class="close" @click="$emit('close')">x</div>
  </div>
</template>


<script>
export default {
  name: "skins",
  methods: {
    styleCyan() {
      $(".el-slider__bar").css({ background: "#00d3aa" });
      $(".el-slider__button").css({ border: "2px solid #00d3aa" });
      $(".tobNavBar").css({ color: "#00d3aa" });
      $(".buttonStlye>button").css({
        background: "#00d3aa",
        border: "1px solid #00d3aa"
      });
      $(".footer").css({ color: "#00d3aa" });
      $(".item_link").css({ color: "#00d3aa" });
    },
    stylePink() {
      $(".el-slider__bar").css({ background: "pink" });
      $(".el-slider__button").css({ border: "2px solid pink" });
      $(".tobNavBar").css({ color: "pink" });
      $(".buttonStlye>button").css({
        background: "pink",
        border: "1px solid pink"
      });
      $(".footer").css({ color: "pink" });
      $(".item_link").css({ color: "pink" });
    },
     styleBlue() {
      $(".el-slider__bar").css({ background: "#409eff" });
      $(".el-slider__button").css({ border: "2px solid #409eff" });
      $(".tobNavBar").css({ color: "#409eff" });
      $(".buttonStlye>button").css({
        background: "#409eff",
        border: "1px solid #409eff"
      });
      $(".footer").css({ color: "#409eff" });
      $(".item_link").css({ color: "#409eff" });
    },
     styleGreen() {
      $(".el-slider__bar").css({ background: "#73ff33" });
      $(".el-slider__button").css({ border: "2px solid #73ff33" });
      $(".tobNavBar").css({ color: "#73ff33" });
      $(".buttonStlye>button").css({
        background: "#73ff33",
        border: "1px solid #73ff33"
      });
      $(".footer").css({ color: "#73ff33" });
      $(".item_link").css({ color: "#73ff33" });
    },
     styleOrange() {
      $(".el-slider__bar").css({ background: "#e6686a" });
      $(".el-slider__button").css({ border: "2px solid #e6686a" });
      $(".tobNavBar").css({ color: "#e6686a" });
      $(".buttonStlye>button").css({
        background: "#e6686a",
        border: "1px solid #e6686a"
      });
      $(".footer").css({ color: "#e6686a" });
      $(".item_link").css({ color: "#e6686a" });
    },
     styleYello() {
      $(".el-slider__bar").css({ background: "#ffe633" });
      $(".el-slider__button").css({ border: "2px solid #ffe633" });
      $(".tobNavBar").css({ color: "#ffe633" });
      $(".buttonStlye>button").css({
        background: "#ffe633",
        border: "1px solid #ffe633"
      });
      $(".footer").css({ color: "#ffe633" });
      $(".item_link").css({ color: "#ffe633" });
    },

  }
};
</script>


<style lang="scss" scoped>
.skills {
  height: 120px;
  position: fixed;
  min-width: 300px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  box-shadow: 0 0 5px black;
  background: white;
  h2 {
    text-align: center;
    margin-top: 10px;
  }
  .row {
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    li {
      width: 30px;
      height: 30px;
      box-shadow: 0 0 4px black;
      border-radius: 50%;
      margin-top: 20px;
    }
    .cyan {
      background: #00d3aa;
    }
    .orange {
      background: #e6686a;
    }
    .pink {
      background: pink;
    }
    .blue {
      background: #409eff;
    }
    .green {
      background: #73ff33;
    }
    .yellow {
      background: #ffe633;
    }
  }
  .close {
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: 0;
  }
}
</style>
