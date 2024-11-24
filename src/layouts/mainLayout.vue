<template>
  <q-layout>
    <div class="header-section relative-position">
      <q-header class="q-pa-md header absolute text-white">
        <ToolbarNavigation :data="baseData" v-if="showItem" />
      </q-header>
    </div>
    <div class="side-nav" v-if="$route.path === '/'">
      <div
        class="column justify-around items-center q-px-sm q-py-xl q-gutter-xl items-center"
      >
        <!-- <q-btn
          :class="{ 'active-color': activeBtn === '' }"
          @click="scrollTo('')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img width="32px" src="icons/User.svg"></q-img>
        </q-btn>
        <q-btn
          :class="{ 'active-color': activeBtn === 'servicee' }"
          @click="scrollTo('servicee')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img width="32px" src="icons/vector.svg"></q-img>
        </q-btn> -->
        <q-btn
          :class="{ 'active-color': activeBtn === 'service' }"
          @click="scrollTo('service')"
          class="insurance-service-btn simple-rounded-border"
        >
          <q-img
            width="42px"
            :src="
              this.activeBtn === 'service'
                ? 'icons/insurance (3).svg'
                : 'icons/insurance (2) (1).svg'
            "
          ></q-img>
          <p class="text-blue-grey-7">
            {{ this.activeBtn === "service" ? "خدمات بیمه ای" : "" }}
          </p></q-btn
        >
        <q-btn
          :class="{ 'active-color': activeBtn === 'feature' }"
          @click="scrollTo('feature')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img
            width="32px"
            :src="
              this.activeBtn === 'feature'
                ? 'icons/gallery (1) (1).svg'
                : 'icons/gallery.svg'
            "
          ></q-img>
          <p class="text-blue-grey-7">
            {{ this.activeBtn === "feature" ? "مراحل" : "" }}
          </p></q-btn
        >
        <q-btn
          :class="{ 'active-color': activeBtn === 'news' }"
          @click="scrollTo('news')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img
            width="32px"
            :src="
              this.activeBtn === 'news'
                ? 'icons/speaker (1) (1).svg'
                : 'icons/speaker.svg'
            "
          ></q-img>
          <p class="text-blue-grey-7">
            {{ this.activeBtn === "news" ? " اخبار" : "" }}
          </p></q-btn
        >
        <q-btn
          :class="{ 'active-color': activeBtn === 'consult-request' }"
          @click="scrollTo('consult-request')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img
            width="32px"
            :src="
              this.activeBtn === 'consult-request'
                ? 'icons/consulting (1) 1 (1).svg'
                : 'icons/consulting.svg'
            "
          ></q-img>
          <p class="text-blue-grey-7">
            {{ this.activeBtn === "consult-request" ? "درخواست مشاوره" : "" }}
          </p></q-btn
        >

        <q-btn
          :class="{ 'active-color': activeBtn === 'reminder' }"
          @click="scrollTo('reminder')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img
            width="32px"
            :src="
              this.activeBtn === 'reminder'
                ? 'icons/reminder (1) 1 (2).svg'
                : 'icons/reminder 1.svg'
            "
          ></q-img>
          <p class="text-blue-grey-7">
            {{ this.activeBtn === "reminder" ? " تمدید بیمه نامه" : "" }}
          </p></q-btn
        >

        <q-btn
          :class="{ 'active-color': activeBtn === 'dialog' }"
          @click="scrollTo('dialog')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img
            width="32px"
            :src="
              this.activeBtn === 'dialog'
                ? 'icons/video-files (1) (1).svg'
                : 'icons/video-files.svg'
            "
          ></q-img>
          <p class="text-blue-grey-7">
            {{ this.activeBtn === "dialog" ? "گالری تصاویر" : "" }}
          </p></q-btn
        >
        <q-btn
          :class="{ 'active-color': activeBtn === 'footerSection' }"
          @click="scrollTo('footerSection')"
          class="simple-rounded-border insurance-service-btn"
        >
          <q-img
            width="32px"
            :src="
              this.activeBtn === 'footerSection'
                ? 'icons/contact (1) (2).svg'
                : 'icons/contact.svg'
            "
          ></q-img>
          <p class="text-blue-grey-7 text-subtitle1 text-weight-bolder">
            {{ this.activeBtn === "footerSection" ? "ارتباط با ما" : "" }}
          </p></q-btn
        >
      </div>
    </div>
    <router-view />
    <FooterSection :data="baseData" v-if="showItem" />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ToolbarNavigation from "src/components/header/toolbarNavigation.vue";
