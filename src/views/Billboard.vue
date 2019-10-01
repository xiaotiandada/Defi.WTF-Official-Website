<template>
<section class="stuffs">
    <div class="container">
      <div class="row billboard">
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[0]" alt="adList[0]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[1]" alt="adList[1]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[2]" alt="adList[2]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[3]" alt="adList[3]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[4]" alt="adList[4]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[5]" alt="adList[5]"> </div>                
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[6]" alt="adList[6]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[7]" alt="adList[7]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[8]" alt="adList[8]"> </div>
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img :src="this.adList[9]" alt="adList[9]"> </div>                
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
      adList: [],
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
      for (let i = 0; i < total; i++) {
        try {
          let res = await this.$root.getAdBoardDataId(i)
          console.log('res', res)
          // arr.push(res)
          let val = JSON.parse(res.content).cover
          console.log(val);
          this.adList.push(val)
          console.log(this.adList);
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
