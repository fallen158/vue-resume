<template>
  <div id="app">
    <Silebar/>
    <Resume/>
  </div>
</template>

<script>
import Silebar from './components/Silebar'
import Resume from './components/Resume'
export default {
  name: 'App',
  components: {
    Silebar,Resume
  }
}


</script>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  .resume{
    flex:1;
  }
}
</style>
