<template>
    <section class="suggestion-forms" v-if="suggestionForms.length" >
      <div class="row justify-center items-center">
        <q-card
          v-for="(item, index) in suggestionForms"
          :key="index"
          class="text-center cards q-mx-md" @click="handleItemClick(item)"
        >
          <q-card-section class="column justify-between items-center flex-wrap">
            <q-img :src="item.iconImage" width="40px" />
            <p class="item-title">{{ item.title }}</p>
          </q-card-section>
        </q-card>
      </div>
    </section>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services.js";

export default defineComponent({
  name: "InsuranceSuggestedPlans",
  data() {
    return {
      suggestionForms: [],
    };
  },
  mounted() {
    this.getSuggestionForms();
  },
  methods: {
    getSuggestionForms() {
      services
        .getSuggestionForms()
        .then((response) => {
          this.suggestionForms = response.data.message;
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
    let url='/vuejs/#/insurancepolicy/answerSheet/'+item.questionnaireId+'/-1'+slug+'?insurancePolicyType='+item.policyType+"&isSuggestionForm=true&isNewDesign=true";
    window.open(url);
  }
  },
});
</script>
<style lang='scss' >
.suggestion-forms{
  margin-top:20px;
  padding-left: 8%;
  padding-right: 8%;
  direction: rtl;
  @media(max-width:768px){
    padding-left: 15px;
    padding-right: 15px;
  }
  .cards {
   width: 145px;
   height: 150px;
   margin: 10px;
   background-color: #fff;
   border-radius: 35px;
   border: 2px solid #ffdaa9;
   cursor: pointer;
   .item-title{
    font-size: 13px;
    margin-top: 10px !important;
  }
 }
  .cards:hover {
   background: #eee;
  }
}


</style>
