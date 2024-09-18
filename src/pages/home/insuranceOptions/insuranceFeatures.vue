<template>
  <section class="row justify-around items-center feature-banner q-pa-md q-gutter-sm q-mt-lg">
        <div class="row justify-center items-center q-my-sm">
          
          <!-- <div>
            <LottieAnimation
            :animationData="lottieData"
            :loop="true"
            :autoplay="true"
            />
          </div> -->
        
          <div class="column justify-around items-center">
            <div class="just-click-title-container">
                <p class="just-click-title">فقط با چند کلیک <strong class="side-title">خودت رو بیمه کن</strong>!   </p>
             
              </div>
             <div class="row  reverse justify-center items-center q-my-lg ">
              <div class="text-center card  cursor-pointer " v-for="(item , index) in insuranceFeatures" :key="item.id">
              <div class="feature-img-container q-my-sm">
                      <q-img src="../../assets/life-insurance.svg" style="width: 40px"></q-img>
                       <q-badge rounded  class="number-value q-pa-sm" :label="(index + 1).toLocaleString('fa-IR')" />
                    </div>
                  <div class="row justify-center items-center">
                    <span class="feature-title text-h6">{{ item.title }}</span>
                  </div>
                </div>
             </div>
          </div>
          

        </div>
       
      </section>
    
 
  
</template>

<script>
import { defineComponent } from "vue";
// import LottieAnimation from 'src/components/lottieAnimation.vue';
// import lottieData from 'src/custom-lottie-animation.json';
export default defineComponent({
  name: "InsuranceFeatures",
  components:{
    // LottieAnimation
  },
  data() {
    return {
      insuranceFeatures: [
        { id: 1, title: "انتخاب بیمه", },
        { id: 2, title: "مشخصات  بیمه", },
        { id: 3, title: "استعلام قیمت بیمه", },
        { id: 4, title: "تایید  درخواست",  },
        { id: 5, title: "دریافت بیمه نامه ", },
      ],
      // lottieData: lottieData
    };
  },

  
});
</script>

<style scoped>
.card{
  width: 145px;
  height: 150px;
  margin: 5px;
  border-radius: 35px;
  background: #fff;
  border: 1px solid #eee;
  cursor: pointer;
}
.feature-banner {
  background: #EEEEEE;
  /* background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(204, 228, 255, 1) 16%, rgba(204, 228, 255, 1) 100%); */
  background-size: contain;
  background-position: center;
}
.fast-banner{
  width: 600px;
}


.number-value{
  font-size: 17px !important;
  background-color: var(--q-Blue);
}

.just-click-title-container {
  color: #003975;
  text-align: right;
  direction: rtl;
}
.side-title{
  color: #011e3c;
}
.just-click-title {
  font-size: 1.5rem;
  text-align: right;
  
}



@keyframes pulse-white {
    0% {
      box-shadow: 0 0 0 0 #2980b9;
    }
    100% {
      box-shadow: 0 0 0 20px transparent;
    }
  }


.feature-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:20px;
}

.feature-title {
  font-weight: bolder;
  font-size: 16px;
}

@media (max-width: 768px) {
  .feature-item {
    flex-direction: column;
    align-items: center;
  }
}

</style>