<template>
  <q-layout>
    <div class="header-section  relative-position">
      <q-header class="q-pa-md header absolute text-white">
        <ToolbarNavigation :data="baseData" v-if="showItem" />
      </q-header>
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
         baseData:[],
         showItem:false
      };
    },
  mounted() {
      this.getPortalLandingPage();
  },
  methods: {
    getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
            //  localStorage.setItem("baseData",JSON.stringify(response.data.message));
             this.baseData=response.data.message;
             setTimeout(()=>{
             this.showItem=true;
            },1000)
            // this.setBaseData(response.data.message);
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
    //  setBaseData(data) {
    //   this.baseDataStore.setBaseData(data,true);
    // },
  },
});
</script>

<style lang="scss">

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
  margin-bottom: 24px !important;
  font-size: 30px !important;
  color:#fff;
  font-weight: 600;
}
.banner-title {
  font-weight: 900;
  width: 100%;
  padding: 10px;
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
}
@media screen and (max-width: 1200px) {
  .header {
    padding: 10px;
  }
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
@media screen and (min-width: 600px) and (max-width: 800px) {
  .sm-device-carousel {
    width: 80% !important;
  }
}
@media screen and (max-width: 600px) {
  .sm-device-carousel {
    width: 100% !important;
  }
}
</style>
