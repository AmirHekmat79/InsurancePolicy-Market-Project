<template>
  <div class="seller-register" dir="rtl" >
    <div hidden>{{counter}}</div>
    <div class="marketer-containser flex" style="border-radius: 10px;overflow: hidden;">
        <div class="sidebar">
            <div class="contract-header flex column justify-center items-center">
              <h2>ثبت نام فروشنده</h2>
              <img src="statics/images/marketerRegistration.jpg" style="border-radius:50%;" alt="ثبت نام">
            </div>
            <!-- <div class="flex justify-center " v-if="contractContent">
              <h3 class="contract-title-text">متن قرارداد</h3>
            </div>
            <div class="contract-content">
              <p v-html="contractContent"></p>
              <q-checkbox 
                  v-model="model['acceptContract']" label="متن قرارداد را مطالعه نموده و می پذیرم" />
            </div> -->
        </div>
        <div class="seprator" ></div>
        <div class="form-container">
            <q-form :style="isContractForm ?'display:none':''" :hidden="isInputsForm" @submit="goToContractForm()" :class="$q.screen.width > 768 ?'row col-lg-8 col-md-8 col-sm-8 col-xs-12 form': 'row col-lg-12 col-md-12 col-sm-12 col-xs-12 form'">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h3>فرم ثبت نام</h3>
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
                    val => val !== null && val !== '' || 'ایمیل الزامی است',
                  ]"
                  color="teal" class="numeric-input" outlined v-model="model.email"   label="*ایمیل">
                </q-input>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                   @keypress="controlLength($event, 11)"
                    
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
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                <q-input
                  @keypress="controlLength($event, 11)"
                   
                  :rules="[
                    val => val !== null && val !== '' && val.length == 11  || ' تلفن ثابت با پیش شماره الزامی است',
                  ]"
                  color="teal" class="numeric-input" outlined type="number" v-model="model.phone"   label="*تلفن ثابت با پیش شماره">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                 <q-select
                 hide-dropdown-icon
                    emit-value
                    map-options
                    :option-value="opt => opt.id"
                    :option-label="opt => opt.title"
                    
                    color="teal" outlined label="*جنسیت" v-model="model['genderType']" :options="genderTypesList">
                    <template v-slot:prepend>
                               <q-icon name="arrow_drop_down" />
                            </template>
                 </q-select>
            </div>
            <!-- test -->
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="position:relative">
                <span style="position:absolute;top:10px;right:45px;font-size:12px">تاریخ تولد*</span>
                 <q-input filled @blur="changeDateWithHand"
             lable="*تاریخ تولد"
             :rules="[ val => dateValidator(val)  || ' تاریخ تولد الزامی است']"
             v-model="selectedDate" placeholder="####/##/##" mask="####/##/##"  >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="birthDay" transition-show="scale" transition-hide="scale">
                    <q-date calendar="persian"
                    class="persian-calender"
                    :title="selectedDate"
                     subtitle="تاریخ انتخاب شده :"
                      mask="YYYY-MM-DD"
                      dir="rtl"
                      lable="*تاریخ تولد"
                      v-model="selectedDate" @input="changeDate" />
                  </q-popup-proxy>
                </q-icon>
              </template>
                <!-- <q-tooltip >
                    <p dir="rtl" style="text-align:center;margin:5px 0px"> در صورت تمایل به وارد نمودن تاریخ تولد به وسیله تقویم بر روی آیکن کلیک نمایید </p>
                    <p dir="rtl" style="text-align:center;margin:5px 0px">یا به صورت دستی ابتدا سال و سپس ماه و روز را وارد نمایید</p>
                </q-tooltip> -->
                 </q-input>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-item">
                <q-select
                hide-dropdown-icon
                   emit-value
                   map-options
                   :option-value="opt => opt.id"
                   :option-label="opt => opt.title"
                   :rules="[ val => val   || 'آخرین مدرک تحصیلی الزامی است']"
                   color="teal" outlined v-model="model['educationId']"  :options="lastEducationalCertificate"  label="*آخرین مدرک تحصیلی">
                   <template v-slot:prepend>
                               <q-icon name="arrow_drop_down" />
                            </template>
                   
                </q-select>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-item">
                <q-select
                hide-dropdown-icon
                   emit-value
                   map-options
                   :option-value="opt => opt.id"
                   :option-label="opt => opt.title"
                   :rules="[ val => val   || 'سابقه کار مرتبط با بیمه الزامی است']"
                   color="teal" outlined v-model="model['bimehExperienceId']"  :options="workExperience"  label="*سابقه کار مرتبط با بیمه">
                   <template v-slot:prepend>
                               <q-icon name="arrow_drop_down" />
                            </template>
                </q-select>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-item">
                <q-select
                hide-dropdown-icon
                   emit-value
                   map-options
                   :option-value="opt => opt.id"
                   :option-label="opt => opt.title"
                   :rules="[ val => val   || 'سابقه کار مرتبط با بیمه الزامی است']"
                   color="teal" outlined v-model="model['workExperienceId']"  :options="workExperience"  label="*سابقه کار مرتبط با بازاریابی">
                   <template v-slot:prepend>
                               <q-icon name="arrow_drop_down" />
                            </template>
                </q-select>
                
            </div>
            <div v-if=" (!!model['workExperienceId'] || !!model['bimehExperienceId'])&&(model['workExperienceId'] >1 || model['bimehExperienceId'] >1 )" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
                 <q-input
                 
                  color="teal" dir="rtl" outlined type="textarea" v-model="model.descriptionExperience"   label="توضیحات مربوط به سابقه کار">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <!-- emit-value
                  map-options -->
                  <!--  -->
                 <q-select
                 hide-dropdown-icon
                    map-options
                    :option-value="opt => opt.id"
                    :option-label="opt => opt.title"
                    @input="provinceChanged($event)"
                    :rules="[ val => val   || 'استان الزامی است']"
                    color="teal" outlined label="*استان" v-model="provinceModel['provinceId']" :options="proviance">
                    <template v-slot:prepend>
                               <q-icon name="arrow_drop_down" />
                            </template>
                 </q-select>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                 <!-- emit-value -->
                 <q-select
                 hide-dropdown-icon
                    @input="cityChanged($event)"
                    map-options
                    :option-value="opt => opt.id"
                    :option-label="opt => opt.title"
                    :rules="[ val => val   || 'شهر الزامی است']"
                    color="teal" outlined label="*شهر" v-model="model['cityId']" :options="city">
                    <template v-slot:prepend>
                               <q-icon name="arrow_drop_down" />
                            </template>
                </q-select>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
                 <q-input
                 
                  color="teal" dir="rtl" outlined type="textarea" v-model="model.postalAddress"   label="*آدرس دقیق پستی">
                </q-input>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
                <q-input
                  @blur="setContractContent"
                  @keypress="controlLength($event, 10)"
                  :rules="[
                    val => val !== null && val !== '' && val.length == 10  || 'کد پستی الزامی و شامل 10 رقم می باشد',
                  ]"
                  color="teal" class="numeric-input" type="number" outlined v-model="model.zipCode"   label="*کد پستی">
                </q-input>
            </div>
            <div class="row col-lg-6 col-md-12 col-sm-12 col-xs-12 form-item">  
                <div class="col-12">
                  <q-input
                  @keypress="controlLength($event, 24)"
                  :rules="[
                    val => val !== null && val !== '' && val.length == 24 || 'شماره شبا الزامی و شامل 24 رقم می باشد',
                  ]"
                  color="teal"   class="numeric-input iban" type="number" outlined v-model="model.IBAN"  label="*شماره شبا">
                 </q-input>
                </div>
            </div>
            <div class="row col-lg-6 col-md-12 col-sm-12 col-xs-12 form-item">  
                <div class="col-12">
                  <q-input
                  @keypress="controlLength($event, 16)"
                  :rules="[
                    val => val !== null && val !== '' && val.length == 16 || 'شماره کارت الزامی و شامل 16 رقم می باشد',
                  ]"
                  color="teal"   class="numeric-input iban" type="number" outlined v-model="model.cardNumber"  label="*شماره کارت">
                 </q-input>
                </div>
            </div>
           <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                <q-input
                 @keypress="controlLength($event, 18)"
                  color="teal" class="numeric-input" type="number" outlined v-model="model.identityNumber"   label="شماره حساب">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                <q-input
                  color="teal"  outlined v-model="model.representativeCode"   label="کد معرف">
                </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader @uploaderError="uploaderError" label="*بارگذاری عکس کارت ملی" @successUpload="successNationalCardImagelUpload" v-model="nationalCardImageUrl"  :getUrl="true"/>
               <p v-if="nationalCardUploadImageError" style="color:red;font-size:12px">بارگذاری عکس کارت ملی الزامی است</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
               <Uploader @uploaderError="uploaderError" label="*بارگذاری عکس آخرین مدرک تحصیلی" @successUpload="successLastEducationalCertificateImageUpload" v-model="lastEducationalCertificateImageUrl"  :getUrl="true"/>
               <p v-if="lastEducationalCertificateUploadImageError" style="color:red;font-size:12px">بارگذاری عکس آخرین مدرک تحصیلی الزامی است</p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
               <Uploader @uploaderError="uploaderError" label="بارگذاری سایر موارد" @successUpload="successUserImageUpload" v-model="userImageUrl"  :getUrl="true"/>
               <!-- <p v-if="userUploadImageError" style="color:red;font-size:12px">بارگذاری عکس درخواست کننده الزامی است</p> -->
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item flex justify-end items-center">
                <q-btn color="primary"  type="submit" style="width:120px"  label="بعدی" />
            </div>

            </q-form>
            <q-form :style="isInputsForm ?'display:none':''" @submit="validationAndSendCode()">
              <div class="row contract-container">
                 <div class="col-12 flex justify-center ">
                  <h3 class="contract-title-text">قرارداد همکاری بازاریابی </h3>
                 </div>
                 <div class="contract-content">
                    <p id="contractContent" v-html="contractContent"></p>
                    <q-checkbox v-model="model['acceptContract']" label="متن قرارداد را مطالعه نموده و می پذیرم" />
                    
                 </div>
                 <div class="col-12 flex justify-between items-center q-pa-md">
                      <q-btn color="blue-grey-5" @click="goToMarketerRegistrationForm" style="width:120px"  label="قبلی" />
                      <q-btn color="primary" :loading="loading" type="submit" style="width:120px"  label="ذخیره" />
                   </div>
              </div>
            </q-form>
        </div>
    </div>
    <PopupLogin :needOnlyOtp="true" v-if="showLogin" :model="model"  v-model="showLogin" @onLogin="register()" />
  </div>
