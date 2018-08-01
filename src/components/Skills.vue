<template>
    <div class="resume_skill">
        <h1>个人技能</h1>
        <div class="skill_content">
            <ol >
                <li>
                  <Eventable :value="slider.name"  @edit="onEdit('name',$event)"/>
                  <el-slider tooltip-class="x" v-model="filling.value"></el-slider>
                </li>
                <li>
                  <Eventable :value="slider.name2"  @edit="onEdit('name2',$event)"/>
                  <el-slider v-model="filling.value2"></el-slider>
                </li>
                 <li>
                  <Eventable :value="slider.name3"  @edit="onEdit('name3',$event)"/>
                  <el-slider v-model="filling.value3"></el-slider>
                </li>
                <li>
                  <Eventable :value="slider.name4"  @edit="onEdit('name4',$event)"/>
                  <el-slider v-model="filling.value4"></el-slider>
                </li>
                 <li>
                  <Eventable :value="slider.name5"  @edit="onEdit('name5',$event)"/>
                  <el-slider v-model="filling.value5"></el-slider>
                </li>
                <li>
                  <Eventable :value="slider.name6"  @edit="onEdit('name6',$event)"/>
                  <el-slider v-model="filling.value6"></el-slider>
                </li>
            </ol>
        </div>
        <div class="skill_message">
            <ul v-for="item,index in abilitys.summary" :key="item.id">
                <h3>
                    <Eventable :value="item.name" @edit="onEdit('summary['+index+'].name',$event)"/>
                </h3>
                <li>
                    <Eventable :value="item.description" @edit="onEdit('summary['+index+'].description',$event)"/>
                </li>
                <li>
                   <Eventable :value="item.message" @edit="onEdit('summary['+index+'].message',$event)"/>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import Eventable from "./Eventable";
export default {
  name: "Skills",
  props: ["abilitys","slider","filling"],
  components: {
    Eventable
  },
  data() {
    return {
    };
  },
  methods: {
    onEdit(key, value) {
      this.slider[key] = value
      let reg = /\[(\d+)\]/g;
      key = key.replace(reg, (match, number) => {
        return "." + number;
      });
      let keys = key.split(".");
      let result = this.abilitys;
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          result[keys[i]] = value;
        } else {
          result = result[keys[i]];
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.resume_skill {
  width: 960px;
  margin: 50px auto;
  h1 {
    text-align: center;
  }
  .skill_content {
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    background: #fff;
    margin: 40px 0;
    ol {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
      li {
        width: 44%;
        margin: 10px;
        .progress {
          width: 100%;
          height: 5px;
          background: #fae1e1;
          border-radius: 3px;
          margin-top: 15px;
        }
      }
    }
  }
  .skill_message {
    ul {
      width: 50%;
      margin-top: 10px;
      h3 {
        font-weight: 500;
      }
      li {
        list-style: disc;
        margin: 10px 30px;
      }
    }
  }
}
</style>
