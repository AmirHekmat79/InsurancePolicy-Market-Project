<template>
  <div class="coopration" dir="rtl" >
     <div class="row form-container">
       <h5>همکاری با نماینده بیمه</h5>
       <div class="seprator"></div>
       <p>با توجه به پیشرفت روزافزون و رشد قابل توجه این سامانه ی بیمه ای ، برآن شدیم که عوامل بیمه‌ای فعال حال حاضر کشور را دور هم آورده و همراه خود به سمت فردای روشن و سرافراز ایران پیش ببریم.</p>
       <p>اگر شما از عوامل بیمه ای معتبر (مورد تایید بیمه مرکزی) بوده و راغب به همکاری با ما هستید، فرم زیر را پر کنید. ما در اسرع وقت با شما تماس خواهیم گرفت.</p>
       <q-form class="row col-lg-10 col-md-10 col-sm-10 col-xs-12 form" @submit="validationAndSendCode()">
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  class="label-right"
                  :rules="[
                    val => val !== null && val !== '' || 'نام مدیر الزامی است',
                  ]"
                  dir="rtl"
                  color="teal" outlined  v-model="model.firstName"   label="نام مدیر* ">
                </q-input>
            </div>
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  class="label-right"
                  :rules="[
                    val => val !== null && val !== '' || 'نام خانوادگی مدیر الزامی است',
                  ]"
                  dir="rtl"
                  color="teal" outlined  v-model="model.lastName"   label="نام خانوادگی مدیر* ">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                    @keypress="controlLength($event,10)"
                  color="teal" class="numeric-input label-right" outlined type="number" v-model="model.nationalCode"   label="کد ملی*">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                :rules="[
                        val =>
                        (val !== null && val !== '') && val.length == 11 ||
                        (model.personalityType == 1
                           ? 'تلفن همراه نماینده'
                           : 'تلفن همراه' + 'الزامی است و شامل 11 رقم باشد')
                     ]"
                  color="teal" class="numeric-input label-right" outlined type="number" v-model="model.mobile"   label="تلفن همراه*">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                <q-input
                :rules="[
                    val => val !== null && val !== '' || 'ایمیل الزامی است',
                  ]"
                  color="teal" class="numeric-input label-right" outlined v-model="model.email"   label="ایمیل*">
                </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  :rules="[
                    val => val !== null && val !== '' || ' تلفن ثابت با پیش شماره الزامی است',
                  ]"
                  color="teal" class="numeric-input label-right" outlined type="number" v-model="model.phone"   label="تلفن ثابت با پیش شماره*">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  color="teal" class="numeric-input label-right" outlined type="number" v-model="model.phone2"   label="تلفن ثابت 2">
                </q-input>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                <q-input
                  color="teal" outlined  v-model="model.fax" class="numeric-input label-right"  label="فکس">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                <q-input
                  color="teal" outlined class="numeric-input label-right" v-model="model.webSite"   label="آدرس وب سایت">
                </q-input>
            </div>
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-select
              class="label-right"
              hide-dropdown-icon
               emit-value
               map-options
               :option-value="opt => opt.id"
               :option-label="opt => opt.title"
               color="teal" outlined v-model="model['representationType']"  :options="PersonalityTypes"  label="نوع نمایندگی">
               <template v-slot:append>
                         <q-icon name="arrow_drop_down" />
                      </template>
            </q-select>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-select
               class="label-right"
               hide-dropdown-icon
                emit-value
                map-options
                :option-value="opt => opt.id"
                :option-label="opt => opt.title"
                :rules="[ val => val   || 'شرکت بیمه الزامی است']"
                color="teal" outlined v-model="model['insuranceCompanyId']"  :options="insuranceCompanies"  label="نام شرکت بیمه*">
                <template v-slot:append>
                         <q-icon name="arrow_drop_down" />
                      </template>
             </q-select>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-select
                    class="label-right"
                    hide-dropdown-icon
                    :use-input="true"
                    emit-value
                    map-options
                    outlined
                    label="سال ثبت"
                    :option-value="opt => opt.id"
                    :option-label="opt => opt.title"
                    color="teal" borderless v-model="model['registrationYear']" :options="registrationCompanyYear" >
                    <template v-slot:append>
                         <q-icon name="arrow_drop_down" />
                      </template>
                    </q-select>
            </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  :rules="[
                    val => val !== null && val !== '' || 'تعداد پرسنل  الزامی است',
                  ]"
                  color="teal" class="numeric-input label-right" outlined type="number" v-model="model.numberOfStaff"   label="تعداد پرسنل* ">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-left:5px">
            <q-select
              class="label-right"
              hide-dropdown-icon
               emit-value
               map-options
               :option-value="opt => opt.id"
               :option-label="opt => opt.title"
               color="teal" outlined v-model="model['startTime']"  :options="startTimes"  label="ساعت شروع کار">
               <template v-slot:append>
                  <q-icon name="arrow_drop_down" />
               </template>
            </q-select>
          </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-right:5px">
            <q-select
               class="label-right"
              hide-dropdown-icon
               emit-value
               map-options
               :option-value="opt => opt.id"
               :option-label="opt => opt.title"
               color="teal" outlined v-model="model['endTime']"  :options="endTimes"  label="ساعت پایان کار">
               <template v-slot:append>
                  <q-icon name="arrow_drop_down" />
               </template>
            </q-select>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-item" style="padding-top:10px">
              <q-checkbox
                  v-model="model['workOnHolidays']" label="قابلیت کار در روزهای تعطیل دارد؟" />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-item" style="padding-top:10px">
              <q-checkbox
                  v-model="model['hasCourier']" label="تحصیلدار یا پیک در اختیار دارد؟" />
          </div>
          <div class="col-lg-6 col-md-16 col-sm-6 col-xs-12 form-item">
                <q-input
                 @keypress="controlLength($event, 10)"
                  :rules="[
                    val => val !== null && val !== '' && val.length == 10  || 'کد پستی الزامی و شامل 10 رقم می باشد',
                  ]"
                  color="teal" class="numeric-input label-right" type="number" outlined v-model="model.zipCode"   label="کد پستی*">
                </q-input>
            </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
              <q-select
                 class="label-right"
                 hide-dropdown-icon
                 emit-value
                 map-options
                 :option-value="opt => opt.id"
                 :option-label="opt => opt.title"
                 @input="provinceChanged"
                 :rules="[ val => val   || 'استان الزامی است']"
                 color="teal" outlined label="استان*" v-model="provinceId" :options="proviance">
                 <template v-slot:append>
                      <q-icon name="arrow_drop_down" />
                   </template>
              </q-select>
            </div>
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                 <q-select
                   class="label-right"
                    hide-dropdown-icon
                    emit-value
                    map-options
                    :option-value="opt => opt.id"
                    :option-label="opt => opt.title"
                    :rules="[ val => val   || 'شهر الزامی است']"
                    color="teal" outlined label="شهر*" v-model="model['cityId']" :options="city">
                    <template v-slot:append>
                         <q-icon name="arrow_drop_down" />
                      </template>
                </q-select>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                <q-input
                  color="teal" class="numeric-input label-right" outlined v-model="model.representativeCode"   label="کد معرف">
                </q-input>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item" style="padding-bottom:20px">
                 <q-input
                  color="teal" class="label-right" dir="rtl" outlined type="textarea" v-model="model.postalAddress"   label="آدرس دقیق پستی">
                </q-input>
            </div>
             <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader @uploaderError="uploaderError" :isRequire="true"  label="بارگذاری عکس کارت ملی*" @successUpload="successNationalCardImagelUpload" v-model="nationalCardImageUrl"  :getUrl="true"/>
               <p v-if="nationalCardUploadImageError" style="color:red;font-size:12px">بارگذاری عکس کارت ملی الزامی است</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader @uploaderError="uploaderError" :isRequire="true"  label="بارگذاری عکس آخرین مدرک تحصیلی*" @successUpload="successLastEducationalCertificateImageUpload" v-model="lastEducationalCertificateImageUrl"  :getUrl="true"/>
               <p v-if="lastEducationalCertificateUploadImageError" style="color:red;font-size:12px">بارگذاری عکس آخرین مدرک تحصیلی الزامی است</p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
               <Uploader @uploaderError="uploaderError" :isRequire="true"  label="بارگذاری سایر موارد*" @successUpload="successUserImageUpload" v-model="userImageUrl"  :getUrl="true"/>
               <p v-if="userUploadImageError" style="color:red;font-size:12px">بارگذاری سایر موارد الزامی است</p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item flex justify-end items-center ">
                <q-btn class="q-mt-md submit-button" :loading="loading" type="submit" style="width:120px"  label="ارسال اطلاعات" />
            </div>
       </q-form>
     </div>
     <OtpDialog @close="showOtpDialog=false" :needOnlyOtp="true" v-if="showOtpDialog" :model="model"   @onLogin="sendAgentRegistration()" />
  </div>
