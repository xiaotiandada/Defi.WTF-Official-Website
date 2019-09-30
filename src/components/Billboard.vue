<template>
  <div>
    <div class="content-container  text-left">
      <div class="namecontentclassWrap1" :style="namecontentclassx1">
        <div class="namecontentclass" :style="namecontentclassx">
          <img v-if="cover" :src="cover" alt="cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Billboard',
  components: {
  },
  props: [
  ],
  data(){
    return {
      cover: '',
      text: ''
    }
  },
  computed: {
  
  },
  watch: {
    artName(newVal) {
      let val = JSON.parse(newVal)
      if (val.cover) this.cover = val.cover
      if (val.text) this.text = val.text
    }
  }
};
</script>