<template>
  <div class="flex flex-center">
    <InsuranceTypes />

    <div class="column">
      <!-- <InsurancePlans /> -->
      <InsuranceFeatures />
      <!-- <InsuranceCompanies /> -->
      <ConsultRequest />
      <InsuranceNews />
      <InsuranceForm />
      <ImageGallery />
      <VideoGallery />
    </div>
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
import InsuranceForm from "./insuranceForm/insuranceForm.vue";
import InsuranceNews from "./insuranceNews/insuranceNews.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    InsuranceTypes,
    InsuranceFeatures,
    ConsultRequest,
    // InsuranceCompanies,
    VideoGallery,
    ImageGallery,
    InsuranceForm,
    InsuranceNews,
  },
});
</script>

<style scoped></style>
