<template>
    <span class="eventable">
        <span v-if="!editing">{{value}}</span>
        <textarea v-show="editing" type="text" @input="triggerEdit"></textarea>
        <button @click="editing= !editing" v-if="mode === 'edit' ">edit</button>
    </span>
</template>

<script>
export default {
  name: "Eventable",
  props: ["value","mode"],
  data() {
    return {
      editing: false
    };
  },
  methods: {
    triggerEdit(e) {
      this.$emit("edit", e.target.value);
    }
  }
};
</script>

<style scoped>
.eventable {
  position: relative;

}
.eventable > button {
  display: none;
  position: absolute;
  left: 100%;
    top: 0;
}
.eventable:hover button {
  display: inline-block;
  z-index: 1;
}

textarea{
  resize: none;
}
</style>
