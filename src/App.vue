<template>
  <div id="app">
    <router-view name="main"/>
  </div>
</template>

<script>
export default {
  name: 'App',
}


</script>

<style lang="scss">
.app_content{
  height: 100vh;
  display: flex;
  .resume{
    flex:1;
  }
}
</style>
