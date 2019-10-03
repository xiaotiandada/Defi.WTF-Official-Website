

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from "./router";
Vue.use(BootstrapVue);
import store from './store'
import axios from 'axios';

import { mapState, mapActions } from 'vuex'
import { ACTION_TYPES, SC_EVENTS } from './util/constants'
import aabManager from './js/AABManager'
import monitorWeb3 from './util/web3/monitorWeb3'
import { BACKEND_SERVER_ADDRESS, CRYPTO_COMPARE_URL } from './util/constants'

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter("formatEth", function(value, decimals = 4) {
  if (!value) return "";
  var cleanedValue = parseFloat(value);
  return cleanedValue.toFixed(decimals) + "Ξ";
})

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  components: { App },
  computed: {
  },
  watch: {
    hasInjectedWeb3(web3ConnectionValue) {
      console.log('hasInjectedWeb3: ', web3ConnectionValue)
    },
    networkId(networkId) {
      console.log('networkId: ', networkId)
    },
    coinbase(coinbase) {
      console.log('main.js coinbase: ', coinbase)
    },
    $route(newRoute) {
//      this[ACTION_TYPES.CHANGE_CURRENT_ROUTE_TO](newRoute)
  //    this[ACTION_TYPES.SET_CURRENT_VIEW](newRoute)
    }
  },
  beforeCreate: function() {
    this.$store.dispatch(ACTION_TYPES.REGISTER_WEB3_INSTANCE)
      .then((result) => {
        let state = result.state
        monitorWeb3(state)
        if (!(this.isDAppReady)) {
          this.$store.dispatch(ACTION_TYPES.UPDATE_DAPP_READINESS, true)
        }
      })
      .catch((result = {}) => {
        let state = result.state
        monitorWeb3(state)
        if (!(this.isDAppReady)) {
          this.$store.dispatch(ACTION_TYPES.UPDATE_DAPP_READINESS, true)
        }

        console.error(result, 'Unable to REGISTER_WEB3_INSTANCE')
      })
  },
  created: function() {
//    this[ACTION_TYPES.CHANGE_CURRENT_ROUTE_TO](this.$route)
  //  this[ACTION_TYPES.SET_CURRENT_VIEW](this.$route)
  },
  methods: {
    buyAdBoard(data) {
    },
    forkAdBoard(data) {
    },
    changePrice(data) {
    },
    changeContent(data) {
    },
    addDeposit(data) {
    },
    withdrawDeposit(data) {
    },
    // 得到总数
    async getTotalNumber() {
      let numAdBoards = await aabManager.getTotalNumAdBoards(this.$store.state);
      return numAdBoards * 1
    },
    async getAdBoardData(adId) {
      let owner = await aabManager.getOwnerOf(adId, this.$store.state)
      let data = await aabManager.getAdBoardData(adId, this.$store.state)

      data = Object.assign({}, data, { adId, owner })
      this[ACTION_TYPES.UPDATE_CURRENT_ADBOARD](data);
      return data
    },
    async getAdBoardDataId(adId) {
      let owner = await aabManager.getOwnerOf(adId, this.$store.state)
      let data = await aabManager.getAdBoardData(adId, this.$store.state)

      // console.log('adId11', adId)
      // console.log('owner11', owner)
      // console.log('data11', data)
      data = Object.assign({}, data, { adId, owner })
      // this[ACTION_TYPES.UPDATE_CURRENT_ADBOARD](data);
      return data
    },
    async getOwnerOf(adId) {
      return await aabManager.getOwnerOf(adId, this.$store.state)
    },
    async getTotalTaxIncome() {
      return await aabManager.totalTaxIncome(this.$store.state)
    },
    async getDepositAbleToWithdraw(adId) {
      return await aabManager.getDepositAbleToWithdraw(adId, this.$store.state)
    },
    async getDueDate(adId) {
      return await aabManager.getDueDate(adId, this.$store.state)
    },
    async getEthPrice() {
      return await axios.get(CRYPTO_COMPARE_URL);
    },
    async setBillboardURL(id, url) {
    },
    async getHistory(adId) {
    },
    async addHistory(adId) {
    }
  },
//  template: '<App :is-d-app-ready="isDAppReady" :current-view="currentView" />'
});

vm.$mount('#app');
