<template>
  <div id="app">
    <router-view name="main"/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.app_content {
  height: 100vh;
  display: flex;
  .resume {
    flex: 1;
  }
}
.el-slider__bar {
  background: #e6686a;
}
.el-slider__button {
  border: 2px solid #e6686a;
}
</style>
