<template>
    <div class="coopration" dir="rtl" >
       <div class="row form-container">
         <h2>همکاری با نماینده بیمه</h2>
         <div class="seprator"></div>
         <p>با توجه به پیشرفت روزافزون و رشد قابل توجه این سامانه ی بیمه ای ، برآن شدیم که عوامل بیمه‌ای فعال حال حاضر کشور را دور هم آورده و همراه خود به سمت فردای روشن و سرافراز ایران پیش ببریم.</p>
         <p>اگر شما از عوامل بیمه ای معتبر (مورد تایید بیمه مرکزی) بوده و راغب به همکاری با ما هستید، فرم زیر را پر کنید. ما در اسرع وقت با شما تماس خواهیم گرفت.</p>
         <q-form class="row col-lg-10 col-md-10 col-sm-10 col-xs-12 form" @submit="validationAndSendCode()">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    :rules="[
                      val => val !== null && val !== '' || 'نام مدیر الزامی است',
                    ]"
                    dir="rtl"
                    color="teal" outlined  v-model="model.firstName"   label="*نام مدیر ">
                  </q-input>
              </div>
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    :rules="[
                      val => val !== null && val !== '' || 'نام خانوادگی مدیر الزامی است',
                    ]"
                    dir="rtl"
                    color="teal" outlined  v-model="model.lastName"   label="*نام خانوادگی مدیر ">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                      @keypress="controlLength($event,10)"
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
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                  <q-input
                  :rules="[
                      val => val !== null && val !== '' || 'ایمیل الزامی است',
                    ]"
                    color="teal" class="numeric-input" outlined v-model="model.email"   label="*ایمیل">
                  </q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    :rules="[
                      val => val !== null && val !== '' || ' تلفن ثابت با پیش شماره الزامی است',
                    ]"
                    color="teal" class="numeric-input" outlined type="number" v-model="model.phone"   label="*تلفن ثابت با پیش شماره">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    color="teal" class="numeric-input" outlined type="number" v-model="model.phone2"   label="تلفن ثابت 2">
                  </q-input>
              </div>
  
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                  <q-input
                    color="teal" outlined  v-model="model.fax" class="numeric-input"  label="فکس">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                  <q-input
                    color="teal" outlined class="numeric-input" v-model="model.webSite"   label="آدرس وب سایت">
                  </q-input>
              </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
              <q-select
                hide-dropdown-icon
                 emit-value
                 map-options
                 :option-value="opt => opt.id"
                 :option-label="opt => opt.title"
                 color="teal" outlined v-model="model['representationType']"  :options="PersonalityTypes"  label="نوع نمایندگی">
                 <template v-slot:prepend>
                           <q-icon name="arrow_drop_down" />
                        </template>
              </q-select>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
              <q-select
              hide-dropdown-icon
                  emit-value
                  map-options
                  :option-value="opt => opt.id"
                  :option-label="opt => opt.title"
                  :rules="[ val => val   || 'شرکت بیمه الزامی است']"
                  color="teal" outlined v-model="model['insuranceCompanyId']"  :options="insuranceCompanies"  label="*نام شرکت بیمه">
                  <template v-slot:prepend>
                           <q-icon name="arrow_drop_down" />
                        </template>
               </q-select>
            </div>
  
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-select
                      hide-dropdown-icon
                      :use-input="true"
                      emit-value
                      map-options
                      outlined
                      label="*سال ثبت "
                      :option-value="opt => opt.id"
                      :option-label="opt => opt.title"
                      :rules="[ val => val || 'سال ثبت الزامی است']"
                      color="teal" borderless v-model="model['registrationYear']" :options="registrationCompanyYear" >
                      <template v-slot:prepend>
                           <q-icon name="arrow_drop_down" />
                        </template>
                      </q-select>
              </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
                  <q-input
                    :rules="[
                      val => val !== null && val !== '' || 'تعداد پرسنل  الزامی است',
                    ]"
                    color="teal" class="numeric-input" outlined type="number" v-model="model.numberOfStaff"   label="*تعداد پرسنل ">
                  </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-left:5px">
              <q-select
                hide-dropdown-icon
                 emit-value
                 map-options
                 :option-value="opt => opt.id"
                 :option-label="opt => opt.title"
                 color="teal" outlined v-model="model['startTime']"  :options="startTimes"  label="ساعت شروع کار">
                 <template v-slot:prepend>
                           <q-icon name="arrow_drop_down" />
                        </template>
              </q-select>
            </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-right:5px">
              <q-select
                hide-dropdown-icon
                 emit-value
                 map-options
                 :option-value="opt => opt.id"
                 :option-label="opt => opt.title"
                 color="teal" outlined v-model="model['endTime']"  :options="endTimes"  label="ساعت پایان کار">
                 <template v-slot:prepend>
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
                    color="teal" class="numeric-input" type="number" outlined v-model="model.zipCode"   label="*کد پستی">
                  </q-input>
              </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                   <q-select
                      hide-dropdown-icon
                      emit-value
                      map-options
                      :option-value="opt => opt.id"
                      :option-label="opt => opt.title"
                      @input="provinceChanged"
                      :rules="[ val => val   || 'استان الزامی است']"
                      color="teal" outlined label="*استان" v-model="model['provinceId']" :options="proviance">
                      <template v-slot:prepend>
                           <q-icon name="arrow_drop_down" />
                        </template>
                   </q-select>
              </div>
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item" style="padding-bottom:20px">
                   <q-select
                   hide-dropdown-icon
                      emit-value
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
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
                  <q-input
                    color="teal" class="numeric-input" outlined v-model="model.representativeCode"   label="کد معرف">
                  </q-input>
              </div>
  
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item" style="padding-bottom:20px">
                   <q-input
                    color="teal" dir="rtl" outlined type="textarea" v-model="model.postalAddress"   label="آدرس دقیق پستی">
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
                 <Uploader @uploaderError="uploaderError" label="*بارگذاری سایر موارد" @successUpload="successUserImageUpload" v-model="userImageUrl"  :getUrl="true"/>
                 <p v-if="userUploadImageError" style="color:red;font-size:12px">بارگذاری سایر موارد الزامی است</p>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item flex justify-end items-center">
                  <q-btn color="primary" :loading="loading" type="submit" style="width:120px"  label="ارسال اطلاعات" />
              </div>
         </q-form>
       </div>
       <PopupLogin :needOnlyOtp="true" v-if="showLogin" :model="model"  v-model="showLogin" @onLogin="sendAgentRegistration()" />
    </div>
  </template>
  <script>
      import { defineComponent } from "vue";
  
      export default defineComponent({
    name: "agentRegisteration",
    data(){
        return{
            lastEducationalCertificateUploadImageError : '',
            nationalCardUploadImageError : '',
            showLogin : false ,
            userUploadImageError : false ,
         
            advertisementDitailTitle : '' ,
            advertisementDitailContent : 'test',
            loading : false ,
            info:'' ,
            suggestionsCritic : [] ,
            isLoading : false , 
            city : [] ,
            proviance : [] ,
            endTimes : [], 
            registrationCompanyYear : '' ,
            insuranceCompanies :  [] ,
            PersonalityTypes : [] ,
            model : {
                firstName : '' , 
                lastName : '' ,
                nationalCode : '' ,
                zipCode : '' ,
                representativeCode : '' ,
                subjectParamId : '' ,
                mobile : '' ,
                advertisementId : '' ,
                personalityType : '' ,
                endTime : '' , 
                postalAddress : '' , 
                cityId : '' , 
                email : '',
                provinceId : '' ,
                hasCourier : false , 
                workOnHolidays : true , 
                startTimes : [] ,
                numberOfStaff : '' , 
                registrationYear : '' , 
                insuranceCompanyId : '' ,
                webSite : '' ,
                representationType : '' ,
                fax : '' , 
                phone : '' ,
                phone2 : '' , 

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
    .coopration{
        padding: 100px 6% 50px !important;
        background-color: #ececec;
        .form-container{
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
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
  
  