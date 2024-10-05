<template>
  <div class="other-jubs-registration" dir="rtl" >
      <div class="advertisments">
         <h5> همکاری با ما </h5>
        <div class="row advertisment-item" v-for="(item,index) in advertisementsList" :key="index" @click="showAdvertismentDetails(item)">
          <div class="col-1 image-container flex justify-center items-center"><span class="material-icons"> description </span></div>
          <div class="col-7 ">
             <p class="title">{{item.title}}</p>
             <p class="descriptions" v-html="item.body"></p>
          </div>
          <div class="col-4  flex justify-end items-end" style="padding-left:14px;">
            <span class="expire-persian-date-title" v-if="item.expireDatePersianDate">تاریخ انقضاء : </span>
            <span class="expire-persian-date" v-if="item.expireDatePersianDate">{{item.expireDatePersianDate}}</span>
          </div>
        </div>

      </div>
    <div class="row" style="border-radius: 10px;overflow: hidden;">

            <q-form @submit="validationAndSendCode()" class="row col-lg-8 col-md-8 col-sm-8 col-xs-10 form">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6>فرم درخواست سایر موقعیت های شغلی</h6>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  class="label-right"
                  :rules="[
                    val => val !== null && val !== '' || 'نام الزامی است',
                  ]"
                  color="teal" dir="rtl" outlined v-model="model.firstName"   label="نام*">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  class="label-right"
                  :rules="[
                    val => val !== null && val !== '' || 'نام خانوادگی الزامی است',
                  ]"
                  color="teal" dir="rtl" outlined v-model="model.lastName"   label="نام خانوادگی*">
                </q-input>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                   @keypress="controlLength($event, 10)"
                  color="teal" class="label-right" outlined type="number" v-model="model.nationalCode"   label="کد ملی*">
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

                  color="teal" class="label-right" outlined type="number" v-model="model.mobile"   label="تلفن همراه*">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item" style="padding-bottom:20px">
                 <q-select
                    class="label-right"
                    hide-dropdown-icon
                    emit-value
                    map-options
                    :option-value="opt => opt.id"
                    :option-label="opt => opt.title"
                    :rules="[ val => val   || 'موقعیت شغلی الزامی است']"
                    color="teal" outlined label="موقعیت شغلی*" v-model="model['advertisementId']" :options="advertisements">
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
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">

               <Uploader :isRequire="true" @uploaderError="uploaderError" label="بارگذاری فایل رزومه*" @successUpload="successCVFileUpload" @selectedData="selectedData"  v-model="CVFileUrl" :getUrl="true"/>
               <p v-if="CVUploadFileError" style="color:red;font-size:12px">بارگذاری فایل رزومه الزامی است</p>
            </div>
             <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader :isRequire="true" @uploaderError="uploaderError"  label="بارگذاری عکس کارت ملی*" @successUpload="successNationalCardImagelUpload" v-model="nationalCardImageUrl"  :getUrl="true"/>
               <p v-if="nationalCardUploadImageError" style="color:red;font-size:12px">بارگذاری عکس کارت ملی الزامی است</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader :isRequire="true" @uploaderError="uploaderError" label="بارگذاری عکس آخرین مدرک تحصیلی*" @successUpload="successLastEducationalCertificateImageUpload" v-model="lastEducationalCertificateImageUrl"  :getUrl="true"/>
               <p v-if="lastEducationalCertificateUploadImageError" style="color:red;font-size:12px">بارگذاری عکس آخرین مدرک تحصیلی الزامی است</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader :isRequire="true" @uploaderError="uploaderError" label="بارگذاری سایر موارد*" @successUpload="successUserImageUpload" v-model="userImageUrl"  :getUrl="true"/>
               <p v-if="userUploadImageError" style="color:red;font-size:12px">بارگذاری سایر موارد الزامی است</p>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item flex justify-end items-center">
                <q-btn class="submit-button" :loading="loading" type="submit" style="width:120px;margin-top:15px"  label="ذخیره" />
            </div>
            </q-form>
    </div>
    <OtpDialog @close="showOtpDialog=false"  :needOnlyOtp="true" v-if="showOtpDialog" :model="model"    @onLogin="register()" />
    <q-dialog dir="rtl" v-model="showAdvertismentDialog">
            <q-card  class="advertisment-details-dialog" v-if="showAdvertismentDialog">
               <q-card-section class="row items-center q-pb-none" style="direction:rtl">
                 <div class="text-h6">جزئیات آگهی</div>
                 <q-space />
                 <q-btn icon="close" flat round dense v-close-popup />
               </q-card-section>

               <q-card-section >
                  <div class="row advertisment-details-content">
                    <div class="row col-12">
                      <div class="col-8">
                        <span>عنوان : </span>
                        <span style="color: rgb(78 78 78);">{{advertisementDitailTitle}}</span>
                      </div>
                      <div class="col-4 flex justify-end items-center">
                        <span style="margin-left:2px">تاریخ انقضاء : </span>
                        <span style="font-size: 13px;color: #7e7e7e;">{{advertisementDitailExpirePersianDate}}</span>
                      </div>
                    </div>
                    <div class="col-12" style="margin-top:10px">
                      <span>متن : </span>
                      <span  style="color: rgb(78 78 78);" v-html="advertisementDitailContent"></span>
                    </div>
                  </div>
               </q-card-section>
            </q-card>
      </q-dialog>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import optionServices from "src/services/optionServices";
  import Uploader from "src/components/uploader/uploader.vue";
  import OtpDialog from "src/components/otpDialog.vue";
  import services from "src/services/services";
  export default defineComponent({
    name: "OtherJobsRegisteration",
    components:{
      Uploader,
      OtpDialog
    },
    data(){
        return{
            self:this,
            baseData:[],
            model:{firstName:"",lastName:"",nationalCode:"",mobile:"",advertisementId:"",representativeCode:""},
            advertisements:[],
            advertisementsList:[],
            CVFileUrl:"",
            CVUploadFileError:false,
            CVMediaId:0,
            uploadImageData:[],
            showLogin:false,
            loading:false,
            showAdvertismentDialog:false,
            advertisementDitailTitle:"",
            advertisementDitailContent:"",
            advertisementDitailExpirePersianDate:"",
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
    methods:{
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
      async init(){
         this.advertisements=(await optionServices.getAdvertisements()).data.message;
         this.advertisementsList=(await optionServices.getAdvertismentsList()).data.message;
      },
     selectedData(data){
      this.uploadImageData=data;
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
    async register(){
      this.showOtpDialog=false;
      this.loading=true;
      var uploadedFiles=[
      {fileUrl:this.nationalCardImageUrl,mediaId:this.nationalCardImageMediaId,fileType:0},
      {fileUrl:this.lastEducationalCertificateImageUrl,mediaId:this.lastEducationalCertificateImageMediaId,fileType:1},
      {fileUrl:this.userImageUrl,mediaId:this.userImageMediaId,fileType:3},
      {fileUrl:this.CVFileUrl,mediaId:this.CVMediaId,fileType:2}
      ]
       this.model.files=uploadedFiles;
       try {
       let response= await services.postOtherJubsRegistration(this.model);
       this.$q.notify({
            color:'green',
            textColor: 'white',
            icon: 'cloud_done',
            message: response.data.message
          })
          this.loading=false
          // window.location.href="/successfulRegistration"
       } catch (error) {
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
       this.loading=false
    },
    showAdvertismentDetails(data){
      this.showAdvertismentDialog=true;
      this.advertisementDitailTitle=data.title;
      this.advertisementDitailContent=data.body;
      this.advertisementDitailExpirePersianDate=data.expireDatePersianDate;
    },
    showAdvertismentsList(){
      window.open("/advertismentsList")
    },
  successCVFileUpload(data)
  {
    this.CVUploadFileError=false;
    this.CVMediaId=data.data.message.id;
    this.CVFileUrl=data.data.message.fileUrl;

  },
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
    //  if(!this.uploaderHasError){
    //    if(!this.CVFileUrl){
    //     this.CVUploadFileError=true;
    //   }else if(!this.nationalCardImageUrl){
    //      this.nationalCardUploadImageError=true;
    //   }else if(!this.lastEducationalCertificateImageUrl){
    //     this.lastEducationalCertificateUploadImageError=true;
    //   }
    //   else if(!this.userImageUrl){
    //     this.userUploadImageError=true;
    //   }else{
    //     this.nationalCardUploadImageError=false;
    //     this.lastEducationalCertificateUploadImageError=false;
    //    this.userUploadImageError=false;

    //   }
    //  }
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
    .other-jubs-registration{
        margin-bottom: 30px;
        padding-top: 130px;
        h5,h6{
          margin: 10px;
        }
        .form{
            margin: 0 auto;
          .form-item{
            padding: 5px;
            .q-field--standout .q-field__control{
               background:#94d6c7 !important;
             }
            .numeric-input{
              input{
                text-align: left !important;
              }
            }
          }
          .submit-button{
             background-color: var(--q-themeColor);
             color:#fff;
          }         
        }

    }
    .advertisments{
      padding:5px 10%;
      .advertisment-item{
        background-color: #eee;
        cursor: pointer;
        padding: 8px;
        border-radius: 5px;
        margin-top: 5px;
        .image-container{
          span{
            font-size: 28px;
            color: #3986f6;
          }
        }
        .title{
          margin: 0px;
          color:#000 ;
        }
        .descriptions{
          margin: 0px;
         color: #666;
         font-size: 13px;
         width:150px;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
        }
        .expire-persian-date-title{
          font-size: 11px;
          margin-left: 2px;
        }
        .expire-persian-date{
          font-size: 11px;
          color: #999;
        }
      }
      .advertisment-item:hover{
        background-color: #d5d5d5;
      }
    }
    // test build
    .advertisment-details-dialog{
      max-width: 75% !important;
      width: 100%;
    }
    @media only screen and (max-width:600px) {
     .advertisment-details-dialog{
        max-width: 90% !important;
        width: 100%;
      }
    }


  </style>

