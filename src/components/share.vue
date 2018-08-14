<template>
  <div class="share"  v-cloak>
    <h2>将下面连接分享给面试官</h2>
    <textarea readonly>{{shareLink}}</textarea>
    <div class="closeShare" @click="$emit('close')">x</div>
  </div>
</template>

<script>
export default {
  props:['shareLink']
}
</script>


<style lang="scss" scoped>

.share {
    position: fixed;
    min-width: 300px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background: white;
    box-shadow: 0 0 5px black;
    padding: 30px;
}
h2{
  margin: 5px 0;
}
.share textarea {
    word-break: break-all;
    width: 100%;
    height: 5em;
    resize: none;
    padding: 0 5px ;
}

.share>.closeShare {
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 20px;
    cursor: pointer;
}
</style>
