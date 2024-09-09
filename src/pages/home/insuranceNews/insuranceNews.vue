<template>
  <div class="news-section  q-py-sm ">
   <div class="text-right q-ma-lg">
    <q-img class="shape1-img3" src="src/assets/shape1.svg" width="20px"></q-img>
   </div>
   <div class="text-right q-ma-lg">
    <q-img class="shape2-img3" src="src/assets/triangle.svg" width="20px"></q-img>
   </div>
  
    <div class="row justify-center items-center">
      
      <h6 class="section-title text-center q-mx-sm">اخبار و اطلاعیه ها</h6>
      <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
      <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
    </svg>
    </div>
    <div class="row justify-center  items-center text-center q-mt-md q-pb-md">
      <div class="carousel-container">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
         <Slide v-for="item in summaryNotics" :key="item.id">
            <q-card class="my-card flex column shadow-1">
              <q-img class="card-img" :src="item.metaMediaFileUrl">
                <div class="title absolute-bottom text-h6">{{ item.title }}</div>
              </q-img>
      
              <q-card-section class="summary" dir="rtl">
                {{ item.summary }}
              </q-card-section>
              <q-separator light />
              <q-btn class="details-btn text-center q-my-sm rounded-borders" @click="this.$router.push('/HomeBlogDetails')"
                >جزئیات بیشتر</q-btn
              >
             </q-card>
         </Slide>

         <template #addons>
           <Navigation />
           <Pagination />
         </template>
     </Carousel>
     </div>
    </div>
    <div class="shape3-img3 text-right q-ma-md">
    <q-img  src="src/assets/6.png" width="80px"></q-img>
   </div>
    <div class="shape4-img3 text-right q-ma-md">
    <q-img  src="src/assets/shape5.png" width="25px"></q-img>
   </div>
    <div class="shape6-img3 text-right q-ma-md">
    <q-img  src="src/assets/shape1.svg" width="15px"></q-img>
   </div>
    <div class="shape5-img3 text-right q-ma-md">
    <q-img  src="src/assets/shape5.png" width="26px"></q-img>
   </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default defineComponent({
  name: "InsuranceNews",
  components:{
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      baseData:[],
      summaryNotics: [
          
      ],
      settings: {
       itemsToShow: 3,
       snapAlign: 'center',
      },
      breakpoints: {
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      900: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      768: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      600: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      480: {
        itemsToShow:1,
        snapAlign: 'center',
      },
      300: {
        itemsToShow:1,
        snapAlign: 'center',
      },
    },
    };
  },
  mounted(){
    this.baseData=JSON.parse(localStorage.getItem("baseData"));
    for(let item of this.baseData.summaryNotics){
      if(!item.isSpecial){
        this.summaryNotics.push(item);
      }
    }
  }
});
</script>

<style lang="scss" >
.news-section{
  background: #eeeeee;
  background-size:cover;
  background-position: center;
  position: relative;
  margin-top: 20px;
  .section-title {
      color: #002247;
      margin: 0px 10px;
   }
  .carousel-container{
    width: calc(100% - 30%);
    max-width: 1000px;
  .carousel{
    width: 100%;
    .my-card{
     width:100%;
     text-align: center;
     margin:5px;
     height: 450px;
     .card-img {
      height: 250px;
      transition: transform 0.3s ease;
      .title{
        font-size: 12px !important;
      }
     }
     .summary{
        flex-grow:1
      }
    }
    .icon-color{
      fill: var(--q-Blue);
    }
  }
}
}
.shape1-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  bottom:10px;
}
.shape2-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:20%;
}
.shape3-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  bottom:20px;
}
.shape4-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  bottom:30px;
}
.shape5-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  top:30px;
}
.shape6-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:10px;
}

@keyframes shape-img3 {
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes shape-circle-img3 {
  0%{
    transform: translate(100px , -30px);
  }
  100%{
    transform: translateX(0px);
  }
}
 




.card-title {
  color: #002247;
  margin: 20px;
}



.card-img:hover {
  transform: scale(0.9);
  cursor: pointer;
}

.details-btn {
  background: var(--q-Blue);
  color : #ffff;
}


</style>