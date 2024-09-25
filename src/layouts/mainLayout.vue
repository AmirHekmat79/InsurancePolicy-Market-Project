<template>
  <q-layout>
    <div class="banner-section  relative-position">
      <q-header class="q-pa-md header absolute text-white">
        <ToolbarNavigation />
      </q-header>
      <div class="row descriptions">
        <div class="col-6">
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
        <div class="col-6 flex column justify-center items-center">
          <h1 v-if="baseData.insuranceCentrePortal" class="main-banner-title">{{ baseData.insuranceCentrePortal.title }}</h1>
          <h6 v-if="baseData.insuranceCentrePortal" class="text-subtitle-1 text-white">{{ baseData.insuranceCentrePortal.subTitle }}</h6>
        </div>
      </div>
    </div>
    <router-view />
    <FooterSection />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ToolbarNavigation from "src/components/header/toolbarNavigation.vue";
import FooterSection from "src/components/footer/footer.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    ToolbarNavigation,
    FooterSection,
  },
   
  data() {
      return {
         baseData:[],
         summaryNotics:[]
      };
    },
  mounted() {
      this.baseData=JSON.parse(localStorage.getItem("baseData"));
      for(var a of this.baseData.summaryNotics)
      {
        if(a.isSpecial==true)
          this.summaryNotics.push(a)
      }
      
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
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>

<style lang="scss">

.banner-section {
  background: var(--q-Blue) !important;
  background-position: center;
  background-size: center;
  width: 100%;
  min-height: 400px;
  opacity: 0/6;
  direction: rtl;
  .descriptions{
    padding:165px 150px 50px 150px;
    .q-carousel{
      height: 300px;
      border-radius: 20px;
      cursor: pointer;
      .q-carousel__control{
        transform: rotate(180deg) !important;
      }
    }
  }
}
.main-banner-title {
  margin-bottom: 24px !important;
  font-size: 30px !important;
  color:#fff;
  font-weight: 600;
}
.banner-title {
  font-weight: 900;
  width: 100%;
  padding: 10px;
}
.header {
  padding: 20px;
  width: 1280px;
  margin: auto;
  border-radius: 1000px;
  margin-top: 40px;
  background: #eeeeee;
}

@media screen and (max-width: 1400px) {
  .header {
    border-radius: 0px;
    width: 100%;
  }
}
@media screen and (max-width: 1200px) {
  .header {
    padding: 10px;
  }
}
@media screen and (max-width:990px) {
  .banner-title {
    font-weight: 900;
    font-size: 20px !important;
    margin-top: 20px;
  }
 .header{
  margin-top: 0px;
 }
  .main-banner-title {
  margin-bottom: -34px !important;
  font-size:20px !important;
  font-weight: bolder;
}
}
@media screen and (min-width: 600px) and (max-width: 800px) {
  .sm-device-carousel {
    width: 80% !important;
  }
}
@media screen and (max-width: 600px) {
  .sm-device-carousel {
    width: 100% !important;
  }
}
</style>
 