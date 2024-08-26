<template>
  <q-layout view=" Lpr lFf">
    <div class="banner-styles relative-position">
      <q-header class="q-pa-md header absolute text-white">
        <ToolbarNavigation />
      </q-header>
      <div
        ref="bannerTitle"
        class="absolute banner-title rounded-borders text-white row justify-center  items-center q-gutter-md"
      >
        <div
          class="q-pa-md sm-device-carousel rounded-borders"
          style="width: 40% "
        >
          <q-carousel
          class="rounded-borders"
            style="aspect-ratio: 3/1; height: auto; margin-top: 120px"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide
              :name="1"
              img-src="src/assets/637447452444242558.jpg"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </q-carousel>
        </div>
        <div class="column justify-center items-center">
          <h3 class="main-banner-title">بیمه،راه جبران خسارت</h3>
          <h6 class="text-subtitle-1">ساعات کاری از ساعت 8 صبح تا 5 عصر</h6>
        </div>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterSection />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ToolbarNavigation from "src/components/header/toolbarNavigation.vue";
import FooterSection from "src/components/footer/footer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    ToolbarNavigation,
    FooterSection,
  },
  mounted() {
    // this.TypeWritterEffect();
  },
  methods: {
    // TypeWritterEffect() {
    //   const bannerTitle = this.$refs.bannerTitle;
    //   if (!bannerTitle) return;
    //   let text = bannerTitle.textContent;
    //   bannerTitle.textContent = "";
    //   let i = 0;
    //   let timer = setInterval(() => {
    //     if (i >= text.length) {
    //       clearInterval(timer);
    //       return;
    //     }
    //     bannerTitle.textContent += text[i];
    //     i++;
    //   }, 100);
    // },
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .sm-device-carousel {
    width: 100% !important;
  }
}
@media screen and (min-width: 600px) and (max-width: 800px) {
  .sm-device-carousel {
    width: 80% !important;
  }
}
.banner-styles {
  background: var(--q-Blue) !important;
  background-position: center;
  background-size: center;
  width: 100%;
  min-height: 400px;
  opacity: 0/6;
}
.main-banner-title {
  margin-bottom: 24px !important;
  font-size: 40px !important;
}
.banner-title {
  font-weight: 900;
  width: 100%;
  padding: 10px;
  /* font-size: 50px; */
}
.header {
  padding: 20px;
  width: 1280px;
  margin: auto;
  border-radius: 1000px;
  margin-top: 40px;
  background: #eeeeee;
}

@media screen and (max-width: 1400px) {
  .header {
    border-radius: 0px;
    width: 100%;
  }
  /* .main-banner-title {
  margin-top: 20px !important;
  margin-bottom: -34px !important;
  font-size: 17px !important;
  font-weight: bolder;
} */
}
@media screen and (max-width:990px) {
  .banner-title {
    font-weight: 900;
    font-size: 20px !important;
    margin-top: 20px;
  }
 .header{
  margin-top: 0px;
 }
  .main-banner-title {
  margin-bottom: -34px !important;
  font-size:20px !important;
  font-weight: bolder;
}
}
</style>
