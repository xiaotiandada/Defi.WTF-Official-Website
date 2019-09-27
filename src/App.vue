<template>
  <InfoBoard class="ad0" :ad="adInfo" boardOwner="Alice" />
</template>

<script>
import web3 from "../contracts/web3";
import billboard from '../contracts/billboardInstance';
import InfoBoard from "./components/InfoBoard/index.vue";

export default {
  name: "APP",
  components: { InfoBoard },
  data() {
    return {
      title: "",
      startPrice: "",
      description: "",
      amount: 0,
      auctionCard: [],
      auctionCardDev: [],
      isShow: false,
      isLoad: false,
      isBid: false,
      isFin: false,
      bidPrice: "",
      auctionAddress: "",
      bidders: 0,
      finalizeStatus: "Finalize auctioin",
      createStatus: "CREATE",
      adInfo: {
        id: "ad0",
        price: 600,
        ratio: 0.02,
        content:
          "https://wx1.sinaimg.cn/large/70eb479bly1g7d68qao4fj20f408iwnp.jpg"
      }
    };
  },
  beforeMount() {
  },
  methods: {
    buy() {     
    },
    createAuction() {
    },
    handleSubmit() {
    },
    handleFinalize() {
    }
  }
};
</script>

