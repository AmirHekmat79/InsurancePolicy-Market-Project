<template>
  <div class="flex flex-center Container q-py-md">
    <section class="insurance-types-container">
      <div class="text-center column justify-center items-center">
        <h4>بازار آنلاین خرید بهترین بیمه</h4>
        <br />
        <br />
        <h5 class="insurance-type">نوع بیمه خود را انتخاب کنید</h5>
      </div>
      <div class="row justify-center  items-center q-mt-md">
       
          <InsurancePlans class="col-auto justify-center items-center" />
        <div
          v-for="(type, index) in types"
          :key="index"
          class="text-center col-auto cards q-mx-md"
        >
          <div class="column justify-center items-center q-my-lg">
            <q-img :src="type.Src" width="50px" class="img-inner"></q-img>
            <p class="insurance-name">{{ type.name }}</p>
          </div>
        </div>
        <div class="modal-btn col-auto rounded-borders" @click="fullWidth = true"
                >بیشتر...</div
              >
        
      </div>
    </section>
  </div>
  <q-dialog v-model="fullWidth" full-width>
    <q-card class="card-background">
      <q-card-section>
        <div class="text-h6 text-center rounded-borders">طرح های پیشنهادی</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <InsuranceSuggestedPlans />
      </q-card-section>

      <q-card-actions align="right" class="text-white">
        <q-btn class="bg-red-3" flat label="خروج" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
 
</template>

<script>
import { defineComponent } from "vue";
import cureInsurance from "src/assets/cure-insurance.png";
import Doctor from "src/assets/Doctor.png";
import carInsurance from "src/assets/car-insurance.png";
import thirdInsurance from "src/assets/third-insurance.png";
import InsurancePlans from "src/components/insurancePlans/insurancePlans.vue";
import InsuranceSuggestedPlans from "src/components/suggestionPlans/suggestedPlans.vue";
export default defineComponent({
  name: "InsuranceTypes",
  components: {
    InsurancePlans,
    InsuranceSuggestedPlans,
  },
  data() {
    return {
      types: [
        { name: "بیمه عمر و زندگی انفرادی", Src: cureInsurance },
        { name: "بیمه مسئولیت  حرفه ای پزشکان و پیراپزشکان", Src: Doctor },
        { name: "بیمه بدنه", Src: carInsurance },
        { name: "بیمه ثالث خودرو", Src: thirdInsurance },
      ],

      fullWidth: false,
    };
  },
});
</script>
<style scoped>
/* @media screen and (min-width: 864px) {
  .insurance-types-container {
    width: 100%;
    position: absolute;
    transform: translate(-40px, -50px);
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    z-index: 1;
    max-width: 80%;
  }
} */

/* @font-face {
    font-family: 'IRANSans';
    src: url('/fonts/IRANSansXNoEn-Bold.ttf');
} */
 .img-inner{
  fill : var(--q-Blue) !important;
 }
.Container {
  margin-top: -100px;
}
.insurance-type {
  margin: -50px;
}
h3 {
  font-weight: bolder;
  margin-top: 30px !important;
}
.cards {
  background: none;
  width: 145px;
  height: 150px;
  margin: 5px;
  /* background-color: #fff; */
  border-radius: 35px;
  border: 1px solid #ddd;
  cursor: pointer;
}
.cards:hover {
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out linear;
}
.insurance-name {
  padding: 10px 5px 0px;
  font-size: 12px;
}
.modal-btn {
  background: none;
  width: 145px;
  height: 150px;
  display:flex ;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 35px;
  border: 1px solid #ddd;
  cursor: pointer;
  direction: rtl;
}
.modal-btn:hover {
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out linear;
}
.card-background {
  background: #eceff1;
}

@media screen and (max-width : 500px){
   h5{
    font-size: 17px;
  }
  h4{
    font-size: 24px;
  }
}
</style>
