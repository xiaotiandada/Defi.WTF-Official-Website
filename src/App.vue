<template>
  <div>
    <Header></Header>
    <div class="scene">
      <div class="container-sun">
        <div class="sun"></div>
        <div class="band" style="animation-delay: -0s"></div>
        <div class="band" style="animation-delay: -1s"></div>
        <div class="band" style="animation-delay: -2s"></div>
        <div class="band" style="animation-delay: -3s"></div>
        <div class="band" style="animation-delay: -4s"></div>
        <div class="band" style="animation-delay: -5s"></div>
        <div class="band" style="animation-delay: -6s"></div>
        <div class="band" style="animation-delay: -7s"></div>
        <div class="band" style="animation-delay: -8s"></div>
        <div class="band" style="animation-delay: -9s"></div>
      </div>
    </div>
    <section class="countdown" id="timer">
      <div class="container ">
        <p class="countdown-title">Activity countdown</p>
        <ul class="countdown ">
          <li>
            <span class="days">00</span>
            <p class="days_ref">days</p>
          </li>
          <li class="seperator">.</li>
          <li>
            <span class="hours">00</span>
            <p class="hours_ref">hours</p>
          </li>
          <li class="seperator">:</li>
          <li>
            <span class="minutes">00</span>
            <p class="minutes_ref">minutes</p>
          </li>
          <li class="seperator">:</li>
          <li>
            <span class="seconds">00</span>
            <p class="seconds_ref">seconds</p>
          </li>
        </ul>
      </div>
    </section>
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

    <section class="resume-section  " id="Agenda">
      <div class="container">
          <div class="section-title">
              <h2>Agenda</h2>
              <h4>Oct 7, 2019 | Osaka, Japan</h4>
              <div class="text-center mt-5">
                  <a href="https://www.eventbrite.com/e/defiwtf-tickets-72483123975" class="site-btn wow fadeInUp" data-wow-delay="0.2s">REGISTER</a>
              </div>
          </div>
          <div class="row panel" >
              <div class="col-lg-10 col-xl-9 offset-lg-2 offset-xl-2">
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>10:00-10:30</h4>
                          <p>Lightning talks</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >1. Bird's-eye view of the Ethereum DeFi Microcosm</h3>
                          <p class="panel-body">Story of DeFi, how it started, and where we stand now<br>
                              Let’s play Lego: DeFi ecosystem mapping<br>
                              DeFi East meets West</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>10:30-11:30 </h4>
                          <p>Stream of talks</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >2. Evolution of Liquidity</h3>
                          <p class="panel-body"> Liquidity Microstructure: CeFi vs. DeFi<br>
                              Evolution of the DEXes<br>
                              DeFi Liquidity Models: MMORPG, Single Player Game, and beyond</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>11:30-12:30</h4>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >3. Putting the "De" Back in DeFi</h3>
                          <p class="panel-body"> 50 Shades of Decentralization: Design Principles and Trade-offs<br>
                              DeFi Bull vs. DeFi Bear: A Debate</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>12:30-13:30</h4>
                          <p>Lightning talks</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >4. Conversation with your DeFi Investor</h3>
                          <p class="panel-body">Profiling DeFi Projects<br>
                              Valuation Models for DeFi<br>
                              Will DeFi make ETH valuable?<br>
                              Chasing Yields across Crypto Native Assets</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>13:30-14:30</h4>
                          <p>Stream of talks</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >5. Inception or Deception?</h3>
                          <p class="panel-body">The Onramp: KYCed volume vs. permissionless olume, and what's trending in DeFi UI?<br>
                              Product-Market-Fit: institutions v.s. retail, human v.s. bots v.s. other smart contracts?<br>
                              Mechanism Design: design principles and trade offs in decentralization<br>
                              Gamification: DeFi games vs. DeFi in games vs. DeFi as games<br>
                              Killer User Case: Can double-digit rates last, borrower/lender dilemma<br>
                              Road to Under-Collateralization</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>15:00-16:00</h4>
                          <p>Stream of talks</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >6. Attacks and Defenses</h3>
                          <p class="panel-body">Security : Common types of attacks in smart contracts operating on a single blockchain
                              Security : How to identify generalized attack vectors in smart contracts operating across interdependent blockchains
                              Security : Blockchain Confirmation Assurance Framework & cost of attacks across blockchains
                              Formal verification : Special considerations in formal verification of bridge smart contracts
                              Design against risk : Models of thinking, frameworks, and methodologies</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>16:00-17:00</h4>
                          <p>Stream of talks</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >7. Implications of Intra- and Inter-dependencies</h3>
                          <p class="panel-body">The DeFi Interdependency Graph : cluster and direction of dependency
                              Highly coupled systems : Failures cascading through highly interdependent or bridged blockchains
                              Economics of bridges : Case Study on Cosmos - ETH bridge
                              Security and liquidity implications of interoperable asset and bridges: MCD, tBTC, etc.</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                      <div class="resume-year">
                          <h4>17:00-18:00</h4>
                          <p>Discussion</p>
                      </div>
                      <div class="resume-text">
                          <h3 class="panel-header" >8. DeFi beyond Ethereum</h3>
                          <p class="panel-body">Implication of ETH 1.0 to 2.0 for the highly coupled DeFi stack
                              Panel: DeFi for Ethereum vs. Cosmos vs. Polkadot vs. EOS vs. Libra (Moderated by Nervos)
                              What is DeFi? Definition Revisited.</p>
                      </div>
                  </div>
                  <!-- Review item -->
                  <div class="text-center mt-5">
                      <a target="_blank"  href="https://github.com/carboclan/pm/issues/69" class="site-btn wow fadeInUp" data-wow-delay="0.2s">PROPOSE</a>
                  </div>
              </div>
          </div>
        </div>
    </section>
    
    <section class="portfolio-section spad" id="billboard">
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
    </section>
    <Billboard></Billboard>
    <section>
        <div class="container">
            <div class="row ">
                <!-- item -->
                <div class="col-md-12 mt-30 wow fadeInUp" data-wow-delay="0.2s">
                    <h2>Donation to Community ENS: defiwtf.eth</h2>
                    <p>If you love what we’re doing and want to help make it a success, consider donating!As an OG supporter, you’ll instantly enter the WTF events’ hall of fame.<br>
                        You can include a 140-word message about why you’re donating or anything you want to say to the DeFi community, and your name and comment will be displayed on community website (www.DeFi.WTF), Twitter (@WTFdao), and at the event.</p>
                </div>
                <div class="col-md-12  mt-30 wow fadeInUp" data-wow-delay="0.2s">
                    <h2>Pop-up Collective – Dissolves after 21 Days</h2>
                    <p>If you are a thinker/creative/hacker, join our pop-up collective of volunteers in preparation of that will exist for 21 days then dissolve. The collective will determine the spending of the donations and “A DeFi Billboard” proceeds, and publish the financials once the collective dissolves.<br>
                        The collective will determine which research streams gets the remaining balance. Prior to dissolving, the collective also decides whether to turn into a loosely-organized community or a more institutionalized DAO with clear governing mechanism.<br>
                        We need your brain power in helping us come up with the toughest questions that YOU care. Comment directly under this thread if you have a proposal or comments, and don’t forget to VOTE when voting period begins. More details, coming soon!<br>
                        We need more help with design and implementation of the Quadratic Voting tool, and the Harberger Taxes social experiment! (DM me @CarboClanC on GitHub or Telegram @TinaZhen)</p>
                </div>
                <div class="col-md-12 mt-30 wow fadeInUp" data-wow-delay="0.2s">
                    <h2>Propose and Vote for Agenda Topics</h2>
                    <p>We need your brain power in helping us come up with the toughest questions; the ones you* care about the most. Comment directly under this thread if you have a proposal or comment. We’ll compile suggestions for agenda items for one week. After topics are compiled and organized, we’ll hold a vote so the community gets to decide which ones will be included. So don’t forget to VOTE when voting period begins.<br>
                        We need more help with design and implementation of the Quadratic Voting tool! (DM @CarboClanC on GitHub or Telegram @TinaZhen)</p>
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
            </div>
        </div>
    </section>
    <section class="about-section spad" id="location">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 maps wow fadeInUp maps" data-wow-delay="0.3s">
                    <figure>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6563.45010563074!2d135.517705!3d34.661646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2eaba4fb607cc08!2sInternational%20House%2C%20Osaka!5e0!3m2!1sen!2sus!4v1569379742750!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </figure>
                </div>
                <div class="col-lg-6 about-text wow fadeInDown" data-wow-delay="0.5s">
                    <h4>Time: Monday, Oct 7, 2019 10:00-18:00</h4>
                    <h4>Location: International House, Osaka </h4>
                    <p>8-chōme-2-6 Uehonmachi, Tennōji-ku, Osaka, 543-0001, Japan<p>
                    <br>
                    <br>
                    <h4>DeFi.WTF will take place at the same venue as the Ethereum Lightning Talks organized by ETHPLANET. </h4>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Billboard from "./components/Billboard.vue";
import InfoBoard from "./components/InfoBoard/index.vue";


export default {
  name: "APP",
  components: { InfoBoard, Billboard, Header, Footer },
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

