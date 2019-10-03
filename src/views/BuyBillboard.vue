<template>
  <section class="portfolio-section spad" id="billboard">
    <div class="container mt-5">
      <br>
      <h5 class="red-text">This is the only place in the WTF-verse where you will see logos. REALLY LOUD LOGOS. We are creating "a DeFi billboard" specifically to take shilling off the serious discussions</h5>
      <br>
      <h5 class="white-text font-weight-regular">We will conduct a continuous auction for 10 display slots on "a DeFi billboard" with a Harberger Tax mechanism.
        The 5% tax goes to the event's ENS address <strong>defiwtf.eth</strong>. The proceeds will go into funding the event and funding research that comes out of the event. Auction starts Oct 2.</h5>
      <br><br><br>
      <img src="src/assets/img/defi-billboard.png" alt="defi-billboard" />
    </div>
    <div class="container">
        <div class="row ">
            <div class=" wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
                <img src="src/assets/img/wtf5.png">
            </div>
            <div class=" want wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
                <h1>We Want You!</h1>
            </div>
        </div>
    </div>
    <div class="container mt-4 text-center">
      <div class="row mt-4 w-100">
        <h2 class="w-100 text-center mt-4">Click on the billboard you would like to buy</h2>
      </div>
      <div class="row mt-2">
        <div v-for="(item, index) in boards" :class="['round-buy', 'pointer', selectedBoard===index ? 'selected' : '']" @click="selectedBoard = index">
          <span>{{ item.price }} <br> ETH</span>
        </div>
      </div>
    </div>
    <div class="container my-4">
      <h4 class="red-text mt-2">Current Price: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].price }}</span></h4>
      <h4 class="red-text mt-2">Current Owner: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].owner }}</span></h4>
      <h4 class="red-text mt-2">Deposit Balance: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].balance }}</span></h4>
      <h4 class="red-text mt-2">Redeemable until: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].until }}</span></h4>
      <div class="text-center my-5">
        <a class="site-btn big wow fadeInUp" style="font-size:2em; font-weight:bold" data-wow-delay="0.2s">
          Buy Now!
        </a>
      </div>
    </div>
  </section>
</template>

<style>
  .round-buy{
    border-radius: 100%;
    border: 8px solid white;
    background: #cd341f;
    color: white;
    width: 140px;
    height: 140px;
    margin: 2em;
    text-align: center;
    padding-top: 2em;
  }
  .round-buy span{
    font-size: 1.2em;
    font-weight: 600;
  }
  .round-buy.selected{
    border-color: yellow;
  }
</style>

<script>



export default {
  components: {
  },
  props: [
  ],
  data(){
    return {
      json: {},
      cover: '',
      text: '',
      url1: '',
      adList: [],
      boards: //get blockchain prices, return them in digestible format
          [
            {price: 0.2, owner: 0x000, balance: 0.5, until: '3 Oct'},
            {price: 0.12, owner: 0x000, balance: 0.5, until: '13 Oct'},
            {price: 0.23, owner: 0x000, balance: 0.5, until: '23 Oct'},
            {price: 0.4, owner: 0x000, balance: 0.5, until: '9 Oct'},
            {price: 1.2, owner: 0x000, balance: 0.5, until: '4 Oct'},
            {price: 0.2, owner: 0x000, balance: 0.5, until: '6 Oct'},
            {price: 3.2, owner: 0x000, balance: 0.5, until: '3 Oct'},
            {price: 0.2, owner: 0x000, balance: 0.5, until: '1 Oct'},
          ],
      selectedBoard: 0
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
    var ajax = require("node.ajax");
    var json = ajax("http://hk.i43.io/api/list_boards?networkId=42","GET",{
    },{'Content-Type': 'application/x-www-form-urlencoded'},"utf8")
    for (let i = 0; i < 10; i++) {
      try {
        let res = json[i];
        boards[i].price = res.price;
        boards[i].owner = res.owner;
        boards[i].deposit = res.deposit;
        boards[i].until = res.lastTaxPayTimestamp
        console.log('res', res)
        if (res.content.includes(`"cover"`)) { // 只能这样判断了，不敢直接 JSON parse
          let data = JSON.parse(res.content)
        } else { //有文字没图片的场合
          this.adList.push({ text: res.content, cover: "https://i.loli.net/2019/10/02/N4TzivwgLJypRb9.png" })
        }
      } catch (error) {
        console.log('getAdBoardDataId', error)
      }
    }
   
  },
  destoryed(){
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
