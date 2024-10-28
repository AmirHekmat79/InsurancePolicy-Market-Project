<template>
  <div v-if="summaryCards && summaryCards.length" class="policy-intruduction-section  q-py-sm ">
    <div class="row justify-center items-center">

      <h6 class="section-title text-center q-mx-sm">معرفی بیمه نامه ها</h6>
      <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#b2208b" >
      <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
    </svg>
    </div>
    <div class="row justify-center  items-center text-center q-mt-md q-pb-md">
      <div class="carousel-container">
     <Flicking  :options="{ align: 'prev'}" :plugins="plugins">
      <q-card v-for="item in summaryCards" :key="item.id" class="my-card flex column shadow-1">
        <q-img class="card-img" :src="item.metaMediaFileUrl">
          <div class="title absolute-bottom text-h6">{{ item.title }}</div>
        </q-img>

        <q-card-section class="summary" dir="rtl">
          <p>{{ item.summary }}</p>
        </q-card-section>
        <q-separator light />
        <q-btn @click="openArticle(item)" class="details-btn text-center q-my-sm rounded-borders">جزئیات بیشتر</q-btn>
       </q-card>
       <template #viewport>
         <span class="flicking-arrow-prev"></span>
         <span class="flicking-arrow-next"></span>
         <div class="flicking-pagination"></div>
       </template>

     </Flicking>
     </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
export default defineComponent({
  name: "PolicyIntroduction",
  components:{
    Flicking
  },
  props: {
    data:{}
  },
  data() {
    return {
      baseData:{},
      summaryCards: [],
      plugins: [new Arrow(),new Pagination({ type: 'bullet' })]
    };
  },
  mounted(){
    this.baseData=this.data;
    for(let item of this.baseData.summaryCards){
      if(!item.isSpecial){
        this.summaryCards.push(item);
      }
    }
  },
  methods:{
    openArticle(article)
    {
      window.open('./article/'+article.id)
    },
  }

});
</script>

<style lang="scss" >
.policy-intruduction-section{
  background: #eeeeee;
  background-size:cover;
  background-position: center;
  position: relative;
  margin-top: 20px;
  padding-top: 40px;
  width: 100%;
  .section-title {
      color: #002247;
      margin: 0px 10px;
   }
  .carousel-container{
    // width: calc(100% - 20%);
    max-width: 90%;
    .my-card{
     width:300px;
     text-align: center;
     margin:5px;
     height: 450px;
     .card-img {
      height: 250px;
      transition: transform 0.3s ease;
      .title{
        font-size: 12px !important;
      }
     }
     .summary{
        flex-grow:1;
        width: 100%;
        overflow: hidden;
        max-height: 130px;

      }
    }
    .icon-color{
      fill: var(--q-themeColor);
    }
  .flicking-arrow-prev::before, .flicking-arrow-prev::after, .flicking-arrow-next::before, .flicking-arrow-next::after {
    content: "";
    width: 16px !important;
    height: 5px !important;
    position: absolute;
    background-color: #f2a65e;
  }
}
}
.shape1-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  bottom:10px;
}
.shape2-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:20%;
}
.shape3-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  bottom:20px;
}
.shape4-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  bottom:30px;
}
.shape5-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  top:30px;
}
.shape6-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:10px;
}

@keyframes shape-img3 {
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes shape-circle-img3 {
  0%{
    transform: translate(100px , -30px);
  }
  100%{
    transform: translateX(0px);
  }
}
.card-title {
  color: #002247;
  margin: 20px;
}
.card-img:hover {
  transform: scale(0.9);
  cursor: pointer;
}
.details-btn {
  background: var(--q-themeColor);
  color : #ffff;
}
.panel{
  width: 200px;
}
</style>
