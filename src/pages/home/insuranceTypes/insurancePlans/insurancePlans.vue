<template>
    <section v-if="insurancePlans.length" class="insurance-plans">
      <div class="row justify-center items-center">
        <div
          v-for="(item, index) in insurancePlans"
          :key="index"
          class="text-center cards" @click="handleItemClick(item)"
        >
          <div class="column justify-between items-center q-my-lg">
            <q-img :src="item.iconImage" width="60px" />
            <p class="item-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <q-separator  class="separator" />
    </section>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services.js";

export default defineComponent({
  name: "InsurancePlans",
  data() {
    return {
      insurancePlans: [],
    };
  },
  mounted() {
    this.getInsurancePlan();
  },
  methods: {
    getInsurancePlan() {
      services
        .getInsurancePlans()
        .then((response) => {
          this.insurancePlans = response.data.message;
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
    handleItemClick(item){
    let slug;
    if(item.estelamPlan_QuestionnaireSlug){
      slug="/"+item.estelamPlan_QuestionnaireSlug;
    }else{
      slug="";
    }
    let url='/vuejs/#/whitelabel/answerSheet/'+item.questionnaireId+'/-1'+slug+'?insurancePolicyType='+item.policyType;
    window.open(url);
  }
  },
});
</script>
<style lang="scss">
.insurance-plans{
  margin-top:20px;
  padding-left: 8%;
  padding-right: 8%;
  @media(max-width:768px){
    padding-left: 15px;
    padding-right: 15px;
  }
   .cards {
   width: 145px;
   height: 150px;
   margin: 10px;
   border-radius: 35px;
   border: 2px solid #48bdd5;
   cursor: pointer;
   transition: 500ms;
   .item-title{
    font-size: 13px;
    margin-top: 10px !important;
  }
  }
   .cards:hover {
     transform: translateY(-8px);
     transition: all 0.4s ease-in-out linear;
   }
   .separator{
    margin-top: 20px;
   }
}


</style>
