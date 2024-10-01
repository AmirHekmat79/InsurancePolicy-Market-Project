
<template>
  <div class="row banner-section" v-if="baseData">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-carousel
            class="rounded-borders"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide @click="openArticle(item)" v-for="(item,index) in summaryNotics" :key="index"
              :name="index"
              :img-src="item.metaMediaFileUrl"
            />
          </q-carousel>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex column justify-center items-center">
          <h1 v-if="baseData.insuranceCentrePortal" class="main-banner-title">{{ baseData.insuranceCentrePortal.title }}</h1>
          <h6 v-if="baseData.insuranceCentrePortal" class="text-subtitle-1 text-white">{{ baseData.insuranceCentrePortal.subTitle }}</h6>
        </div>
      </div>
</template>


<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BannerSection",
  components:{

  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  props: {
    data:{}
  },
  data() {
      return {
        baseData:[],
        summaryNotics:[],
      };
    },
    mounted() {
      this.baseData=this.data;
      for(var a of this.data.summaryNotics)
      {
        if(a.isSpecial==true)
        this.summaryNotics.push(a)
    }
    },
     computed: {

     },
    methods: {
      openArticle(article)
       {
         if(!article.disableLink){
           if(article.directUrl)
           {
             window.open(article.directUrl)
           }
           else
           window.open('./article/'+article.id)
         }
       }
    },

});
</script>
<style lang="scss" >
 .banner-section{
    width: 100%;
    padding:165px 150px 50px 150px;
    background: var(--q-Blue) !important;
    @media(max-width:768px){
      padding: 120px 15px 15px 15px;
    }
    @media(max-width:1200px){
      padding: 120px 50px 65px 50px;
    }
    .q-carousel{
      height: 300px;
      border-radius: 20px;
      cursor: pointer;
      // .q-carousel__control{
      //   transform: rotate(180deg) !important;
      // }
      .q-carousel__next-arrow--horizontal{
        right: unset !important;
        left: 16px !important;
      }
      .q-carousel__prev-arrow--horizontal {
         right: 16px !important;
         left: unset !important;
      }
    }
  }
</style>
