<template>
<section class="stuffs">
    <div class="container">
      <div class="row billboard">
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="1" alt="cover[0]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="cover" alt="cover[1]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="adlist[0]"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
      </div>
    </div>
  </section> 
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data(){
    return {
      cover: '',
      text: '',
      url1: '',
      adlist: '',
    }
  },
  computed: {
  
  },
  watch: {
    parseURL(newVal) {
      let val = JSON.parse(newVal)
      if (val.cover) this.cover = val.cover
      if (val.text) this.text = val.text
    }
  },
  created(){
    this.getTotalNumber();
  },
  destoryed(){
  },
  methods: {
    getHeight:function() {
    },
    getData: async function(adId) {
      let adboardData = await this.$root.getAdBoardData(adId);
      this.artName = adboardData.content;
    },
    getAdBoardData: async function(total) {
      alert(total);
      for (let i = 0; i < total; i++) {
        try {
          let res = await this.$root.getAdBoardDataId(i)
          console.log('res', res)
          // arr.push(res)
          this.adList.push(res)
        } catch (error) {
          console.log('getAdBoardDataId', error)
        }
      }
    },
    getTotalNumber: async function () {
      await this.$root.getTotalNumber().then(res => {
        this.getAdBoardData(Number(res))
      })
    }

  }
};
</script>
