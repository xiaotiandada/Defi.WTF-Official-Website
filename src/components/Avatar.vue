<template>
  <a :href="person.link" target="_blank">
    <img :src="`src/assets/img/people/${person.image}`" class="round" :width="width"/>
  </a>
</template>

<script>

export default {
  name: "Avatar",
  props: ['person', "size"],
  data() {
    return {
    }
  },
  computed: {
    image(){
      return require();
    },
    width(){
      return this.size || 50;
    }
  }
}
</script>

<style lang="css" scoped>
  .round{
    border-radius:100%;
  }
</style>
