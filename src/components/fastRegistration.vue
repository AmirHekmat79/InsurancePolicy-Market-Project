<template>
     <div class="fast-registration">
     <q-form  @submit="sendSms()" >
        <q-input   v-model="registerationModel.firstName"
                 :rules="[val => val !== null && val !== undefined  && val !== '' || ' الزامی است']">
                 <template v-slot:prepend>
                    <div class="flex justify-center items-center">
                      <q-icon name="perm_identity" />
                      <span style="font-size:15px;margin-left:5px">نام*</span>
                    </div>
                 </template>
                        
        </q-input>
        <q-input   v-model="registerationModel.lastname"
                :rules="[val => val !== null && val !== undefined  && val !== '' || ' الزامی است']">
                 <template v-slot:prepend>
                    <div class="flex justify-center items-center">
                      <q-icon name="perm_identity" />
                      <span style="font-size:15px;margin-left:5px">نام خانوادگی*</span>
                    </div>
                 </template>
        </q-input>
        <q-input   v-model="registerationModel.nationalCode"
                    @keypress="controlLength($event,10)"
                     type="number"  
                     :rules="[ 
                        val => 
                        (val !== null && val !== '') && val.length == 10 || 'کد ملی الزامی است و شامل 10 رقم باشد' ]"
                     >
                       <template v-slot:prepend>  
                          <div class="flex justify-center items-center">
                           <q-icon name="badge" />
                           <span style="font-size:15px;margin-left:5px">کد ملی*</span>
                         </div>
                       </template>
        </q-input>
        <q-input   v-model="registerationModel.mobile"
                       @keypress="controlLength($event,11)"
                       type="number" 
                       :rules="[ 
                        val => 
                        (val !== null && val !== '') && val.length == 11 || 'تلفن همراه الزامی است و شامل 11 رقم باشد' ]">
         <template v-slot:prepend>  
                          <div class="flex justify-center items-center">
                           <q-icon name="smartphone" />
                           <span style="font-size:15px;margin-left:5px"> تلفن همراه*</span>
                         </div>
                       </template>
        </q-input>
         <q-input
            v-model="registerationModel.representativeCode">
            <template v-slot:prepend>  
               <div class="flex justify-center items-center">
                <span style="font-size:15px;margin-left:5px">کد معرف</span>
              </div>
            </template>
         </q-input>
         <div  class="terms-conditions-accept flex justify-start items-center" >
           <q-checkbox style="margin-right: -10px;" v-model="registerationModel['termsConditionsAccept']" />
           <span><a @click="roles=true" >قوانین و مقررات</a> را مطالعه نموده و می پذیرم</span>
         </div>
        <div class="col-12 flex justify-between items-center" style="margin-top:15px">
            <q-btn  color="blue-grey-4" label="کلمه عبور خود را فراموش کرده اید؟" @click="forgetPassword"  ></q-btn>
            <q-btn label="ثبت نام" color="primary" style="width:100px" :loading='registrationLoading' type="submit"  />
        </div>
    </q-form>
    <!-- <PopupLogin :needOnlyOtp="true" v-if="showOTPDialog" :model="registerationModel"  v-model="showOTPDialog" @onLogin="userRegistration()" />
    <q-dialog v-model="roles">
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
export default defineComponent({
  name: "FastRegistration",
  data() {
    return {
      registerationModel:{
      firstName:"",
      lastname:"",
      mobile:"",
      nationalCode:"",
      representativeCode:"",
      termsConditionsAccept:false
      },
      roles:false,  
      registrationLoading:false,  
      showOTPDialog:false,  
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
         this.registrationLoading=true;
          await services.sendSms(this.registerationModel.nationalCode,this.registerationModel.mobile).then((response)=>{
           this.showOTPDialog=true;
           }).catch((error)=>{
            if(error.message){
                this.$q.notify({
                color:'red',
                textColor: 'white',
                icon: 'cloud_done',
                message: error.message
             })
            }
            this.registrationLoading=false;
          })
         this.registrationLoading=false;
      }
     }, 
     forgetPassword(){

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
     }
  },
});
</script>
<style lang="scss">
  .q-card.fast-registration{
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