<template>
  <section class="portfolio-section spad" id="billboard">

    <div class="container">
        <div class="row ">
            <div class=" wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
                <img src="src/assets/img/wtf5.png">
            </div>
            <div class=" want wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
                <h1 class="red-text">A DeFi Billboard</h1>
                <h1>This is a Harberger Tax Social Experiment</h1>
            </div>
        </div>
    </div>

    <div class="container mt-5">
      <br>
      <h5 class="red-text">This is the only place in the WTF-verse where you will see logos. REALLY LOUD LOGOS. We are creating "a DeFi billboard" specifically to take shilling off the serious discussions</h5>
      <br>
      <h5 class="white-text font-weight-regular">We will conduct a continuous auction for 10 display slots on "a DeFi billboard" with a Harberger Tax mechanism.
        The 5% tax goes to the event's ENS address <strong>defiwtf.eth</strong>. The proceeds will go into funding the event and funding research that comes out of the event. Auction starts Oct 2.</h5>
    </div>
    <div class="container my-4">
      <div class="row my-4 w-100">
        <h2 class="w-100 text-center mt-4">Click on the billboard you would like to buy</h2>
      </div>
      <div class="row billboard">
        <div class="col-xl-1-5 col-lg-3 col-md-4  col-xs-6 col-sm-6"
          v-for="(board , index) in boards" :class="['round-buy', 'pointer', selectedBoard===index ? 'selected' : '']" :key="index"  @click="selectedBoard = index">
            <img :src="board.url.cover" alt="ADS" class="round-image">
            <!--p>{{ad.text}}</p-->
            <div class="overlay">{{ board.price }}Ξ</div>
        </div>
      </div>
    </div>

    <!--div class="container mt-4 text-center">

      <div class="row mt-2 text-center">
        <div v-for="(item, index) in boards" :class="['round-buy', 'pointer', selectedBoard===index ? 'selected' : '']" @click="selectedBoard = index">
          <span>{{ item.price }} <br> ETH</span>
        </div>
      </div>
    </div-->
    <div class="container my-4">
      <h4 class="red-text mt-2">Price: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].price }}</span></h4>
      <h4 class="red-text mt-2">Owner: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].owner }}</span></h4>
      <h4 class="red-text mt-2">Deposit: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].balance }}</span></h4>
      <h4 class="red-text mt-2">Redeemable Until: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].until }}</span></h4>
      <h4 class="red-text mt-2">URL: <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].url }}</span></h4>
      <div class="text-center my-5">
        <a @click="showModal = true" class="site-btn big wow fadeInUp" style="font-size:2em; font-weight:bold" data-wow-delay="0.2s">
          Buy Now!
        </a>
      </div>
    </div>
    <b-modal
      v-model="showModal"
      :title="`Buy Billboard #${selectedBoard}`" style="color:black"
      class="modal" centered
    >
    <div class="w-100">
      <p>lots and lots of content here</p>
      <div class="firstclass funbtnclass">
        <ul class="ulinputclass">
          <li class="liinputclass">
            <input ref="newprice" type="number" placeholder="new price in ETH">
            <button class="confirmbuttonclass" @click="changePrice">
              Change
            </button>
          </li>
        </ul>
      </div>

      <div class="firstclass funbtnclass">
        <ul class="ulinputclass">
          <li class="liinputclass">
            <input ref="depositbal" type="number" placeholder="balance in ETH">
            <button class="confirmbuttonclass" @click="depositWei">
              Deposit
            </button>
          </li>
        </ul>
      </div>
      <div class="firstclass funbtnclass">
        <ul class="ulinputclass">
          <li class="liinputclass">
            <input ref="withdrawDeposit" type="number" placeholder="balance in ETH">
            <button class="confirmbuttonclass" @click="withdrawDeposit">
              Withdraw
            </button>
          </li>
        </ul>
      </div>
    </div>
    <template v-slot:modal-footer>
      <div class="w-100 text-center">
        <b-button class="site-btn float-right font-weight-bold" @click="showModal = false">
          BUY NOW
        </b-button>
      </div>

    </template>

    </b-modal>
  </section>
</template>

<style>
  :root{
    --size: 160px;
    --border-size: 8px;
  }
  .modal .btn{
    margin: 0 !important;
  }
  .modal-header{
    color:black;
  }
  .round-buy{
    border-radius: 100%;
    border: var(--border-size) solid white;
    background: #cd341f;
    color: white;
    width: var(--size);
    height: var(--size);
    margin: 1.1em;
    text-align: center;
    padding-top: 2em;
    max-width: var(--size) !important;
    max-height: var(--size) !important;
    overflow: hidden;
  }
  .round-buy span{
    font-size: 1.2em;
    font-weight: 600;
  }
  .round-buy.selected{
    border-color: yellow;
  }
  .round-image, .round-buy img, .overlay{
    height: calc(var(--size) - (var(--border-size) * 2)) !important;
    width: calc(var(--size) - (var(--border-size) * 2)) !important;
    max-height: calc(var(--size) - (var(--border-size) * 2)) !important;
    max-width: calc(var(--size) - (var(--border-size) * 2)) !important;
    position: absolute;
    top:0;
    left: 0;
  }
  .overlay{
    background: rgba(0,0,0,0.6);
    color: white;
    padding-top: 2.2em;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
  }
  .selected .overlay{
    color: yellow;
  }
</style>

<script>

import Web3 from 'web3'
import { fromWei } from 'web3-utils';

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
      showModal: false,
      boards: //get blockchain prices, return them in digestible format
          [
            {price: 0.2, owner: 0x000, balance: 0.5, until: '3 Oct', url: ''},
            {price: 0.12, owner: 0x000, balance: 0.5, until: '13 Oct', url: ''},
            {price: 0.23, owner: 0x000, balance: 0.5, until: '23 Oct', url: ''},
            {price: 0.4, owner: 0x000, balance: 0.5, until: '9 Oct', url: ''},
            {price: 1.2, owner: 0x000, balance: 0.5, until: '4 Oct', url: ''}
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

    web3.version.getNetwork((err, netId) => {
      var ajax = require("node.ajax");
      let url = 'http://hk.i43.io/api/list_boards?networkId=' + netId;
      var json = ajax(url,"GET",{
      },{'Content-Type': 'application/x-www-form-urlencoded'},"utf8");

      for (let i = 0; i < 5; i++) {
        try {
          let res = json[i];
          this.boards[i].price = fromWei(res.price.toString(10), 'ether'); //toWei(toString(res.price), 'ether');
          this.boards[i].owner = res.owner;
          this.boards[i].deposit = res.deposit;
          this.boards[i].until = res.lastTaxPayTimestamp

          if (res.content.includes(`"cover"`)) { // 只能这样判断了，不敢直接 JSON parse
            let data = JSON.parse(res.content)
            this.adList.push(data);
            console.log(data);
            this.boards[i].url = data
          } else { //有文字没图片的场合
           // this.adList.push({ text: res.content, cover: "https://i.loli.net/2019/10/02/N4TzivwgLJypRb9.png" })
            this.boards[i].url = "none";
          }
        } catch (error) {
          console.log('getAdBoardDataId', error)
        }
      }

      switch (netId) {
        case "1":
          console.log('This is mainnet')
          break
        case "2":
          console.log('This is the deprecated Morden test network.')
          break
        case "3":
          console.log('This is the ropsten test network.')
          break
        default:
          console.log('This is an unknown network.')
      }
    })
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
