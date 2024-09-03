
<template>
  <q-toolbar class="text-primary text-center column justify-start items-center q-py-md">
    <div v-if="this.$q.screen.width < 992" class="row justify-between items-center" style="width: 98%;">
      <q-btn @click="toggleMobileMenu" round size="12px" :icon="showMobileMenu?'close':'menu'"></q-btn>
      <q-toolbar-title  class="text-white title-container  q-ml-auto">
        <div class="logo-sm-container q-ml-auto">
          <q-img src="../../assets/logo.png" width="115px"></q-img>
        </div>
      </q-toolbar-title>
      <MainMenu @closeMobileMenu="toggleMobileMenu" @goToLogin="goToLogin('/vuejs/#/auth')" v-if="showMobileMenu" /> 
    </div>
    
    <div v-else class="row no-wrap justify-start text-center q-mx-auto items-center q-ml-auto">
        <q-list v-if="!sidebarVisible" style="direction: rtl;" class="navLink-container row no-wrap justify-start items-center">
          <div class="logo-container q-ml-auto flex justify-center items-center">
            <img src="../../assets/logo.png" width="54%"/>
          </div>
          <MainMenu />
        </q-list>
        <div class="login-btn-group">
        <q-btn class="register-btn"  @click="showFastRegistrationDialog=true"><a>ثبت نام</a></q-btn>
        <q-btn class="entrance-btn" @click="goToLogin('/vuejs/#/auth')"><a>ورود</a></q-btn>
       </div>
    </div>
    <q-dialog dir="rtl" v-model="showFastRegistrationDialog">
            <q-card  class="fast-registration-dialog-content" v-if="showFastRegistrationDialog">
               <q-card-section class="row items-center q-pb-none" style="direction:rtl">
                 <div class="text-h6">ثبت نام</div>
                 <q-space />
                 <q-btn icon="close" flat round dense v-close-popup />
               </q-card-section>
               <q-card-section >
                <!-- @registrationSuccessful="registrationSuccessful" -->
                   <FastRegistration  />
               </q-card-section>
            </q-card>
      </q-dialog>
  </q-toolbar>
</template>


<script>
import { defineComponent, ref } from "vue";
import services from "src/services/services";
import MainMenu from "src/components/menu/menu.vue"
import FastRegistration from "src/components/fastRegistration.vue"
export default defineComponent({
  name: "ToolbarNavigation",
  components:{
     MainMenu,
     FastRegistration
  },
  data() {
      return {
        InsuranceHeaderInfo: null,
        InsuranceNavbarMenuItems: [],
        showMobileMenu:false,
        hostName:"",
        showFastRegistrationDialog:false,
      };
    },
  
    mounted() {
      this.getPolicyIntroduction();
      this.hostName=window.location.hostname;
    },
  
    methods: {
      getPolicyIntroduction() {
        services
          .getPolicyIntroduction('sabz')
          .then((response) => {
            this.InsuranceHeaderInfo = response.data.message?.insuranceCentrePortal;
            
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
      toggleMobileMenu(){
        this.showMobileMenu=!this.showMobileMenu;
      },
      goToLogin(url)
      {
      if(this.hostName=='mbime.ir'){
        location.href = 'https://server.mbime.ir/api/ApplicationBime/Rsintialize';
      }else{
        window.location.href=url;
      }
     }
    },
    computed: {
      sortedMenuItems() {
      return this.InsuranceNavbarMenuItems.filter(item => item.parentId == null).sort((a, b) => b.order - a.order)
    },
    
},
});
</script>
<style scoped>
.q-toolbar{
  min-height: unset;
  direction: rtl !important;
}
.title-container {
  margin-left : 340px !important;
  text-align: right !important;
}
.title {
  font-size: 17px;
  white-space:nowrap; 
  width:100%;
  margin-left: auto;
  font-weight: 500;
  
}
*{
  padding: 0 !important;
}
.entrance-btn {
  /* padding: 8px 50px !important; */
  background: #eee;
  color: #2980b9;
  border: 2px solid #2980b9;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  margin-left: 20px !important;
  font-size: 14px;
  font-weight: 500;
  width: 160px;
  height: 40px;
}
.register-btn {
  margin-right: 10px;
  width: 160px;
  height: 40px;
  margin-right: 10px;
  background: var(--q-Blue);
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.navLink-container {
  list-style-type: none;
}
 
.navLink-item a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
.navLink-btn {
  font-size: 14px;
}
 
a{
 text-decoration: none;
}
.sidebar-navLink-container {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-between;
}

.sidebar-login-btn-container {
  text-align: center;
}
.sidebar-navLink-item {
  margin: 5px 10px;
}
.sidebar-login-btn-container .entrance-btn {
  max-width: 100%; /* Make the buttons fill the full width */
  padding: 8px 30px !important;
  background: #eee;
  color: #2980b9;
  border: 2px solid #2980b9;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
}
.sidebar-login-btn-container .register-btn {
  /* Make the buttons fill the full width */
  padding: 8px 50px !important;
  background: var(--q-Blue);
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-weight: 500;
}

.sidebar-navLink-item a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

.sidebar-navLink-btn {
  font-size: 14px;
}
.sideBar{
  width: 200px;
  height: 100vh !important;
}
.fast-registration-dialog-content{
  padding: 15px !important;
  direction: rtl !important;
}
@media only screen and (max-width:1200px) {
   .entrance-btn,.register-btn{
     width:100px;
     margin: 0px;
   }
}
@media only screen and (max-width: 727px) {
  .title-container{
    margin-left: 200px !important;
  }

}
</style>
