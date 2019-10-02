<template>
<section class="billboards">

    <section class="portfolio-section spad" id="billboard">
      <div class="container">
          <div class="row ">
              <div class=" wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
                  <img src="src/assets/img/wtf5.png">
              </div>
              <div class=" want wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
                  <h1>We Want You!</h1> <br>
                  <a target="_blank"  href="http://capitalbox.one/index.html#/ad/0" class="site-btn wow fadeInUp" data-wow-delay="0.2s">Buy a billboard?(Kovan Test Net)</a>
              </div>

          </div>
      </div>
    </section>

      <div class="row billboard">
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6"
          v-for="ad in adList" :key="ad.text">
          <img :src="ad.cover" alt="ADS">
          <p>{{ad.text}}</p>
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
    for (let i=0;i<10;++i) {
 //     this.adList.push("src/assets/img/wtf5.png");
      //this.adList.push("...");
    }
  },
  destroyed(){
  },
  methods: {
    getHeight:function() {
    },
    getAdBoardData: async function(total) {
      for (let i = 0; i < total; i++) {
        try {
          let res = await this.$root.getAdBoardDataId(i)
          console.log('res', res)
          if (res.content.includes(`"cover"`)) { // 只能这样判断了，不敢直接 JSON parse
            let data = JSON.parse(res.content)
            this.adList.push(data);
          } else { //有文字没图片的场合
            this.adList.push({ text: res.content, cover: "https://i.loli.net/2019/10/02/N4TzivwgLJypRb9.png" })
          }
        } catch (error) {
          console.log('getAdBoardDataId', error)
        }
      }
    },
    getTotalNumber: function () {
      this.$root.getTotalNumber().then(res => {
        console.log(`Total is ${res}`)
        this.getAdBoardData(Number(res))
      })
    }

  }
};
</script>
