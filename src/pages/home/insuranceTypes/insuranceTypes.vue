<template>
  <section id="service" class="insurance-types-section flex items-center">
    <div class="column q-mx-auto items-center">
      <h5 class="title text-white text-weight-bolder">
        بازار آنلاین خرید بهترین بیمه
      </h5>
      <h6 class="sub-title text-white">نوع بیمه خود را انتخاب کنید</h6>
    </div>
    <div class="row justify-around items-center">
      <InsurancePolicies />
      <q-btn class="modal-btn text-center" @click="showDialog = true"
        ><p dir="rtl">بیشتر...</p></q-btn
      >
    </div>

    <!-- <InsurancePlans />
    <SuggestionForms /> -->
  </section>
  <q-dialog v-model="showDialog" full-width>
    <q-card class="card-background">
      <q-card-section>
        <div class="text-h6 suggested-plans-title text-center rounded-borders">
          طرح های پیشنهادی
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <InsurancePlans />
        <SuggestionForms />
      </q-card-section>

      <q-card-actions align="right" class="text-white">
        <q-btn class="bg-red-3" flat label="خروج" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import InsurancePolicies from "./insurancePolicies/insurancePolicies.vue";
import InsurancePlans from "./insurancePlans/insurancePlans.vue";
import SuggestionForms from "./suggestionForms/suggestionForms.vue";
export default defineComponent({
  name: "InsuranceTypes",
  components: {
    InsurancePolicies,
    InsurancePlans,
    SuggestionForms,
  },
  data() {
    return { showDialog: false };
  },
});
</script>
<style lang="scss">
.modal-btn {
  // padding: 8px 26px !important;
  background: #eeeeee;
  border-radius: 45px;
  margin: auto;
}
.insurance-types-section {
  width: 100%;
  .title {
    margin: 20px 0px 10px;
    font-size: 27px;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .sub-title {
    margin: 10px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
}
</style>
