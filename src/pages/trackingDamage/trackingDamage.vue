<template>
    <q-page >  
        <div class="row justify-center items-center">
        <h4 class="tracking-title q-mx-md"> ثبت خسارت</h4>
        <!-- <q-img width="36px" src="../icons/verify 1.svg"></q-img> -->
     </div>
     <q-form>
      <div class="row justify-center items-center q-gutter-lg q-pa-lg">
        <div class="col-md-4 col-sm-6 col-xs-12">
            <q-select rounded standout v-model="text" :options="options" >

            <template v-slot:prepend>
              <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            </template>
            <template v-slot:append>
                <label class="text-subtitle1">نوع بیمه نامه</label>
            </template>
        </q-select>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <q-input  class="Input" rounded outlined v-model="text" dir="rtl">
            <template v-slot:prepend>
              <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>

            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm">  شرکت بیمه </label>
            </template>
          </q-input>
        </div>
       <div class="col-md-4 col-sm-6 col-xs-12">
        <q-input  class="Input" rounded outlined v-model="text" dir="rtl">
            <template v-slot:prepend>
              <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>

            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm">  شماره بیمه نامه</label>
            </template>
          </q-input>
       </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <q-select rounded standout v-model="text" :options="options2">
                <template v-slot:prepend>
                  <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            </template>
            <template v-slot:append>
                <label class="text-subtitle1">نوع  خسارت</label>
            </template>
          </q-select>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <q-input  class="Input" rounded outlined v-model="text" dir="rtl">
            <template v-slot:prepend>
              <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>

            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm">  تاریخ وقوع خسارت </label>
            </template>
          </q-input>
        </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:prepend>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm">نام </label>
            </template>
          </q-input>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:prepend>
              <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm"
                >کد ملی 
              </label>
            </template>
          </q-input>
          </div>
         <div class="col-md-4 col-sm-6 col-xs-12">
            <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:prepend>
             <q-icon class="img-phone-inner" name="phone"></q-icon>
            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm"
                >تلفن همراه
              </label>
            </template>
          </q-input>
         </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:prepend>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm"
                >مشخصات بیمه شده/مورد بیمه 
              </label>
            </template>
          </q-input>
          </div>
       <div class="col-md-4 col-sm-6 col-xs-12">
        <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:prepend>
              <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="img-inner" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>



            </template>
            <template v-slot:append>
              <label class="text-subtitle1 label-font q-ml-sm"
                >توضیحات 
              </label>
            </template>
          </q-input>
       </div>
      </div>

     </q-form>
     <div class="row justify-around items-center q-my-sm">
         <q-btn class="tracking-btn text-white">ذخیره</q-btn>
         <div class="column justify-center items-center">
             <h6>بارگزاری مدارک </h6>
             <q-btn  class="tracking-btn  text-white">بارگذاری</q-btn>
         </div>
    </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "TrackingDamage",
    data(){
      return{
        model: null,
        options: [
            'بیمه ثالث خودرو', 'بیمه بدنه', 'بیمه مسئولیت  حرفه ای پزشکان و پیراپزشکان ', 'بیمه عمر و زندگی انفرادی'
        ],
        options2: [
            'جانی', 'مالی', 'سایر', 'حوادث راننده'
        ]
      }
    },
   
   
  });
  </script>
  
<style scoped>
.img-inner{
  fill: var(--q-Blue);
}
.img-phone-inner{
  color: var(--q-Blue);
}
 .tracking-btn{
    background: var(--q-Blue);
    color: #ffff;
    padding: 10px 30px;
    text-align: center !important;
   
 }
</style>
  