</template>
<script>
     import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "marketerRegistration",
    data(){
        return{
          contractContent : '' ,
           isInputsForm : false ,
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
            isLoading : false ,
            nationalCardImageUrl : '',
            isContractForm : false ,
            workExperience : [],
            lastEducationalCertificate : '',
            selectedDate : '' ,
            genderTypesList : [],
            model : {
                firstName : '' , 
                lastName : '' ,
                genderType : '',
                nationalCode : '' ,
                representativeCode : '' ,
                subjectParamId : '' ,
                mobile : '' ,
                advertisementId : '' ,
                personalityType : '' ,
                identityNumber :'' ,
                acceptContract : false ,
                IBAN : '',
                bimehExperienceId : '' ,
                workExperienceId : '',
                cardNumber : '' ,
                descriptionExperience : '' ,
                educationId : '',
                provinceId : ''
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
.marketer-containser{
  flex-wrap: nowrap;
  .sidebar{
   width: 100%;
   min-width: 400px;
  background-color: #74bcb9;
  display: flex;
  flex-direction: column;
  .contract-header{
     display: flex;
     justify-content: flex-start;
     padding-right: 15px;
     padding-top: 15px;
     h2{
       margin-bottom: 0;
       font-weight: 600;
     }
     img{
         width: 250px;
         margin-top: 15px;
     }
  }
  .contract-title-text{
    margin: 30px 0px 5px 0px;
    line-height: 1;
  }
  
  
  .contract-footer{
    padding: 15px 0px;
    color:#000;
  }
  }
  .contract-container{
    background-color: #fff;
    .contract-content{
   flex-grow: 1;
   flex-basis: 0;
   max-height: 800px;
   padding: 15px;
    text-align: justify;
    font-size: 15px;
    line-height: 2;
    // color:#fff;
    overflow: auto;
    color: #000;
    p{
      margin: 0;
      font-weight: 600;
    }
  }
  }
  .seprator{
    min-width: 10px;
    background-color: transparent;
  }
}

  .q-virtual-scroll__content .q-item{
      direction: rtl !important;
  }
  .seller-register{
      padding: 100px 6% 50px !important;
      background-color: #ececec;
      direction: rtl;

      .form{
          padding: 10px;
          background-color: #fff;
          
          .form-item{
              padding: 10px;
          }
      }
      .numeric-input{
          input{
              text-align: left;
              direction: ltr;
          }
      }
  }
  .persian-calender{
      .q-date__header-title-label{
          font-size: 16px;
      }
  }
  .q-field--standout .q-field__control{
      background:#94d6c7 !important;
      
  }
  .iban{
    input{
      font-family:sans-serif !important;
    }
  }
  .replaced-span{
    color:#0d8b82;
  }
    @media only screen and (max-width:992px) {
        
      .marketer-containser{
         flex-wrap:wrap;
      }
      .sidebar{
        width: 100% !important;
        min-height: 300px;
      }
      .marketer-containser .seprator {
        width: 100%;
        height: 10px;
      }
      .marketer-containser .sidebar .contract-header img {
         width: 175px;
     }
     .marketer-containser .sidebar .contract-content {  
        min-height: 160px;
      }
      .marketer-containser .sidebar{
        min-width:unset;
      }
  }
  @media only screen and (max-width:768px) {
      .seller-register .image-container{
          display: none !important;
      }  
      
  }
</style>

