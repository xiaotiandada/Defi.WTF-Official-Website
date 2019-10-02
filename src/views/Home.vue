<template>
    <div class="home">
    <section class="resume-section" id="home">
      <div class="container  ">
        <div class="row">
          <div class=" about wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
            <h2>About WTF: the Power of Asking</h2>
            <p>
              A modern resurrection of the Greek Pnyx (/nɪks/): a supportive space for open, inclusive, informed, and thoughtful exchanges of ideas, for the practice of the ancient
              art of asking the right questions to move beyond hype and arrive at knowledge.
            </p>
            <h2>DeFi.WTF pierces through the surface of decentralized finance</h2>
            <p>The first of a series of WTF events, traces the emergent DeFi stack and explores its implications through in-depth conversations with the space’s main actors.</p>
          </div>
          <div class="wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
            <img src="src/assets/img/wtf1.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="Agenda">
      <div class="container">
        <div class="row mt-4 pt-4">
          <div class="col-3 statue text-center my-auto">
            <img src="src/assets/img/marylin.png">
          </div>
          <div class="section-title mt-3 pt-5 col-6">
              <h2>Agenda</h2>
              <h5 class="font-weight-medium mt-2">Oct 7, 2019 | Osaka, Japan</h5>
              <div class="text-center mt-5">
                  <a href="https://www.eventbrite.com/e/defiwtf-tickets-72483123975" class="site-btn big wow fadeInUp" data-wow-delay="0.2s">
                    REGISTER
                  </a>
              </div>
          </div>
          <div class="col-3 statue text-center my-auto">
            <img src="src/assets/img/selfie.png">
          </div>
        </div>
          <div class="row panel pt-4 mt-5" >
              <div class="col-12  ">
                  <!-- Review item -->
                  <div v-for="(item, i) in Agenda" class="row resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="col-md-2">
                          <h5>{{item.time}}</h5>
                          <p>{{item.subtitle}}</p>
                      </div>
                      <div class="col-md-6 pointer" @click="showBody[i] = !showBody[i]">
                          <h4 class="panel-header">{{item.title}}</h4>
                          <p class="panel-body" v-html="item.body" v-show="showBody[i]"></p>
                      </div>
                      <div class="col-md-4 text-right">
                          <avatar v-for="name in item.speakers" :person="People[name]" class="mr-2"/>
                      </div>
                  </div>
                  <div class="text-center my-5">
                      <a target="_blank"  href="https://github.com/carboclan/pm/issues/69" class="site-btn big wow fadeInUp" data-wow-delay="0.2s">FIND OUT MORE</a>
                  </div>
              </div>
          </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                 <div class="col-md-12 fish-wap wow fadeInUp" data-wow-delay="0.2s">
                    <img  class="fish" src="src/assets/img/wtf3.png" >
                </div>
                <div class="col-md-12 text-center mb-5">
                  <h1 class="my-5">21-Day pop-up collective</h1>
                  <avatar v-for="item in People" :person="item" size="70" class="m-3"/>
                </div>
            </div>
        </div>
    </section>
    <section class="about-section spad red-section" id="location">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 maps wow fadeInUp maps" data-wow-delay="0.3s">
                    <figure>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6563.45010563074!2d135.517705!3d34.661646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2eaba4fb607cc08!2sInternational%20House%2C%20Osaka!5e0!3m2!1sen!2sus!4v1569379742750!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </figure>
                </div>
                <div class="col-lg-5 about-text wow fadeInDown" data-wow-delay="0.5s">
                    <h3>Monday, Oct 7, 2019<br> 10:00-18:00</h3>
                    <br>
                    <h3>Location: International House, Osaka </h3>
                    <h4 class="font-weight-light">8-chōme-2-6 Uehonmachi, Tennōji-ku, Osaka, 543-0001, Japan</h4>
                    <br>
                    <br>
                    <h6>DeFi.WTF will take place at the same venue as the Ethereum Lightning Talks organized by ETHPLANET. </h6>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="share">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.defi.wtf%2F&t=defi" class="share-facebook "><i class="fa fa-facebook"></i></a>
            <a target="_blank" href="https://twitter.com/intent/tweet?text=defi&url=https%3A%2F%2Fwww.defi.wtf%2F" class="share-twitter"><i class="fa fa-twitter"></i></a>
        </div>
    </section>
    </div>
</template>

<style scoped>
  .statue img{
    height:16em
  }
</style>

<script>
import Billboard from "../views/Billboard.vue";
import InfoBoard from "../components/InfoBoard/index.vue";
import Avatar from "../components/Avatar.vue";
import People from "../util/people.js";
import Agenda from "../util/agenda.js";

export default {
  name: "Home",
  components: { InfoBoard, Billboard, Avatar },
  data() {
    return {
      Agenda,
      People,
      showBody: [false,false,false,false,false,false,false,false],
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
