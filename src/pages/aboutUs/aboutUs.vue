<!-- <template>
  <div class="our-service-container" v-if="baseData && baseData.insuranceCentrePortal">
     <h5>درباره ما
    </h5>
    <span  v-html="baseData.insuranceCentrePortal.aboutUs">
    </span>
  </div>
</template>
  <script>
  import { defineComponent } from "vue";
  import services from "src/services/services";
  export default defineComponent({
    name: "AboutUs",
    data(){
      return{
        baseData:[]
      }
    },
    mounted() {
      this.getPortalLandingPage();
   },
   methods:{
    getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
             this.baseData=response.data.message;
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
   }
  });
  </script>

<style lang="scss">
  .our-service-container{
    padding-top: 130px;
    padding-bottom: 30px;
    direction: rtl;
    padding-right: 10%;
    padding-left: 10%;
    h5{
      margin:15px 0px;
    }
  }
</style> -->



<template>
  <div class="our-service-container"  v-if="baseData && baseData.insuranceCentrePortal" style="margin: auto !important; text-align: center;">
      <div class="row title text-right justify-start items-center q-pt-lg">
        
        <!-- <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg> -->
        <h5 class="text-right q-mx-md primary text-weight-bolder">درباره ما</h5>

      </div>
      <section dir="rtl">
        <div class="row justify-center items-center">
          <div class="col-md-6  q-mx-auto text-right">
            <span  v-html="baseData.insuranceCentrePortal?.aboutUs"></span>
         </div>
        <div class="col-md-6 q-mx-auto text-center">
          <div>
            <!-- <LottieAnimation
            :animationData="lottieData"
            :loop="true"
            style="width: 100%;"
            :autoplay="true"
            /> -->
            <q-img
        class="consult-img q-my-sm"
        src="icons/undraw_security_on_re_e491.svg"
      ></q-img>
          </div>
         </div>
        </div>
      </section>
    </div>
</template>
  <script>
  import { defineComponent } from "vue";
  // import LottieAnimation from 'src/components/lottieAnimation.vue'
  // import lottieData from 'src/About.json';
  import services from "src/services/services";
  export default defineComponent({
    name: "AboutUs",
    data(){
      return{
        baseData:[] ,
        // lottieData : lottieData
      }
    },
   components : {
      // LottieAnimation
    },
    mounted() {
      this.getPortalLandingPage();
   },
   methods:{
    getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
             this.baseData=response.data.message;
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
   }
  });
  </script>

<style lang="scss" scoped>
.consult-img {
 width:300px !important;
}
 
.primary{
  color:var(--q-themeColor);
}
  .our-service-container{
    padding-top: 130px;
    padding-bottom: 30px;
    direction: rtl;
    padding-right: 10%;
    padding-left: 10%;
    h5{
      margin:15px 0px;
    }

    
    @media screen and (max-width : 700px) {
      h5{
        font-size: 17px !important;
      }
    }
  }
</style>
