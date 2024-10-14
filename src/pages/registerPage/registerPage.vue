<template>
  <div class="form-background">
    <div class="q-my-sm card-alignment bg-white">
      <div class="row justify-around wrap items-center">
        <div class="img-container col-12 col-md-6  q-pa-sm">
          <q-img src="/public/icons/undraw_online_ad_re_ol62.svg"></q-img>
        </div>
        <div class="form-container col-12 col-md-4  login-form-bg">
          <div class="column justify-between items-center">
            <h4 class="text-weight-bolder">ثبت نام کنید</h4>
            <!-- <h6 dir="rtl" class="text-weight-bold q-my-sm"> اطلاعات خود را وارد کنید ...</h6> -->
            <q-form @submit="sendSms()" class="row justify-center items-center q-mx-auto text-center q-my-sm">
                <div class="col-12">
                  <q-input class="label-right" label="نام*"   v-model="registerationModel.firstName"
                    :rules="[val => val !== null && val !== undefined  && val !== '' || ' الزامی است']">
                  <template v-slot:append>
                    <div class="flex justify-center items-center">
                      <q-icon class="register-icon" name="perm_identity" />
                    </div>
                  </template>
                </q-input>
                </div>
                <div class="col-12 q-my-md">
                        <q-input class="label-right" label="نام خانوادگی*"   v-model="registerationModel.lastName"
                    :rules="[val => val !== null && val !== undefined  && val !== '' || ' الزامی است']">
                    <template v-slot:append>
                        <div class="flex justify-center items-center">
                          <q-icon class="register-icon" name="perm_identity" />
                        </div>
                    </template>
                </q-input>
                </div>
              <div class="col-12 q-my-md">
                <q-input class="label-right" label="کد ملی*"  v-model="registerationModel.nationalCode"
                      @keypress="controlLength($event,10)"
                      type="number"  
                      :rules="[ 
                          val => 
                          (val !== null && val !== '') && val.length == 10 || 'کد ملی الزامی است و شامل 10 رقم باشد' ]"
                      >
                        <template v-slot:append>  
                            <div class="flex justify-center items-center">
                            <q-icon class="register-icon" name="badge" />
                          </div>
                        </template>
                </q-input>
              </div>
              <div class="col-12 q-my-md">
                <q-input class="label-right" label="تلفن همراه*"  v-model="registerationModel.mobile"
                     @keypress="controlLength($event,11)"
                     type="number" 
                     :rules="[ 
                      val => 
                      (val !== null && val !== '') && val.length == 11 || 'تلفن همراه الزامی است و شامل 11 رقم باشد' ]">
                <template v-slot:append>  
                                  <div class="flex justify-center items-center">
                                  <q-icon class="register-icon" name="smartphone" />
                                </div>
                              </template>
                </q-input>
              </div>
          
              <div class="col-12">
                <!-- <q-btn class="register-btn text-black q-mx-auto">ثبت نام</q-btn> -->
                <q-input class="label-right" label="کد معرف"
                v-model="registerationModel.representativeCode">
                <template v-slot:append>  
                  <div class="flex justify-center items-center">
                    <span style="font-size:15px;margin-left:5px"></span>
                  </div>
                </template>
            </q-input>

              </div>

              <div  class="terms-conditions-accept flex justify-start items-center" >
         <q-checkbox style="margin-right: -10px;" v-model="registerationModel['termsConditionsAccept']" />
         <span><a @click="roles=true" >قوانین و مقررات</a> را مطالعه نموده و می پذیرم</span>
       </div>
      <div class="col-12 flex justify-between items-center" style="margin-top:15px">
          <q-btn  color="blue-grey-4" label="کلمه عبور خود را فراموش کرده اید؟" @click="forgetPassword"  ></q-btn>
          <q-btn label="ثبت نام" class="register-btn"  style="width:100px" :loading='signUpLoading' type="submit"  @onLogin="userSignUp"  />
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
export default defineComponent({
  name: "RegisterPage",
  data() {
    return {
      left: true,

    registerationModel:{
    firstName:"",
    lastName:"",
    mobile:"",
    nationalCode:"",
    representativeCode:"",
    termsConditionsAccept:false
    },
    roles:false,  
    signUpLoading:false,  
    showOtpDialog:false,  
    };
  },
    methods: {
   async sendSms(){
     if(!this.registerationModel.termsConditionsAccept){
       this.$q.notify({
              color:'red',
              textColor: 'white',
              icon: 'cloud_done',
              message: "مطالعه و پذیرش قوانین و مقررات الزامی است"
           })
    }else{
       this.signUpLoading=true;
        await services.sendSms(this.registerationModel.nationalCode,this.registerationModel.mobile).then((response)=>{
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
  async forgetPassword(){
       this.$router.push('/forgetPassword');
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
  async userSignUp(){
       this.showOtpDialog=false;
       this.signUpLoading=true;
       try{
          let response=await services.fastRegister(this.registerationModel);
          console.log("this is response",response.data.message);
          localStorage.setItem("current_user",JSON.stringify(response.data.message));
          localStorage.setItem("access_token",JSON.stringify(response.data.message.access_token));
          this.$q.notify({
             color:'green',
             textColor: 'white',
             icon: 'cloud_done',
             message:"ثبت اطلاعات با موفقیت انجام شد"
          });
          this.signUpLoading=false;
          this.$emit('signUpSuccessful');
          // window.location.href="/vuejs/#/admin/";    
        }catch(error){
          this.signUpLoading=false;
          if(error.response.data.message){
               this.$q.notify({
               color:'red',
               textColor: 'white',
               icon: 'cloud_done',
               message: error.response.data.message
               })
             }
        }
   },
   handleCloseOtpDialog(){
     this.showOtpDialog=false;
   }
},
});
</script>

<style scoped>
.form-background {
  background: var(--q-themeColor);
  height: 100vh;
  padding: 45px;
  
}
.register-icon{
  color:var(--q-themeColor);
}
.icon-size {
  font-size: 24px;
  color:var(--q-themeColor);
}
.bgGray {
  background-color: gray;
}
.login-form-bg {
  background: #fff;
 
}
.register-btn {
  width: 100%;
  padding: 8px 20px;
  margin: 3px auto !important;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  background: var(--q-themeColor);
}
.card-alignment {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 1330px;
  margin: auto;
  border-radius: 6px;
}
.img-container {
  width: 55%;
}
.form-container {
  width: 40%;
}
@media (max-width: 1400px) {
.img-container {
  width: 55% !important;
}
.form-container {
  width: 100% !important;
}
.form-background {
  background: none;
  height: 100%;
  padding: 50px;
}
.card-alignment{
width: 100%;
padding: 20px;

}

}

@media screen and(min-width : 1301px){

.login-form-bg{
padding: 0px !important;
}

}

</style>