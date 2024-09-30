<template>
    <div class="our-service-container" v-if="baseData && baseData.insuranceCentrePortal"  >
       <h5 class="title">خدمات ما
      </h5>
      <span  v-html="baseData.insuranceCentrePortal.ourService">
      </span>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import services from "src/services/services";
  export default defineComponent({
    name: "OurService",
    data(){
        return{
          baseData:[],
        }
    },
    mounted(){
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
      .title{
        margin: 0px 0px 10px 0px;
        font-size: 22px;
      }
      direction: rtl;
      padding-right: 10%;
      padding-left: 10%;
      padding-top:130px;
      padding-bottom:50px;
    }
  </style>

