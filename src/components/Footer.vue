<template>
  <div class="footer">
    <Eventable :mode="mode" :value="resume.logo" @edit="onEdit('logo',$event)"></Eventable>
  </div>
</template>


<script>
import Eventable from "./Eventable";
export default {
  props:["resume","mode"],
  name: "Footer",
  methods:{
    onEdit(key,value){
      this.resume[key] = value
    }
  },
  components: {
    Eventable
  }
};
</script>


<style lang="scss" scoped>
.footer {
  background: #2f2f2f;
  border: 1px solid #000;
  text-align: center;
  margin-top: 30px;
  color: #e6686a;
  font-size: 30px;
  padding: 10px 0;
}
</style>
