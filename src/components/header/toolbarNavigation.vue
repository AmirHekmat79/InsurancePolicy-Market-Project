
<template>
  <q-toolbar >
    <div hidden>{{counter}}</div>
    <div  v-if="isSmallDevice" class="row justify-between items-center" style="width: 98%;">
      <q-btn @click="toggleMobileMenu" round size="12px" :icon="showMobileMenu?'close':'menu'"></q-btn>
      <q-toolbar-title >
        <div class="logo-sm-container q-ml-auto q-mr-md">
          <q-img  src="/images/logo.png" width="115px"></q-img>
        </div>
      </q-toolbar-title>
      <!-- <MainMenu :currentUser="currentUser" :userIsLogin="userIsLogin" @closeMobileMenu="toggleMobileMenu" @onSignUp="showFastSignUpDialog=true" @onLogin="login()" @onLogout="logout()" v-if="showMobileMenu" />  -->
    </div>
    
    <div v-else  class="row no-wrap justify-start text-center q-mx-auto items-center q-ml-auto">
        <div style="direction: rtl;" class="navLink-container row no-wrap justify-start items-center">
          <div class="logo-container q-ml-auto flex justify-center items-center">
            <img src="/images/logo.png" width="54%"/>
          </div>
          <MainMenu />
        </div>
        <div class="login-btn-group flex justify-center items-center">
         <div v-if="userIsLogin" class="alias-name">
          <q-icon
           name="person"
           size="20px"
          >
        </q-icon>
        <span v-if="currentUser && currentUser.aliasName" class="q-ml-md">{{currentUser.aliasName}}</span>
         </div>
        
        <q-btn v-if="!userIsLogin" class="register-btn"  @click="showFastSignUpDialog=true">
          <a>ثبت نام</a>
        </q-btn>
        <q-btn v-if="userIsLogin" class="entrance-btn" @click="login"><a>{{"ورود به پورتال"}}</a></q-btn>
        <q-btn v-else class="entrance-btn" @click="login"><a>{{"ورود"}}</a></q-btn>
        <q-btn v-if="userIsLogin" class="logout-button" color="red-6" label="خروج" @click="logout()"></q-btn>
       </div>
    </div>
    <q-dialog dir="rtl" v-model="showFastSignUpDialog">
            <q-card  class="fast-registration-dialog-content" v-if="showFastSignUpDialog">
               <q-card-section class="row items-center q-pb-none" style="direction:rtl">
                 <div class="text-h6">ثبت نام</div>
                 <q-space />
                 <q-btn icon="close" flat round dense v-close-popup />
               </q-card-section>
               <q-card-section >
                   <FastSignUp @signUpSuccessful="signUpSuccessful" />
               </q-card-section>
            </q-card>
      </q-dialog>
  </q-toolbar>
</template>


<script>
import { defineComponent, ref } from "vue";
import services from "src/services/services";
import MainMenu from "src/components/menu/menu.vue"
import FastSignUp from "src/components/fastSignUp.vue"

export default defineComponent({
  name: "ToolbarNavigation",
  components:{
     MainMenu,
     FastSignUp
  },
  data() {
      return {
        showMobileMenu:false,
        hostName:"",
        showFastSignUpDialog:false,
        userIsLogin:false,
        isSmallDevice:false,
        currentUser: {},
        counter:0,
      };
    },
    mounted() {
      this.getUserInformation();
      if(this.$q.screen < 992){
        this.isSmallDevice=true;
      }
       
    },
     computed: {
      
     },
    methods: {
      toggleMobileMenu(){
        this.showMobileMenu=!this.showMobileMenu;
      },
      login()
      {
        if(this.userIsLogin){
          window.location.href='/vuejs/#/';
        }else{
          if(this.hostName=='mbime.ir'){
          location.href = 'https://server.mbime.ir/api/ApplicationBime/Rsintialize';
          }else{
            window.location.href="/vuejs/#/auth";
          }
        }
      
     },
     signUpSuccessful(){
      this.showFastSignUpDialog=false;
      this.userIsLogin=true;
      this.counter++;
      window.location.reload();
     },
     getUserInformation(){
      // this.hostName=window.location.hostname;
        this.hostName="notifaano.ir";
     if(this.hostName!=='mbime.ir'){
        var accessToken=localStorage.getItem("access_token");
        if(accessToken && accessToken!==null){
          this.userIsLogin=true;
          let currentUserString=localStorage.getItem('current_user');
          this.currentUser =  JSON.parse(currentUserString);
          this.userName=this.currentUser.aliasName;
         }
        }
      },
    gotoPortal()
     {
       window.location.href='/vuejs/#/'
     },
     async logout() {
       try {
        console.log("this is this.currentUser",this.currentUser);
        let headers={
          Authorization: JSON.parse(localStorage.getItem("access_token")),
          "x-api-key": this.currentUser?.id
        };
        await services.logout(headers);
        window.localStorage.clear();
       } catch (err) {
        throw new Error("api error" + err);
       } finally {
         window.location.reload();
       }
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
  /* width: 160px; */
  height: 40px;
  padding:0px 10px !important;
}
.register-btn {
  margin-right: 10px;
  /* width: 160px; */
  height: 40px;
  margin: 0px 10px;
  background: var(--q-Blue);
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding:0px 10px !important;
}
.logout-button{
 padding: 0px 15px !important;
 border-radius: 16px; 
}
.alias-name{
  color: #939393;
  font-size: 14px;
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
