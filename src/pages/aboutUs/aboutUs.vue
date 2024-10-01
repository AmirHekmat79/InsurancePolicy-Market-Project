<template>
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
</style>
