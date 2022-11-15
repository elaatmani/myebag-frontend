<template>
  <div class="pt-main pl-0 ml-0 ustify-center bg-grey-lighten-3">
    <v-container class="pr-5">
      <div class="bg-gray w-100 rounded-lg pt-10">
        <!-- first dont want it -->
        <v-row>
          <v-col cols="12" ms="4" md="8" lg="7" class="">
            <div class="w-100 bg-gray-darken-1"></div>
            <h1><img class="w-100" :src="im0" alt="image" /></h1>
            <div class="images d-lg-flex d-md-flex mb-12 justify-space-around">
              <div class="d-flex justify-space-around mb-10">
                <div>
                  <img
                    :src="im1"
                    alt="image"
                    @click="replacePhoto1"
                    class="pa-2 w-100 mr-md-5 mr-lg-5"
                  />
                </div>
                <div>
                  <img
                    :src="im2"
                    alt="image"
                    @click="replacePhoto2"
                    class="pa-2 w-100 mr-md-5"
                  />
                </div>
              </div>
              <div class="d-flex justify-space-around">
                <div>
                  <img
                    :src="im3"
                    alt="image"
                    @click="replacePhoto3"
                    class="pa-2 w-100 mr-md-5 mr-lg-5"
                  />
                </div>
                <div>
                  <img
                    :src="im4"
                    alt="image"
                    @click="replacePhoto4"
                    class="pa-2 w-100 mr-md-5"
                  />
                </div>
              </div>
            </div>
          </v-col>
          <!-- create the product infos-->
          <v-col cols="12" ms="4" md="4" lg="5" class="">
            <div class="">
              <div class="text-grey d-inline-block mr-12 mb-12">Price:</div>
              <span class="text-black-accent-3 mb-8 bole font-weight-bold">{{product.price}}</span>
            </div>
            <div class="mb-12">
              <div class="text-grey d-inline-block mr-10">Article Number:</div>
              <span class="">{{product.artNum}}</span>
            </div>
            <div class="d-lg-flex">
              <div class="mr-10 d-flex">
                <v-rating
                  density="compact"
                  class="text-yellow-darken-2 rating w-auto mr-10"
                ></v-rating>
                <div class="mt-1"><span>{{product.rating}}</span></div>
              </div>
              <!-- second dont want it -->
            </div>
            <!-- third dont wnt it -->
            <div>
              <div>
                <v-btn
                  class="mt-12 ma-lg-6 ma-md-3 mt-md-13 ma-2 mr-md-14"
                  :key="size"
                  v-for="size in sizes"
                  @click="changebtn(size)"
                  :class="{ 'bg-primary-cyan': size == selectedSize }"
                >
                  {{ size }}
                </v-btn>
              </div>
            </div>
            <div class="mt-14 d-ms-flex w-100">
              <div class="w-100">
                <v-btn
                  class="bg-primary-cyan w-md-50 w-lg-75 rounded-xl pr-md-16 pl-md-16 ml-md-16 pr-lg-16 pl-lg-16 ml-lg-16 w-75"
                  ><v-icon class="mr-2 text-grey-darken-4">mdi-cart-outline</v-icon> ADD
                  TO BAG</v-btn
                >
              </div>
              <div class="w-100">
                <v-btn
                  class="bg-red-lighten-3 rounded-xl mt-5 pr-md-16 pl-md-16 ml-md-16 pr-lg-16 pl-lg-16 ml-lg-16 w-75"
                  color=""
                  ><v-icon class="text-black mr-2">mdi-heart-outline</v-icon
                  >Favorite</v-btn
                >
              </div>
            </div>
            <div class="mt-10 mb-8">
              Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's
              sneakerhead culture. This Retro High OG version goes all in with premium
              leather, comfortable cushioning and classic design details.
            </div>
            <!-- fourth dont want it -->
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" ms="4" md="4" lg="4" class=""> </v-col>
        </v-row>

        <v-row>
          <div class="b w-100"></div>
          <v-col cols="12" ms="6" md="12" lg="12" class="d-flex justify-space-around">
            <div>
              <router-link
                to=""
                :class="text_black1"
                class="link1 text-decoration-none textshadow"
                @click="isOn11"
              >
                Information</router-link
              >
            </div>
            <!-- fifth dont want it -->
            <div>
              <router-link
                to=""
                :class="text_black4"
                class="text-decoration-none text-black textshadow"
                @click="openModal"
                >Reviews ({{reviews.length}})</router-link
              >
            </div>
          </v-col>
          <div v-if="isOn111" class="w-100 pa-10 boxshadow">
            edit esse nesciunt labore, magni error expedita tempora possimus illo est,
            sunt ullam facere nulla provident, necessitatibus sequi aliquam quidem.
          </div>
          <div v-if="isOn444">
            <!-- <teleport to=".modals" v-if="showModal"> -->
            <!-- <SuggestedProductView v-for="review in reviews" @close="openModal" :review="review" /> -->
            <div class="reviews-container">

            <ReviewCard v-for="review in reviews" :review="review" :key="review.persName" />
            </div>
            <!-- </teleport> -->
          </div>
          <div class="b2 w-100"></div>
        </v-row>
        <div class="mt-13 mb-12">
          <span class="text-primary-cyan">You Might Be Intrested In Those Products</span>
        </div>
        <div>
          <v-row>
            <div
              class="d-lg-flex d-md-flex justify-lg-space-between justify-md-space-between w-100 mb-12"
            >
              <v-col
                cols="12"
                ms="6"
                md="6"
                lg="6"
                class="d-flex justify-space-around w-100"
              >
                <div class="">
                  <img
                    src="../images/ymal1.webp"
                    alt="image"
                    class="pa-2 w-100 mr-md-5 mr-lg-5"
                  />
                  <span class="ml-2">product name</span>
                </div>
                <div class="">
                  <img
                    src="../images/ymal2.webp"
                    alt="image"
                    class="pa-2 w-100 mr-md-5 mr-lg-5"
                  />
                  <span class="ml-2">product name</span>
                </div>
              </v-col>
              <v-col
                cols="12"
                ms="6"
                md="6"
                lg="6"
                class="d-flex justify-space-around w-100"
              >
                <div class="">
                  <img
                    src="../images/ymal3.webp"
                    alt="image"
                    class="pa-2 w-100 mr-md-5 mr-lg-5"
                  />
                  <span class="ml-2">product name</span>
                </div>
                <div class="">
                  <img
                    src="../images/ymal4.webp"
                    alt="image"
                    class="pa-2 w-100 mr-md-5 mr-lg-5"
                  />
                  <span class="ml-2">product name</span>
                </div>
              </v-col>
            </div>
          </v-row>
        </div>
      </div>
      <!-- sixth is a footer its not your place -->
    </v-container>
  </div>
