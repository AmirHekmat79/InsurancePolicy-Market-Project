<template>
    <div class="row faq-container" >
    <h5 class="col-12 text-center faq-title ">پرسش های متداول</h5>
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" style="margin:0 auto;">
          <q-radio v-for="(item, index) in faqTypes" :key="index" v-model="selectedFaqType" :val="item.id" :label="item.title" />
    </div>
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-md" style="margin:0 auto;">
    <q-list bordered class="rounded-borders main-expansion">
      <q-expansion-item v-for="(item, index) in filteredFaq" :key="index"
        :label="item.question"
      >
        <q-card>
          <q-card-section >
             <div v-html="item.answer"></div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>
  </div>
  </template>
  <script>
    import { defineComponent } from "vue";
    import services from "src/services/services";
    export default defineComponent({
        name: "commonFaq",
        data(){
            return{
              faq:[],
              faqTypes:[],
              filteredFaq:[],
              selectedFaqType:2,
            }
        },
        mounted() {
          this.init();
         },
        watch: {
         selectedFaqType() {
          this.faqTypesChanged();
         }
       },
       methods:{
         async init(){
          var response= await services.getFaq();
          this.faq=response.data.message;
          this.faqTypesChanged();
          this.faqTypes=[
                 {
                     "id": 2,
                     "title": "عمومی",
                     "extraData": null,
                     "displayOrder": null
                 },
                 {
                     "id": 3,
                     "title": "ثبت سفارش",
                     "extraData": null,
                     "displayOrder": null
                 }
              ]
         },
         faqTypesChanged() {
           let filteredFaq=this.faq.filter(item => item.questionGroupParamId==this.selectedFaqType);
           this.filteredFaq=filteredFaq;
         }
       }
    });
  </script>
  <style lang="scss">
  .faq-container{
    direction: rtl;
    padding:100px 5% 50px 5%;
  }
  .main-expansion{
    .q-item__section {
      text-align: right;
    }
  }
</style>
