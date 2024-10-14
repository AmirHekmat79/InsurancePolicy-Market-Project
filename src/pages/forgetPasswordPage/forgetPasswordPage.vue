<template>
  <div class="form-background">
    <div class="q-my-md card-alignment bg-white">
      <div class="row justify-around wrap items-center">
        <div class="img-container col-12 col-md-6 q-pa-lg">
          <q-img src="/public/icons/undraw_forgot_password_re_hxwm.svg"></q-img>
        </div>
        <div class="form-container col-12 col-md-4 login-form-bg">
          <div class="column justify-between items-center">
            <h3 class="text-weight-bolder q-my-md"> فراموشی کلمه عبور</h3>
            <q-form class="row justify-center items-center q-mx-auto text-center q-my-md">
              <div class="col-12 q-my-md">
                <q-input class="label-right" label="(کد ملی)نام کاربری*" v-model="loginModel.nationalCode" @keypress="controlLength($event,10)" type="number" :rules="[val => (val !== null && val !== '') && val.length == 10 || 'کد ملی الزامی است و شامل 10 رقم باشد']">
                  <template v-slot:append>
                    <div class="flex justify-center items-center">
                      <q-icon class="login-icon" name="email" />
                    </div>
                  </template>
                </q-input>
              </div>
              <div class="col-12 q-my-md">
                <q-input class="col-6" :rules="[val => val !== null && val !== '' || 'الزامی می باشد']" input-style="text-align:right" v-model="loginModel.captchaCode">
                  <template v-slot:append>
                    <label class="text-subtitle2 label-font q-ml-sm q-mr-xs">کد امنیتی</label>
                    <q-icon class="login-icon" name="lock"></q-icon>
                  </template>
                </q-input>
                <span class="col-6 row justify-center items-center" style="min-width: 130px">
                  <img style="width: 100px; height: 30px;" id="base64image" v-if="captchaImage" :src="'data:image/jpeg;base64,' + captchaImage" spinner-color="primary" />
                  <q-icon style="margin-right:10px" name="refresh" class="cursor-pointer" size="sm" @click="loadCpatcha"></q-icon>
                </span>
              </div>
              <div class="col-12">
                <q-btn class="login-btn text-white q-mx-auto" type="submit" @submit="sendSms()">دریافت شناسه تغییر کلمه عبور</q-btn>
                <q-btn class="register-btn text-black q-mx-auto" @click="historyBack">بازگشت به صفحه قبل</q-btn>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { defineComponent } from "vue";
  import services from "src/services/services.js";
  export default defineComponent({
    name: "forgetPasswordPage",
    data() {
      return {
        left: true,
        loginModel:{
        email:"",
        lastName:"",
        mobile:"",
        nationalCode:"",
        representativeCode:"",
        captchaCode : "",
        termsConditionsAccept:false 
        
        },
        signUpLoading : false ,
        showOtpDialog : false ,
        captchaImage:"",
        captchaId:'',
      };
    },
    mounted(){
      this.loadCpatcha();
    },
    methods:{
      loadCpatcha() {
        try{
          this.captchaImage = "";
          services.getCaptchCode().then((response) => {   
          this.captchaImage = response.data.data.image;
          this.captchaId = response.data.data.id;
          });
        }catch(err){
          
        }
        
      },

      async sendSms(){
    if(!this.loginModel.termsConditionsAccept){
      this.$q.notify({
             color:'red',
             textColor: 'white',
             icon: 'cloud_done',
             message: "مطالعه و پذیرش قوانین و مقررات الزامی است"
          })
   }else{
      this.signUpLoading=true;
       await services.sendSms(this.loginModel.nationalCode,this.loginModel.mobile).then((response)=>{
        this.showOtpDialog=true;
        }).catch((error)=>{
         if(error.response.data.message){
         this.$q.notify({
         color:'red',
         textColor: 'white',
         icon: 'cloud_done',
         message: error.response.data.message
         })
       }
       if(error.response.data.message=="شناسه رمز شما ارسال شده است، ارسال شناسه رمز ممکن است 3 دقیقه طول بکشد"){
          this.showOtpDialog=true;
       }
         this.signUpLoading=false;
       })
      this.signUpLoading=false;
   }
  }, 
     async handleSubmit(){
      this.loading=true;
        try{
          this.model.captchaId=this.captchaId;
         let response= await services.insertRequestDemo(this.model);
         this.$q.notify({
                  color:'green-5',
                  textColor: 'white',
                  icon: 'cloud_done',
                  message:response.data.message
               })
           this.loadCpatcha();
         this.loading=false;
        }catch(error){
          console.log("this is error",error);
          if(error.response.data.message){
            this.$q.notify({
                  color:'red',
                  textColor: 'white',
                  icon: 'cloud_done',
                  message:error.response.data.message
               })
          }
          this.loadCpatcha();
          this.loading=false;
        }
      },
      historyBack(){
        window.history.back();
      },
      controlLength(event, maxlength) {
         var targetLength = event.target.value.length;
         if (event.which < 0x20) {
           return;  
         }
         if (targetLength == maxlength) {
           event.preventDefault();
         } else if (targetLength > maxlength) {
           event.target.value = event.target.value.substring(0, maxlength);
         }
       },
    }
  });
  </script>
  
  <style scoped>
  .form-background {
    background: var(--q-themeColor);
    height: 100vh;
    padding: 40px;
    
    .login-icon{
      color: var(--q-themeColor);
    }
  }
  .icon-size {
    font-size: 24px;
    color: var(--q-themeColor);
  }
  
  .login-form-bg {
    background: #fff;
  
  }
  .login-btn {
    background: var(--q-themeColor);
    width: 100%;
    padding: 8px 20px;
    margin: 30px auto;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
  }
  
  .register-btn{
    width: 100%;
    padding: 8px 20px;
    margin: 3px auto !important;
    border:2px solid var(--q-themeColor);
    outline: none;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
  }
  .card-alignment {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 1300px;
    padding: 15px;
    margin: auto;
    border-radius: 6px;
  }
  .img-container {
    width: 60%;
  }
  .form-container {
    width: 40%;
  }
  @media (max-width: 1340px) {
    .img-container {
      width: 60% !important;
    }
    .form-container {
      width: 100% !important;
    }
    .form-background {
    background: none;
    height: 100%;
    padding: 40px;
  }
  .card-alignment{
    width: 100%;
   
  }
  
  }
  
  @media screen and(min-width : 1301px){
    
  .login-form-bg{
    padding: 0px !important;
  }
  
  }
  </style>