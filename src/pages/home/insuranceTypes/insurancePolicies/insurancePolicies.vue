<template>
    <section v-if="insurancePolicies.length" class="insurance-policies">
      <div class="row justify-center items-center">
        <div
          v-for="(item, index) in insurancePolicies"
          :key="index"
          class="text-center col-auto cards q-mx-md" @click="handleItemClick(item)"
        >
          <div class="column justify-center items-center q-my-lg">
            <q-img :src="item.iconImage" width="50px" class="img-inner"></q-img>
            <p class="item-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <q-separator class="separator" />
    </section>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services.js";

export default defineComponent({
  name: "insurancePolicies",
  data() {
    return {
      insurancePolicies: [],
    };
  },
  mounted() {
    this.getInsurancePolicies();
  },
  methods: {
    getInsurancePolicies() {
      services
        .getInsurancePolicies()
        .then((response) => {
          this.insurancePolicies = response.data.message;
          console.log(this.insurancePolicies);
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
    let url='/vuejs/#/insurancepolicy/answerSheet/'+item.questionnaireId+'/-1'+slug+'?insurancePolicyType='+item.policyType+'&isNewDesign=true';
    window.open(url);
  }
  },
});
</script>
<style lang='scss'>
.insurance-policies{
  margin-top:20px;
  padding-left: 8%;
  padding-right: 8%;
  direction: rtl;
  @media(max-width:768px){
    padding-left: 15px;
    padding-right: 15px;
  }
  .cards {
  background: none;
  width: 145px;
  height: 150px;
  margin: 5px;
  border-radius: 35px;
  border: 1px solid #eee;
  cursor: pointer;
  transition: 500ms;
  box-shadow: 5px 10px 37px rgba(31, 34, 58, 0.2);
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
