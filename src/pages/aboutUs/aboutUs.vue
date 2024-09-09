<template>
    <q-page  style="min-height:400px">  
    <div style="margin: auto !important; text-align: center;">
      <div class="row title text-center justify-center items-center">
        <span class="text-center q-mx-md text-primary text-weight-bolder">درباره ما</span>
        <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>

      </div>
      <section dir="rtl" class="q-py-lg ">
        <div class="row justify-center items-center q-pa-lg">
          <div class="col-md-4  q-mx-auto text-right">
          <p class="text-weight-bold">سامانه ایزی بیمه حاصل هم افزایی دانش کسب و کار صنعت بیمه و توانمندی فنی تیم توسعه است. شرکت آسان پردازان عصر دانش با استفاده از تجربه کارشناسان صنعت بیمه و تحلیل نیازمندیهای فعالان صنعت بیمه و با اتکا به توان تیم فنی خود اقدام به طراحی و اجراء سامانه جامع مدیریت عملکرد داخلی نمایندگان و ایجاد بستر فروش الکترونیکی بیمه مختص نمایندگان صنعت بیمه نموده است . ما در ایزی بیمه نگاهی جامع به صنعت بیمه داریم و به دنبال تسهیل و تسریع فرایندهای داخلی مراکز بیمه و بهینه سازی تعاملات و ارتباطات این مراکز با شبکه فروش و مشتریان هستیم. ایزی بیمه یک ابزار توانمندساز است که به نمایندگان و کارگزاران صنعت بیمه کمک میکند تا کیفیت خدمات خود را ارتقاء دهند و وارد فضای بیمه الکترونیک شوند.</p>
         </div>
        <div class="col-md-6 q-mx-auto text-center">
          <div>
            <LottieAnimation
            :animationData="lottieData"
            :loop="true"
            style="width: 100%;"
            :autoplay="true"
            />
          </div>
         </div>
        </div>
      </section>
    </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import LottieAnimation from '../../components/lottieAnimation.vue';
  import lottieData from 'src/About.json';
  export default defineComponent({
    name: "AboutUs",
    data(){
      return{
        lottieData : lottieData
      }
    },
    components: {
      LottieAnimation
    },
  });
  </script>
  
<style scoped>
.icon-color{
  fill: var(--q-Blue);
}
 p {
    font-size: 14px;
    line-height: 26px;
    text-align: justify;
  }

 .title span {
      font-size: 36px;
      
    }
    .title {
      text-align: center !important;
    }
    @media (max-width: 1023px) {
    .title {
      margin-top: 20px;
    }
  }
</style>
  