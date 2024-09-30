<template>
   
    <section class="insurance-types-section flex column jutify-center items-center">
      <h4 class="title" >بازار آنلاین خرید بهترین بیمه</h4>
      <h5 class="sub-title">نوع بیمه خود را انتخاب کنید</h5>
     <InsurancePolicies />
     <InsurancePlans />
     <SuggestionForms />
    </section>
</template>

<script>
import { defineComponent } from "vue";
import InsurancePolicies from "./insurancePolicies/insurancePolicies.vue"
import InsurancePlans from "./insurancePlans/insurancePlans.vue"
import SuggestionForms from "./suggestionForms/suggestionForms.vue"
export default defineComponent({
  name: "InsuranceTypes",
  components: {
     InsurancePolicies,
     InsurancePlans,
     SuggestionForms
  },
  data() {
    return {
       
    };
  },
});
</script>
<style lang="scss" >
 .insurance-types-section{
   .title{
      margin: 40px 0px 10px;
      font-size: 30px;
      @media(max-width:480px){
        font-size: 24px;
      }
   }
   .sub-title{
    margin: 10px;
    @media(max-width:480px){
        font-size: 20px;
      }
   }
 }
 

 
</style>
