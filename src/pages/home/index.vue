<template>
  <div class="flex column flex-center">
      <Banner v-if="showItem" :data="data" />
      <InsuranceTypes  />
      <InsuranceFeatures  />
      <ConsultRequest  />
      <InsuranceNews v-if="showItem" :data="data"  />
      <InsuranceForm  />
      <ImageGallery v-if="showItem" :data="data" />
      <VideoGallery v-if="showItem" :data="data" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import InsuranceTypes from "./insuranceTypes/insuranceTypes.vue";
import InsuranceFeatures from "./insuranceOptions/insuranceFeatures.vue";
import ConsultRequest from "./consultRequest/consultRequest.vue";
// import InsuranceCompanies from "../components/Co-Companies/insurance-companies.vue";
import VideoGallery from "./videoGallery/videoGallery.vue";
import ImageGallery from "./imageGallery/imageGallery.vue";
import InsuranceForm from "./insurancePolicyRenewalReminder/insurancePolicyRenewalReminder.vue";
import InsuranceNews from "./insuranceNews/insuranceNews.vue";
import { useBaseDataStore } from 'src/stores/baseDataStore.js';
import Banner from 'src/components/header/banner.vue';
import services from "src/services/services";
export default defineComponent({
  name: "IndexPage",
  components: {
    InsuranceTypes,
    InsuranceFeatures,
    ConsultRequest,
    VideoGallery,
    ImageGallery,
    InsuranceForm,
     InsuranceNews,
     Banner
  },
   setup() {
    const baseDataStore = useBaseDataStore();
    return { baseDataStore }
  },
   data() {
      return {
        data:{},
        showItem:false
      };
    },
  mounted(){
    // console.log("this is BaseDataStore",this.baseDataStore.baseData);
     this.getPortalLandingPage()
  },
  methods:{
    getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
             this.data=response.data.message;
             setTimeout(()=>{
             this.showItem=true;
            },1000)
            this.setBaseData(response.data.message);
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
     setBaseData(data) {
      this.baseDataStore.setBaseData(data,true);
    },
  }
});
</script>

<style scoped></style>
