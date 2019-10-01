<template>
  <section>
          <div class="container">
                  <div class="row billboard">
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6  "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                    <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6 "> <img src="src/assets/img/wtf5.png"></div>
                  </div>
                  <div id="app"></div>
                  <div class="mt-30 row" >
                      <h3><span>"A DeFi Billboard" Harberger Taxes Social Experiment (Coming Soon)</span></h3>
                      <p>This is the only place you’ll see logos, REALLY LOUD LOGOS. We are creating “A DeFi Billboard” specifically to take shilling off the serious discussions.<br>
                          “A DeFi Billboard” is both physical and virtual: We will conduct a continuous auction for 10 display slots on www.Defi.wtf with a Harberger Tax mechanism. In a Harberger Taxation model, the buyer/advertiser sets the price, then the next buyer accepts the price, and pays a tax until he/she is bought out by another buyer, or he stops paying taxes. The tax goes to the event’s ENS address: defiwtf.eth. The proceeds will go into funding the event and funding research that comes out of the event.<br>
                          Auction starts Oct 2, 2019<br>
                          Participating in the continuous auction may result in:<br>
                          Logo showing on a virtual DeFi Billboard on DeFi.WTF website.<br>
                          Logo showing on a physical retro-style neon billboard will also be presented at the event venue based on a snapshot taken of the on-chain auction (snapshot time to be announced).<br>
                          "A DeFi Billboard" is inspired by previous experiments on Harberger Taxes:<br>
                          "This Artwork Is Always On Sale (TAIAOS)" by Simon de la Rouviere;<br>
                          Harberger Ads a 2018 ETHSanFrancisco winning hack;<br>
                          一块广告牌 An Advertisement Board by China's BES Studio;<br>
                          一块广告牌-橙皮书分叉版 An Advertisement Board- OrangePaper Edition by Chinese media OrangePaper.<br>
                          We need more help with design and implementation of the Harberger Taxes social experiment! (DM @CarboClanC on GitHub or Telegram @TinaZhen)</p>
                    </div>
                </div>
    </section>
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