import FooterSection from "src/components/footer/footer.vue";
// import { useBaseDataStore } from 'src/stores/baseDataStore.js';
import services from "src/services/services";
export default defineComponent({
  name: "MainLayout",
  components: {
    ToolbarNavigation,
    FooterSection,
  },
  //  setup() {
  //   const baseDataStore = useBaseDataStore();
  //   return { baseDataStore }
  // },
  data() {
    return {
      baseData: [],
      showItem: false,
      activeBtn: "service",
    };
  },
  mounted() {
    this.getPortalLandingPage();
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    getPortalLandingPage() {
      services
        .getPortalLandingPage()
        .then((response) => {
          //  localStorage.setItem("baseData",JSON.stringify(response.data.message));
          this.baseData = response.data.message;
          setTimeout(() => {
            this.showItem = true;
          }, 1000);
          // this.setBaseData(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
    //  setBaseData(data) {
    //   this.baseDataStore.setBaseData(data,true);
    // },

    async scrollTo(section) {
      this.activeBtn = section;
      if (this.$route.path === "/") {
        const serviceSection = document.querySelector(`#${section}`);

        if (serviceSection) {
          const { top } = serviceSection.getBoundingClientRect();
          window.scrollBy({
            top: top - 50,
            left: 0,
            behavior: "smooth",
          });
        } else {
          console.warn(`Element with ID "${section}" not found.`);
        }
      } else {
        await this.$router.push("/");
        // Wait for the route to render
        await this.$nextTick();
        // await this.gotoPlans(section);
      }
    },
    // async gotoPlans(section) {
    //   this.activeBtn = section;
    //   // Wait for the next tick to ensure the component is rendered
    //   await this.$nextTick();

    //   const serviceSection = document.querySelector(`#${section}`);

    //   if (serviceSection) {
    //     const { top } = serviceSection.getBoundingClientRect();
    //     window.scrollBy({
    //       top: top - 30,
    //       left: 0,
    //       behavior: "smooth",
    //     });
    //   } else {
    //     console.warn(`Element with ID "${section}" not found in gotoPlans.`);
    //   }
    // },

    onScroll() {
      const sections = [
        "servicee",
        "service",
        "feature",
        "news",
        "consult-request",
        "reminder",
        "dialog",
        "footerSection",
      ];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (
            top <= window.innerHeight / 2 &&
            bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      this.activeBtn = currentSection;
    },
  },
});
</script>

<style lang="scss">
.side-nav {
  width: 100px;
  height: 700px;
  background: var(--q-themeColor);
  border-radius: 100px;
  position: fixed;
  top: 15%;
  left: 1%;
  z-index: 6000;
  border: 0.5px solid #ddd;
}
.insurance-service-btn {
  border-radius: 100px;
  // transition: transform 0.3s ease;
  // width: 76px;
  // height: 122px;
}
.simple-rounded-border {
  border-radius: 16px;
  // width: 150px;
  height: auto;
  font-size: 13px;
  font-weight: bolder;
}
.active-color {
  background: #fff !important;
  .insurance-service-btn {
    border-radius: 100px;
    width: 75px;
    height: 122px;
  }
}
.header-section {
  background: var(--q-themeColor) !important;
  background-position: center;
  background-size: center;
  width: 100%;
  // min-height: 400px;
  opacity: 0/6;
  direction: rtl;
}
.main-banner-title {
  // margin-bottom: 24px !important;
  font-size: 30px !important;
  color: #fff;
  font-weight: 600;
}
.banner-title {
  font-weight: 900;
  width: 100%;
  padding: 10px;
}
.header {
  padding: 20px 65px;
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
}
@media screen and (max-width: 1200px) {
  .header {
    padding: 10px;
  }
}
@media screen and (max-width: 990px) {
  .banner-title {
    font-weight: 900;
    font-size: 20px !important;
    margin-top: 20px;
  }
  .header {
    margin-top: 0px;
  }
  .main-banner-title {
    margin-bottom: -34px !important;
    font-size: 20px !important;
    font-weight: bolder;
  }
}
@media screen and (min-width: 600px) and (max-width: 800px) {
  .sm-device-carousel {
    width: 80% !important;
  }
  .side-nav {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .sm-device-carousel {
    width: 100% !important;
  }
  .side-nav {
    display: none;
  }
}
</style>
