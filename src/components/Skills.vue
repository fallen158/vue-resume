<template>
    <div class="resume_skill">
        <h1>个人技能</h1>
        <div class="skill_content">
            <ol>
                <li v-for="skill,index in abilitys.skills">
                    <div>
                        <Eventable :value="skill.name"  @edit="onEdit('skills['+index+'].name',$event)"/>
                        <div class="progress"></div>
                    </div>
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
                    <Eventable  :value="item.description" @edit="onEdit('summary['+index+'].messgae',$event)"/>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import Eventable from "./Eventable";
export default {
  name: "Skills",
  props: ["abilitys"],
  components: {
    Eventable
  },
  methods: {
    onEdit(key, value) {
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