</template>

<script>
import ReviewCard from "@/components/product/ReviewCard.vue";
import axios from 'axios';
export default {
  props: ['itemsNum'],
  components: { ReviewCard },
  data() {
    return {
      selectedSize: "3.5Y",
      sizes: ["3.5Y", "4Y", "4.5Y", "5Y", "5.5Y", "6Y", "6.5Y", "7Y"],
      // first
      isOn1: true,
      isOn4: false,
      isOn111: true,
      isOn444: false,
      text_black1: "text-primary-cyan",
      text_black4: "text-black",
      im0: "../images/im0.jpg",
      im1: "../images/im1.webp",
      im01: "",

      im2: "../images/im2.webp",
      im02: "",

      im3: "../images/im3.webp",
      im03: "",

      im4: "../images/im4.webp",
      im04: "",
      showModal: false,
      reviews: [
        {
          persName: "Abderrahman Aamri",
          delay: "9 Nov",
          rating: 5,
          descript:
            "Had to change for 1/2 size smaller, the size of the foot entry is a bit small but they are extremely comfortable. I like Pegasus because they have always been comfortable but these are so far the best for me.",
        },
        {
          persName: "Yassine El Aatmani",
          delay: "10 Sept",
          rating: 3.4,
          descript:
            "The 20 is not only the most versatile looks-wise in the Lebron line, it's also the most comfortable. A close second would be the Lebron 2 followed by the 8. I'll be wearing my pair when Bron takes the scoring title from Kareem this season!",
        },
        {
          persName: "Nouhayla Najay",
          delay: "29 Seot",
          rating: 4.5,
          descript:
            "Not too sure why somebody would complain about how light a basketball shoe is... must not be a hooper... I love how light these are.Usually hoop in Kobes as I've only owned 1 pair of LBJ's in my life which were the 4's. If you're normally a 9 in a Kobe, go with a 9 in these LBJ's. If you want to be safe, half a size up never hurts. The quality is incredible from the traction of the shoe, to the lockdown and the support.",
        },
      ],
      product : 
      {id:1 , name:'nike Air Jordan', artNum:'ANIKE2635', price: '340$', rating : 3.4, image: 'images/im0.jpg'},
      isLoading: true
      
    };
  },
  methods: {
    changebtn(e) {
      this.selectedSize = e;
    },
    isOn11() {
      this.isOn1 = true;
      this.text_black1 = "text-primary-cyan";
      this.text_black4 = "text-black";
      this.isOn111 = true;
      this.isOn444 = false;
    },
    // seocnd
    isOn44() {},

    replacePhoto1() {
      this.im01 = this.im0;
      this.im0 = this.im1;
      this.im1 = this.im01;
    },
    replacePhoto2() {
      this.im02 = this.im0;
      this.im0 = this.im2;
      this.im2 = this.im02;
    },
    replacePhoto3() {
      this.im03 = this.im0;
      this.im0 = this.im3;
      this.im3 = this.im03;
    },
    replacePhoto4() {
      this.im04 = this.im0;
      this.im0 = this.im4;
      this.im4 = this.im04;
    },
    openModal() {
      // this.showModal = !this.showModal
      this.isOn4 = true;
      this.text_black4 = "text-primary-cyan";
      this.text_black1 = "text-black";
      this.isOn444 = true;
      this.isOn111 = false;
    },
  },
  mounted() {
    const id = this.$route.params.id
    axios.get('http://localhost:8000/product?id=' + id)
    .then(res => {

      console.log(res.data);
    })
  }
};
</script>

<style scoped>
span {
  font-weight: bold;
}
h2 {
  color: #5dc5c356 !important;
  opacity: 0.3;
  font-weight: 450 !important;
  font-size: 10rem !important;
}
.nike {
  font-weight: 500 !important;
  font-size: 2.2rem !important;
  position: absolute !important;
  margin-top: 100px;
}
.bole {
  font-weight: 500 !important;
  font-size: 1.5rem !important;
}
p {
  font-weight: bold;
}
.m {
  margin-top: -13px;
}
.ml-10 {
  font-size: larger;
}
.b {
  border-top: 3px #eee solid;
}
.b2 {
  border-bottom: 3px #eee solid;
}
#links {
  width: 60%;
  font-weight: 500 !important;
  font-size: 0.8rem !important;
}

li {
  list-style-type: none;
  font-weight: 600;
}
.con,
.text-center {
  margin-top: -36px;
  text-align: center;
}
.boxshadow {
  padding: 20px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
img {
  cursor: pointer;
  border-radius: 15px;
}
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  padding-bottom: 16px;
  display: inline-block;
  border-bottom: 1px solid #eee;
}

.reviews-container {
  max-height: 500px;
  overflow-y: scroll;
}
</style>
