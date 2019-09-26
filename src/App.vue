<template>
  <InfoBoard class="ad0" :ad="adInfo" boardOwner="Alice" />
</template>

<script>
import InfoBoard from "./components/InfoBoard/index.vue";

import web3 from "../contracts/web3";
import auction from "../contracts/auctionInstance";
import auctionBox from "../contracts/auctionBoxInstance";

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
    // get auctionBox method: returnAllAuctions()
    auctionBox.methods
      .returnAllAuctions()
      .call()
      .then(auctions => {
        console.log(auctions);
        // set the amount of auctions
        this.amount = auctions.length;
      });
  },
  methods: {
    createAuction() {
      // get accounts
      web3.eth
        .getAccounts()
        .then(accounts => {
          // convert 'ether' to 'wei'
          const startPrice = web3.utils.toWei(this.startPrice, "ether");
          // createAuction in AuctionBox contract
          this.isLoad = true;
          return auctionBox.methods
            .createAuction(this.title, startPrice, this.description)
            .send({ from: accounts[0] });
        })
        .then(() => {
          // initialize forms
          this.isLoad = false;
          this.title = "";
          this.startPrice = "";
          this.description = "";
          // get the previous auction
          return auctionBox.methods.returnAllAuctions().call();
        })
        .then(auctions => {
          const index = auctions.length - 1;
          console.log(auctions[index]);
          // get the contract address of the previous auction
          this.auctionAddress = auctions[index];
          // set the address as the parameter
          const auctionInstance = auction(auctions[index]);
          return auctionInstance.methods.returnContents().call();
        })
        .then(lists => {
          console.log(lists);
          const auctionlists = lists;
          // convert 'wei' to 'ether'
          auctionlists[1] = web3.utils.fromWei(auctionlists[1], "ether");
          this.auctionCard = auctionlists;
          // show up the auction at the bottom of the page
          this.isShow = true;
          this.amount += 1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSubmit() {
      // convert 'ether' to 'wei'
      const bidPriceWei = web3.utils.toWei(this.bidPrice, "ether");
      // get the wallet adddress
      const fromAddress = web3.eth.accounts.givenProvider.selectedAddress;
      // set the address as the parameter
      const selectedAuction = auction(this.auctionAddress);
      this.isBid = true;
      // placeBid in Auction contract
      selectedAuction.methods
        .placeBid()
        .send({
          from: fromAddress,
          value: bidPriceWei
        })
        .then(() => {
          this.isBid = false;
          // increase the number of bidders
          this.bidders += 1;
          this.bidPrice = "";
        });
    },
    handleFinalize() {
      // get accounts
      web3.eth.getAccounts().then(accounts => {
        // set the address as the parameter
        const selectedAuction = auction(this.auctionAddress);
        this.isFin = true;
        // finalizeAuction in Auction contract
        selectedAuction.methods
          .finalizeAuction()
          .send({ from: accounts[0] })
          .then(() => {
            this.isFin = false;
            this.finalizeStatus = "finalized";
          });
      });
    }
  }
};
</script>