</template>
<script>
  import optionServices from "src/services/optionServices";
  import { defineComponent } from "vue";
  import Uploader from "src/components/uploader/uploader.vue";
  import OtpDialog from "src/components/otpDialog.vue";
  import services from "src/services/services";
  import moment from "moment-jalaali";
  export default defineComponent({
    name: "AgentRegisteration",
    components:{
      Uploader,
      OtpDialog
    },
    data(){
        return{
            self:this,
             baseData:[],
             model:{
             firstName:"",lastName:"",nationalCode:"",mobile:"",email:"",phone:"",phone2:"",fax:"",webSite:"",representationType:"",
             insuranceCompanyId:"",registrationYear:"",numberOfStaff:"",startTime:"",endTime:"",workOnHolidays:false,hasCourier:false,
             zipCode:"",provinceId:"",cityId:"",postalAddress:"",representativeCode:""
             },
             provinceId:'',
             PersonalityTypes:[],
             proviance:[],
             city:[],
             insuranceCompanies:[],
             registrationCompanyYear:[],
             startTimes:[],
             endTimes:[],
             loading:false,
             showLogin:false,
             time:0,
             timer:0,
             //upload images changes
             nationalCardImageUrl:'',
             nationalCardImageMediaId:0,
             nationalCardUploadImageError:false,
             lastEducationalCertificateImageUrl:'',
             lastEducationalCertificateImageMediaId:0,
             lastEducationalCertificateUploadImageError:false,
             userImageUrl:'',
             userImageMediaId:0,
             userUploadImageError:false,
             files:[],
             uploaderHasError:false,
             showOtpDialog:false,
        }
    },
    mounted(){
     this.init();
    },
    watch: {
      provinceId() {
         this.model.provinceId=this.provinceId;
         this.provinceChanged()
      }
     },
    methods:{
         async init(){
          this.insuranceCompanies =(await optionServices.getAllInsuranceCompanies()).data.message;
          this.proviance= (await optionServices.getProvince()).data.message;
          this.PersonalityTypes= (await optionServices.getPersonalityTypes()).data.message;
          this.startTimes= (await optionServices.getStartTimes()).data.message;
          this.endTimes= (await optionServices.getEndTimes()).data.message;
          var beginPersianDate= parseInt(moment().format('jYYYY')) ;
          var beginGeorgianDate=parseInt(moment().format('YYYY')) ;
          for(var x=0;x<70;x++)
          {
            this.registrationCompanyYear.push( {id:beginPersianDate-x,title:(beginPersianDate-x)+'-'+(beginGeorgianDate-x)})

          }
         },
        async provinceChanged(){
          this.model.cityId="";
          this.city=(await optionServices.getCityByProvinceId(this.model.provinceId)).data.message;
        },
            async sendCode()
        {
          this.loading=true;
          try{
            await services.sendSms(this.model.nationalCode,this.model.mobile);
            this.showOtpDialog=true;
          }catch(err){
            console.log("this is err",err);
            var error=err;
            this.$q.notify({
              color:'red',
              textColor: 'white',
              icon: 'cloud_done',
              message: error.message
            })
          }
          this.loading=false
        },
         async sendAgentRegistration(){
            this.loading=true;
            this.showOtpDialog=false;
            console.log('this is model',this.model);
            var uploadedFiles=[{fileUrl:this.nationalCardImageUrl,mediaId:this.nationalCardImageMediaId,fileType:0},
            {fileUrl:this.lastEducationalCertificateImageUrl,mediaId:this.lastEducationalCertificateImageMediaId,fileType:1},
           {fileUrl:this.userImageUrl,mediaId:this.userImageMediaId,fileType:3}]
            this.model.files=uploadedFiles;
            try {
               let response=await services.postAgentRegistrationInformations(this.model);
                this.$q.notify({
                     color:'green',
                     textColor: 'white',
                     icon: 'cloud_done',
                     message: response.data.message
                })
                this.loading=false;
                  //  window.location.href="/successfulRegistration";
            } catch (exp) {
              this.loading=false;
              if(error.response.data.message){
                 this.$q.notify({
                  color:'red',
                  textColor: 'white',
                  icon: 'error',
                  message: error.response.data.message
                })
              }
              console.log("this is error",error);
            }
         },
        controlLength(event, maxlength) {
        var targetLength = event.target.value.length;
        if (event.which < 0x20) {
          // e.which < 0x20, then it's not a printable character
          // e.which === 0 - Not a character
          return; // Do nothing
        }
        if (targetLength == maxlength) {
          event.preventDefault();
        } else if (targetLength > maxlength) {
          // Maximum exceeded
          event.target.value = event.target.value.substring(0, maxlength);
        }
       },
       //upload images changes
       successNationalCardImagelUpload(data)
       {

         this.nationalCardUploadImageError=false;
         this.nationalCardImageMediaId=data.data.message.id;
         this.nationalCardImageUrl=data.data.message.fileUrl;

       },
       successLastEducationalCertificateImageUpload(data)
       {
         this.lastEducationalCertificateUploadImageError=false;
         this.lastEducationalCertificateImageMediaId=data.data.message.id;
         this.lastEducationalCertificateImageUrl=data.data.message.fileUrl;
       },
       successUserImageUpload(data)
       {
         this.userUploadImageError=false;
         this.userImageMediaId=data.data.message.id;
         this.userImageUrl=data.data.message.fileUrl;
       },
       validationAndSendCode(){
        this.sendCode();
       },
      uploaderError(data){
        if(data==true){
          this.uploaderHasError=true;
        }else{
          this.uploaderHasError=false;
        }
      }
    }
  });
  </script>
  <style lang="scss">
    .coopration{
        padding: 140px 6% 50px !important;
        background-color: #e4e4e4;
        .form-container{
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          h5{
            margin: 15px 0px;
          }
          .seprator{
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
          }
          .form{
            margin: 10px auto;
            .form-item {
              padding: 5px;

            }
            .numeric-input{
              input{
                text-align: left !important;
                direction: ltr;
              }
            }
          }
          .submit-button{
             background-color: var(--q-themeColor);
             color:#fff;
          }
        }
      }
      .q-item__label{
          direction: rtl !important;
          text-align: right !important;
        }
    .q-field--standout .q-field__control{
        background:#94d6c7 !important;
    }
    @media only screen and (max-width:768px) {

    }
  </style>

