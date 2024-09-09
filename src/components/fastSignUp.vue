<template>
     <div class="fast-sign-up">
     <q-form  @submit="sendSms()" >
        <q-input class="label-right" label="نام*"   v-model="registerationModel.firstName"
                 :rules="[val => val !== null && val !== undefined  && val !== '' || ' الزامی است']">
          <template v-slot:prepend>
             <div class="flex justify-center items-center">
               <q-icon name="perm_identity" />
             </div>
          </template>
        </q-input>
        <q-input class="label-right" label="نام خانوادگی*"   v-model="registerationModel.lastName"
                :rules="[val => val !== null && val !== undefined  && val !== '' || ' الزامی است']">
                 <template v-slot:prepend>
                    <div class="flex justify-center items-center">
                      <q-icon name="perm_identity" />
                    </div>
                 </template>
        </q-input>
        <q-input class="label-right" label="کد ملی*"  v-model="registerationModel.nationalCode"
                    @keypress="controlLength($event,10)"
                     type="number"  
                     :rules="[ 
                        val => 
                        (val !== null && val !== '') && val.length == 10 || 'کد ملی الزامی است و شامل 10 رقم باشد' ]"
                     >
                       <template v-slot:prepend>  
                          <div class="flex justify-center items-center">
                           <q-icon name="badge" />
                         </div>
                       </template>
        </q-input>
        <q-input class="label-right" label="تلفن همراه*"  v-model="registerationModel.mobile"
                       @keypress="controlLength($event,11)"
                       type="number" 
                       :rules="[ 
                        val => 
                        (val !== null && val !== '') && val.length == 11 || 'تلفن همراه الزامی است و شامل 11 رقم باشد' ]">
         <template v-slot:prepend>  
                          <div class="flex justify-center items-center">
                           <q-icon name="smartphone" />
                         </div>
                       </template>
        </q-input>
         <q-input class="label-right" label="کد معرف"
            v-model="registerationModel.representativeCode">
            <template v-slot:prepend>  
               <div class="flex justify-center items-center">
                <span style="font-size:15px;margin-left:5px"></span>
              </div>
            </template>
         </q-input>
         <div  class="terms-conditions-accept flex justify-start items-center" >
           <q-checkbox style="margin-right: -10px;" v-model="registerationModel['termsConditionsAccept']" />
           <span><a @click="roles=true" >قوانین و مقررات</a> را مطالعه نموده و می پذیرم</span>
         </div>
        <div class="col-12 flex justify-between items-center" style="margin-top:15px">
            <q-btn  color="blue-grey-4" label="کلمه عبور خود را فراموش کرده اید؟" @click="forgetPassword"  ></q-btn>
            <q-btn label="ثبت نام" color="primary" style="width:100px" :loading='signUpLoading' type="submit"  />
        </div>
    </q-form>
    <OtpDialog  @close="handleCloseOtpDialog"  :needOnlyOtp="true" v-if="showOtpDialog" :model="registerationModel"   @onLogin="userSignUp" />
    <!-- <q-dialog v-model="roles">
      <q-card
        style="font-family: iransans; width: 700px; max-width: 80vw; direction: rtl"
      >
        <q-card-section>
          <div class="text-h6">قوانین و مقررات</div>
        </q-card-section>
        <div
          v-html="baseData.insuranceCentrePortal.termsConditions"
          style="font-family: iransans; padding: 29px"
        ></div>
      </q-card>
    </q-dialog> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services";
import OtpDialog from "src/components/otpDialog.vue";
export default defineComponent({
  name: "FastRegistration",
  components:{
      OtpDialog
  },
  data() {
    return {
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
  props: {
     
  },
  mounted(){
      
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
<style lang="scss">
  .q-card.fast-sign-up{
      direction: rtl;
      padding: 15px !important;
  }
  .terms-conditions-accept{
    margin-top:15px;
    a{
       color: #3b8bff;
       cursor: pointer;
    }
  }
</style>