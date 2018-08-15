<template>
  <div class="eventImg">
    <input v-if="mode === 'edit'"  type="file" @input="triggerEdit" name="img" accept="image/*" v-show="showInput" class="files">
    <img :src="value" alt="" id="img_input" v-show="showImage">
    <div class="exitWorkImg" v-show="showWorkImg" @click="hideWorkImg">x</div>
  </div>
</template>

<script>
export default {
  name: "eventImg",
  props: ["value", "mode"],
  data() {
    return {
      showInput: true,
      showImage: true,
      showWorkImg: false
    };
  },
  methods: {
    triggerEdit(e) {
      let file = e.target.files[0];
      let render = new FileReader();
      render.readAsDataURL(file);
      render.onload = e => {
        let result = e.target.result;
        this.$emit("edit", result);
        this.showInput = false;
        this.showImage = true;
        this.showWorkImg = true;
      };
    },
    hideWorkImg() {
      this.showInput = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.eventImg {
  min-width: 300px;
  max-width: 400px;
  max-height: 400px;
  margin-left: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  border-radius: 6px;
  position: relative;
  #img_input {
    width: 100%;
    height: 100%;
    min-height: 300px;
    border-radius: 5px;
  }
  input {
    position: absolute;
    top: 45%;
    left: 20%;
  }
  .exitWorkImg {
    position: absolute;
    right: 7px;
    top: 2px;
    font-size: 24px;
    color: white;
  }
}
</style>

