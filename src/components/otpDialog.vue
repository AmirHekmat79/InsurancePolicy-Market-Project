<template>
     <div>

    <q-dialog
      v-model="value"
      @input="onCloseSubmit"
      persistent
    >
      <q-card style="width: 400px; max-width: 80vw;direction:rtl"  > 
        <q-card-section class="flex justify-start items-center">
          <div class="text-h6">تایید تلفن همراه</div>
            <q-space />
          <q-btn icon="close" @click="handleCloseButtonClick" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">

            <q-form
              @submit="verify"
              class="q-gutter-md"
            >
              <div class="q-pa-md">
                <div class="row">



                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding" style="min-width:100px">
                    <span>
                      لطفاً کد دریافت شده بر روی شماره همراه
                      <span style="color:red">
                        {{model.mobile}}
                      </span>
                       را وارد نمایید
                    </span>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding" style="min-width:100px">
                    <q-input
                      class="label-right"
                      :rules="[
                        val => val !== null && val !== '' || 'کد فعال سازی الزامی است',
                      ]"
                      color="teal" type="number" outlined v-model="smsCode"   label="کد فعال سازی">
                    
                    </q-input>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding" style="min-width:100px">
                    <span>
                      زمان باقی مانده  :
                      <span>
                        {{showTime(time) }}
                      </span>

                    </span>
                  </div>


                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding" style="min-width:100px">
                    <q-card-actions align="right" class="bg-white text-teal">

                      <q-btn color="primary"    type="submit"  style="margin: 10px;" :loading="loadingAccept" >
                        <div>
                          اعتبار سنجی و ثبت
                        </div>
                        <template v-slot:loading>
                          <q-spinner-facebook />
                        </template>
                      </q-btn> 
                      <!-- <q-btn color="primary" label="اعتبر سنجی و ثبت"  type="submit"  style="margin: 10px;"/> -->
                      <q-btn color="primary" v-if="!time || time<0" @click="sendCode()" label="ارسال مجدد"  style="margin: 10px;" />


                      <q-btn color="primary" v-else disable  label="ارسال مجدد"  style="margin: 10px;" />
                    </q-card-actions>
                  </div>

                </div>
              </div>

            </q-form>
          </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services";
export default defineComponent({
  name: "OtpDialog",
  data() {
    return {
      smsCode:"",
      time:180,
      timer:0,
      loadingAccept:false,
      value:true,
    };
  },
  props: {
    //  needOnlyOtp:false,
     model:{},
     needOnlyOtp: {
        type: Boolean,
        default: true
      },
  },
  mounted(){
     this.resetTimer();
  },
  methods: {
      onCloseSubmit(data)
      {
        this.$emit("input",data)
        // this.value=false;
      },
      resetTimer()
      {
          this.time=180
          // this.value=true;
          if( this.timer)
          {
            clearInterval(this.timer);
            this.timer=null;
          }
          this.timer=setInterval(()=>{
            this.time--;
          },1000)
    
      },
      async sendCode()
      {
        var a = await services.sendSms(this.model.nationalCode,this.model.mobile);
        if(a.isSuccess)
        {
          //AuthService
          this.resetTimer()
        }
        else
        {
          this.$q.notify({
            color:'red',
            textColor: 'white',
            icon: 'cloud_done',
            message: a.message
          })
    
        }
      },
      showTime(time)
      {
        if(time<=0)
        {
          clearInterval(time)
          return
        }
        var str = "00:";
        var sec = time%60;
        time=Math.floor(time/60);
        if(time<10)
          str+="0";
        str+=time+':';
        if(sec<10)
          str+="0";
        str+=sec;
        return str;
      },
      async verify()
      {
        this.loadingAccept=true;
        var name= this.model.firstName + " "+this.model.lastName;
        try{
          if(this.needOnlyOtp){
            var response = await services.verifySmsWithOnlyOtp(this.model.nationalCode,this.model.mobile,this.smsCode,name,true);
          }else{
            var response = await services.verifySms(this.model.nationalCode,this.model.mobile,this.smsCode,name);
          }
          this.$emit('onLogin',response)
          this.onCloseSubmit(false)
        }catch(error)
        {
          if(error.response.data.message){
            this.$q.notify({
            color:'red',
            textColor: 'white',
            icon: 'cloud_done',
            message: error.response.data.message
          })
          }
        }
        this.loadingAccept=false;
      },
      handleCloseButtonClick(){
        this.$emit("close");
      }
      },
});
</script>
<style lang="scss">
   
</style>