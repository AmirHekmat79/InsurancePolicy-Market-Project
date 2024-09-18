<template>
    <div class="other-jubs-registration" dir="rtl" >
        <div class="advertisments">
           <h3> همکاری با ما </h3>
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
                <h3>فرم درخواست سایر موقعیت های شغلی</h3>
              </div>
  
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    :rules="[
                      val => val !== null && val !== '' || 'نام الزامی است',
                    ]"
                    color="teal" dir="rtl" outlined v-model="model.firstName"   label="*نام">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    :rules="[
                      val => val !== null && val !== '' || 'نام خانوادگی الزامی است',
                    ]"
                    color="teal" dir="rtl" outlined v-model="model.lastName"   label="*نام خانوادگی">
                  </q-input>
              </div>
  
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                     @keypress="controlLength($event, 10)"
                   
                    color="teal" class="numeric-input" outlined type="number" v-model="model.nationalCode"   label="*کد ملی">
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
  
                    color="teal" class="numeric-input" outlined type="number" v-model="model.mobile"   label="*تلفن همراه">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item" style="padding-bottom:20px">
                   <q-select
                   hide-dropdown-icon
                      emit-value
                      map-options
                      :option-value="opt => opt.id"
                      :option-label="opt => opt.title"
                      :rules="[ val => val   || 'موقعیت شغلی الزامی است']"
                      color="teal" outlined label="*موقعیت شغلی" v-model="model['advertisementId']" :options="advertisements">
                      <template v-slot:prepend>
                                 <q-icon name="arrow_drop_down" />
                              </template>
                   </q-select>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                  <q-input
                    color="teal" class="numeric-input" outlined v-model="model.representativeCode"   label="کد معرف">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                
                 <Uploader @uploaderError="uploaderError" label="*بارگذاری فایل رزومه" @successUpload="successCVFileUpload" @selectedData="selectedData"  v-model="CVFileUrl" :getUrl="true"/>
                 <p v-if="CVUploadFileError" style="color:red;font-size:12px">بارگذاری فایل رزومه الزامی است</p>
              </div>
               <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                 <Uploader @uploaderError="uploaderError"  label="*بارگذاری عکس کارت ملی" @successUpload="successNationalCardImagelUpload" v-model="nationalCardImageUrl"  :getUrl="true"/>
                 <p v-if="nationalCardUploadImageError" style="color:red;font-size:12px">بارگذاری عکس کارت ملی الزامی است</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                 <Uploader @uploaderError="uploaderError" label="*بارگذاری عکس آخرین مدرک تحصیلی" @successUpload="successLastEducationalCertificateImageUpload" v-model="lastEducationalCertificateImageUrl"  :getUrl="true"/>
                 <p v-if="lastEducationalCertificateUploadImageError" style="color:red;font-size:12px">بارگذاری عکس آخرین مدرک تحصیلی الزامی است</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                 <Uploader @uploaderError="uploaderError" label="*بارگذاری سایر موارد" @successUpload="successUserImageUpload" v-model="userImageUrl"  :getUrl="true"/>
                 <p v-if="userUploadImageError" style="color:red;font-size:12px">بارگذاری سایر موارد الزامی است</p>
              </div>
              
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item flex justify-end items-center">
                  <q-btn color="primary" :loading="loading" type="submit" style="width:120px;margin-top:15px"  label="ذخیره" />
              </div>
              </q-form>
      </div>
      <PopupLogin :needOnlyOtp="true" v-if="showLogin" :model="model"  v-model="showLogin" @onLogin="register()" />
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
  
  export default defineComponent({
    name: "otherJobsRegisteration",
    data(){
        return{
            lastEducationalCertificateUploadImageError : '',
            CVUploadFileError : '' ,
            nationalCardUploadImageError : '',
            showLogin : false ,
            showAdvertismentDialog : false ,
            userUploadImageError : false ,
            advertisementsList : [] ,
            advertisementDitailExpirePersianDate : '',
            advertisementDitailTitle : '' ,
            advertisementDitailContent : 'test',
            loading : false ,
            info:'' ,
            suggestionsCritic : [] ,
            isLoading : false,
            model : {
                firstName : '' , 
                lastName : '' ,
                nationalCode : '' ,
                representativeCode : '' ,
                subjectParamId : '' ,
                mobile : '' ,
                advertisementId : '' ,
                personalityType : '' ,
               
                
            } ,

            opt : {
                id : 0 ,
                title : ''
            }
        }
    }
  });

  </script>
  <style lang="scss">
    .other-jubs-registration{
        margin-bottom: 30px;
        margin-top: 30px;
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
  
  