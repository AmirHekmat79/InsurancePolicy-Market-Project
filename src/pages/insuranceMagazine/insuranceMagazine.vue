<template>
  <q-page>
    <section dir="rtl" class="container">
      <div
        class="row justify-center items-center text-center reverse-wrap"
        style="align-items: stretch"
      >
        <div class="col-md-3 col-xs-12 Change-position" >
          <h5 class="text-center">مطالب جدید</h5>
          <div class="filter-title-underline1"></div>
          <div class="filter-title-underline2"></div>
          <div class="my-card curve q-mt-xl">
            <div v-for="item in magazines" :key="item.id" class="q-my-sm">
              <div class="column justify-center items-center">
                <div class="sub-blog-card">
                  <div class="row justify-around items-center">
                    <q-img
                      class="card-side-image"
                      :src="item.src"
                    ></q-img>
                    <p class="item-title q-mx-sm ">{{ item.title }}</p>
                  </div>
                  <div class="row justify-around items-center q-mr-sm q-mt-sm">
                    <p class="q-mx-sm item-date text-blue-grey-5">
                      ۲۹ تیر | ۱۴:۳۰
                    </p>
                    <q-btn
                      flat
                      class="cursor-pointer q-mx-sm text-primary"
                      @click="navigate(item)"
                      >ادامه مطلب</q-btn
                    >
                  </div>
                </div>
              </div>
              <q-separator light class="q-my-md  bg-blue-grey-11" />
            </div>
          </div>
        </div>
        <div class="col-md-9 text-center col-xs-12  q-mt-xl">
          <div class="row justify-center items-center q-px-md">
            <div
              class="col-md-5 col-sm-6 col-xs-12 card-item q-ma-sm change-img-card-width"
              v-for="item in magazines.filter((item) => item.id !== 5)"
              :key="item.id"
            >
              <q-img :src="item.src" class="card-img">
                <div class="absolute-full text-subtitle2 flex flex-center">
                  {{ item.title }}
                </div>
              </q-img>
            </div>
            <div
              class="row justify-center text-right items-center q-px-sm Cards-scroll q-pb-md"
             
            >
              <!-- <div class="col-md-3 col-xs-12"></div> -->
              <div class="col-md-12 text-right col-xs-12 change-blog-card-width" >
                <div
                  class="row justify-center items-center q-mt-lg"
                  v-for="item in magazines"
                  :key="item.id"
                >
                  <div class="col-md-12 shadow-10 rounded-borders  q-pa-md">
                    <div>
                      <div class="items-center flex no-wrap">
                        <div class="q-pr-sm">
                          <q-img
                            class="rounded-borders filter-image"
                            width="200px"
                            height="160px"
                            :src="item.src"
                          ></q-img>
                        </div>
                        <div class="q-px-md">
                          <h5>{{ item.title }}</h5>
                          <div class=" row justify-start  q-my-sm text-light-green-10">
                            <div class="text-secondary q-mx-sm">{{ currentTime }}<q-icon name="timer"></q-icon></div>
                            <div>{{ currentDate }}</div>
                          </div>
                          <div class="caption">{{ item.caption }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InsuranceMagazine",
  data() {
    return {
      magazines: [
        {
          id: 1,
          title: "بیمه مسافرتی",
          src: "src/assets/national-insurance.jpg",
          caption:
            "بیمه مسافرتی، بیمه ایست که از شما در برابر خطراتی که در طول سفر تهدیدتان میکند، محافظت میکند.",
        },
        {
          id: 2,
          title: "بیمه عمر",
          src: "src/assets/rain.png",
          caption:
            " بیمه عمر از دیدگاه حقوقی، قراردادی است که به موجب آن بیمه‌گر در مقابل دریافت حق‌بیمه از بیمه‌گذار متعهد می‌شود",
        },
        {
          id: 3,
          title: "بیمه بدنه",
          src: "src/assets/body-insurance.jpg",
          caption:
            "همچنین مزیت های دیگری نیز دارد.بیمه بدنه، بیمه‌های اختیاری است که میتواند به عنوان مکمل بیمه شخص ثالث استفاده شود.    .",
        },
        {
          id: 4,
          title: "بیمه آتش سوزی",
          src: "src/assets/fire-insurance.jpg",
          caption:
            "همچنین مزیت های دیگری نیز دارد.بیمه آتش سوزی ساختمان، بیمه‌های اختیاری است که متأسفانه لزوم خرید آن، زمانی که ...",
        },
        {
          id: 5,
          title: "بیمه شخص ثالث",
          src: "src/assets/car-insurance.jpg",
          caption:
            "همچنین مزیت های دیگری نیز دارد.بیمه شخص ثالث، طرح بیمه‌های الزامی برای دارندگان وسایل نقلیه موتوری است.",
        },
      ],

      date: new Date(),
    };
  },
  methods: {
    navigate(item) {
      this.$router.push(`/InsuranceMagazine/blog/${item.id}`);
    },
  },

  computed: {
    currentDate() {
      let currentDate = new Date();
       return currentDate.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
        

       
    },

    currentTime(){
      let currentTime = new Date();
      return currentTime = currentTime.toLocaleTimeString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
    }
  },

  // mounted() {
  //   const cardsScroll = document.querySelector('.Cards-scroll');
  //   const colMd3 = document.querySelector('.col-md-3');

  //   window.addEventListener('scroll', () => {
  //     const scrollPosition = window.scrollY + window.innerHeight;
  //     const colMd3Bottom = colMd3.offsetTop + colMd3.offsetHeight;

  //     if (scrollPosition >= colMd3Bottom) {
  //       colMd3.classList.add('.Change-position');
  //     } else {
  //       colMd3.classList.remove('.Change-position');
  //     }
  //   });
  // }
});
</script>

<style scoped>
/* .Cards-scroll {
  overflow-y: auto;
  max-height: 700px;
} */
 .filter-image{
  filter: brightness(75%);
  width:200px;
  height:160px;
 }
 .filter-image:hover{
  filter: brightness(97%);
  cursor: pointer;
 }
.curve {
  border: 2px solid #e7e5e5;
  border-radius: 4px !important;
}
.item-title {
  font-size: 14px;
}
.card-img {
  width: 100%;
  height: 260px;
  display: block;
  object-fit: cover;
  border-radius: 5px;
}
.item-date {
  font-size: 100%;
}
.sub-blog-card {
  width: 260px;
  /* padding: 8px; */
}
.Change-position{
  position: sticky !important;

}
.card-side-image {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}

h5 {
  margin-bottom: 0px !important;
}

.filter-title-underline1 {
  width: 20%;
  height: 3px;
  margin: 5px auto;
  background: #2980b9;
}
.filter-title-underline2 {
  width: 30%;
  height: 3px;
  margin: auto;
  background: #2980b9;
}

@media screen and (max-width: 1600px) {
  .sm-hidden {
    display: none;
  }
  .change-img-card-width{
    width: 100%;
  }
  .change-blog-card-width{
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
  .caption {
    font-size: 16px;
  }

  
}
@media screen and (min-width: 801px) {
  .caption {
    font-size: 16px;
    padding-bottom: 8px !important;
  }
 
}

@media screen and (max-width : 800px) {
  .filter-image{
   
    width:100px !important;
    height:100px !important;
 }
 .caption{
  font-size: 14px;
 }

 h5{
  line-height: 1rem;
  font-size: 1.1rem;
 }
}
</style>
