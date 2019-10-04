<template>
  <a :href="person.link" target="_blank">
    <img :src="personalAvatar" class="round" :width="width"/>
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
    personalAvatar() {
      return `src/assets/img/people/${person.image}`
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
