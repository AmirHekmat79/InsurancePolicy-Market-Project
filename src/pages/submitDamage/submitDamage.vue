<template>
    <q-page >  
     <div class="row justify-center items-center">
        <h4 class="tracking-title q-mx-md"> ثبت و پیگیری خسارت</h4>
        <q-img width="36px" src="../icons/tracking 1.svg"></q-img>
     </div>
     <q-form class="q-my-lg">
      <div class="row justify-center items-center q-gutter-xl">
        <div class="col-md-6 col-sm-4 col-xs-8">
          <q-input  class="Input" rounded outlined v-model="text" dir="rtl">
            <template v-slot:prepend>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>


            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm"> کد رهگیری  </label>
            </template>
          </q-input>
        </div>
    
      </div>
      <q-btn class="tracking-btn">پیگیری درخواست</q-btn>
    </q-form>
   <q-card dir="rtl" class="row justify-center banner-bg items-center q-pa-md q-mt-lg rounded-borders ">
    <div class="col-md-3">
        <div class="column justify-center items-center">
        <h6 class="text-white banner-title-font">بیمه،راهی مطمئن برای کسب و کار</h6>
        <p class="text-justify sm-font-size text-white">با ما به راحتی و اطمینان کامل،کسب و کار و آینده خود را بیمه کنید.</p>

    </div>
    </div>
   <div class="col-md-4 text-center q-mr-xl" >
    <img src="../assets/health-banner.png"/>
   </div>
    <div class="col-md-3">
        <div class="column justify-center items-center q-mx-lg">
        <h6 class="text-white banner-title-font">بیمه،راهی  برای پیشگیری از خسارات </h6>
        <p class="text-justify sm-font-size text-white">اگه همین حالا خودتان را بیمه کنید، جلوی بسیاری از مشکلات غیرقابل پیش‌بینی را خواهید گرفت. به واسطه خدمات بیمه می‌توانید آرامش و آسایش به خود و خانواده‌تان هدیه کنید. </p>
    </div>
    </div>
   </q-card>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "TrackingInsurance",
    data(){
      return{
      
      }
    },
   
   
  });
  </script>
  
<style scoped>
.img-inner{
  fill: var(--q-Blue);
}
p{
    font-size: 16px;
}

.banner-bg {
  background: var(--q-Blue);
    height: auto;
    margin: 10px;
}
 .tracking-title{
    font-size: 36px !important;
 }
 .tracking-btn{
  background: var(--q-Blue);
    color: #ffff;
    margin: 40px auto !important;
    text-align: center !important;
    display: flex;
    justify-content: center;
 }
 img{
    width: 100% !important;
    margin: auto !important;
    text-align: center !important;
 }

 @media screen and (max-width : 500px) {
    .sm-font-size{
      font-size : 14px;
    }
    .banner-title-font{
        font-size:16px;
        font-weight:bolder;
    }

    h6{
       line-height: 1rem;
    }
 }
</style>
  