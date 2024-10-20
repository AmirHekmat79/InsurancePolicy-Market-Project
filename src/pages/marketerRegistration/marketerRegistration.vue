<template>
  <div class="seller-register" dir="rtl">
    <div hidden>{{ counter }}</div>
    <div
      class="marketer-containser flex"
      style="border-radius: 10px; overflow: hidden;"
    >
      <div class="sidebar">
        <div class="contract-header flex column justify-center items-center">
          <h4>ثبت نام فروشنده</h4>
          <img
            src="images/marketerRegistration.jpg"
            style="border-radius: 50%;"
            alt="ثبت نام"
          />
        </div>
      </div>
      <div class="seprator"></div>
      <div class="form-container">
        <q-form
          :style="isContractForm ? 'display:none' : ''"
          :hidden="isInputsForm"
          @submit="goToContractForm()"
          :class="
            $q.screen.width > 768
              ? 'row col-lg-8 col-md-8 col-sm-8 col-xs-12 form'
              : 'row col-lg-12 col-md-12 col-sm-12 col-xs-12 form'
          "
        >
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-input
              class="label-right"
              :rules="[
                (val) => (val !== null && val !== '') || 'نام الزامی است',
              ]"
              color="teal"
              dir="rtl"
              outlined
              v-model="model.firstName"
              label="نام*"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-input
              class="label-right"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'نام خانوادگی الزامی است',
              ]"
              color="teal"
              dir="rtl"
              outlined
              v-model="model.lastName"
              label="نام خانوادگی*"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-input
              class="label-right numeric-input"
              @keypress="controlLength($event, 10)"
              color="teal"
              outlined
              type="number"
              v-model="model.nationalCode"
              label="کد ملی*"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-input
              class="label-right numeric-input"
              :rules="[
                (val) => (val !== null && val !== '') || 'ایمیل الزامی است',
              ]"
              color="teal"
              outlined
              v-model="model.email"
              label="ایمیل*"
            >
            </q-input>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-input
              @keypress="controlLength($event, 11)"
              :rules="[
                (val) =>
                  (val !== null && val !== '' && val.length == 11) ||
                  (model.personalityType == 1
                    ? 'تلفن همراه نماینده'
                    : 'تلفن همراه' + 'الزامی است و شامل 11 رقم باشد'),
              ]"
              color="teal"
              class="label-right numeric-input"
              outlined
              type="number"
              v-model="model.mobile"
              label="تلفن همراه*"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-input
              @keypress="controlLength($event, 11)"
              :rules="[
                (val) =>
                  (val !== null && val !== '' && val.length == 11) ||
                  ' تلفن ثابت با پیش شماره الزامی است',
              ]"
              color="teal"
              class="label-right numeric-input"
              outlined
              type="number"
              v-model="model.phone"
              label="تلفن ثابت با پیش شماره*"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-select
              hide-dropdown-icon
              emit-value
              map-options
              :option-value="(opt) => opt.id"
              :option-label="(opt) => opt.title"
              class="label-right"
              color="teal"
              outlined
              label="جنسیت*"
              v-model="model['genderType']"
              :options="genderTypesList"
            >
              <template v-slot:append>
                <q-icon name="arrow_drop_down" />
              </template>
            </q-select>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item"
            style="position: relative;"
          >
            <span
              style="
                position: absolute;
                top: 10px;
                right: 45px;
                font-size: 12px;
              "
              >تاریخ تولد*</span
            >
            <q-input
              filled
              lable="*تاریخ تولد"
              :rules="[(val) => dateValidator(val) || ' تاریخ تولد الزامی است']"
              v-model="selectedDate"
              placeholder="####/##/##"
              mask="####/##/##"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="birthDay"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      calendar="persian"
                      class="persian-calender"
                      :title="selectedDate"
                      subtitle="تاریخ انتخاب شده :"
                      mask="YYYY-MM-DD"
                      dir="rtl"
                      lable="تاریخ تولد*"
                      v-model="selectedDate"
                      @input="changeDate"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-item">
            <q-select
              hide-dropdown-icon
              class="label-right"
              emit-value
              map-options
              :option-value="(opt) => opt.id"
              :option-label="(opt) => opt.title"
              :rules="[(val) => val || 'آخرین مدرک تحصیلی الزامی است']"
              color="teal"
              outlined
              v-model="model['educationId']"
              :options="lastEducationalCertificate"
              label="آخرین مدرک تحصیلی*"
            >
              <template v-slot:append>
                <q-icon name="arrow_drop_down" />
              </template>
            </q-select>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-item">
            <q-select
              class="label-right"
              hide-dropdown-icon
              emit-value
              map-options
              :option-value="(opt) => opt.id"
              :option-label="(opt) => opt.title"
              :rules="[(val) => val || 'سابقه کار مرتبط با بیمه الزامی است']"
              color="teal"
              outlined
              v-model="model['bimehExperienceId']"
              :options="workExperience"
              label="سابقه کار مرتبط با بیمه*"
            >
              <template v-slot:append>
                <q-icon name="arrow_drop_down" />
              </template>
            </q-select>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-item">
            <q-select
              class="label-right"
              hide-dropdown-icon
              emit-value
              map-options
              :option-value="(opt) => opt.id"
              :option-label="(opt) => opt.title"
              :rules="[(val) => val || 'سابقه کار مرتبط با بیمه الزامی است']"
              color="teal"
              outlined
              v-model="model['workExperienceId']"
              :options="workExperience"
              label="سابقه کار مرتبط با بازاریابی*"
            >
              <template v-slot:append>
                <q-icon name="arrow_drop_down" />
              </template>
            </q-select>
          </div>
          <div
            v-if="
              (!!model['workExperienceId'] || !!model['bimehExperienceId']) &&
              (model['workExperienceId'] > 1 || model['bimehExperienceId'] > 1)
            "
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item"
          >
            <q-input
              class="label-right"
              color="teal"
              dir="rtl"
              outlined
              type="textarea"
              v-model="model.descriptionExperience"
              label="توضیحات مربوط به سابقه کار"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-select
              class="label-right"
              hide-dropdown-icon
              map-options
              :option-value="(opt) => opt.id"
              :option-label="(opt) => opt.title"
              :rules="[(val) => val.id || 'استان الزامی است']"
              color="teal"
              outlined
              label="استان*"
              v-model="provinceModel"
              :options="proviance"
            >
              <template v-slot:append>
                <q-icon name="arrow_drop_down" />
              </template>
            </q-select>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-item">
            <q-select
              class="label-right"
              hide-dropdown-icon
              map-options
              :option-value="(opt) => opt.id"
              :option-label="(opt) => opt.title"
              :rules="[(val) => val.id || 'شهر الزامی است']"
              color="teal"
              outlined
              label="شهر*"
              v-model="cityModel"
              :options="city"
            >
              <template v-slot:append>
                <q-icon name="arrow_drop_down" />
              </template>
            </q-select>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
            <q-input
              class="label-right"
              color="teal"
              dir="rtl"
              outlined
              type="textarea"
              v-model="model.postalAddress"
              label="آدرس دقیق پستی*"
            >
            </q-input>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
            <q-input
              class="label-right numeric-input"
              @blur="setContractContent"
              @keypress="controlLength($event, 10)"
              :rules="[
                (val) =>
                  (val !== null && val !== '' && val.length == 10) ||
                  'کد پستی الزامی و شامل 10 رقم می باشد',
              ]"
              color="teal"
              type="number"
              outlined
              v-model="model.zipCode"
              label="کد پستی*"
            >
            </q-input>
          </div>
          <div class="row col-lg-6 col-md-12 col-sm-12 col-xs-12 form-item">
            <div class="col-12">
              <q-input
                @keypress="controlLength($event, 24)"
                :rules="[
                  (val) =>
                    (val !== null && val !== '' && val.length == 24) ||
                    'شماره شبا الزامی و شامل 24 رقم می باشد',
                ]"
                color="teal"
                class="numeric-input label-right iban"
                type="number"
                outlined
                v-model="model.IBAN"
                label="شماره شبا*"
              >
              </q-input>
            </div>
          </div>
          <div class="row col-lg-6 col-md-12 col-sm-12 col-xs-12 form-item">
            <div class="col-12">
              <q-input
                @keypress="controlLength($event, 16)"
                :rules="[
                  (val) =>
                    (val !== null && val !== '' && val.length == 16) ||
                    'شماره کارت الزامی و شامل 16 رقم می باشد',
                ]"
                color="teal"
                class="numeric-input iban label-right"
                type="number"
                outlined
                v-model="model.cardNumber"
                label="شماره کارت*"
              >
              </q-input>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
            <q-input
              @keypress="controlLength($event, 18)"
              color="teal"
              class="numeric-input label-right"
              type="number"
              outlined
              v-model="model.identityNumber"
              label="شماره حساب"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
            <q-input
              class="label-right"
              color="teal"
              outlined
              v-model="model.representativeCode"
              label="کد معرف"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
            <Uploader
              :title="'عکس کارت ملی'"
              :isRequire="true"
              @uploaderError="uploaderError"
              label="بارگذاری عکس کارت ملی*"
              @successUpload="successNationalCardImagelUpload"
              v-model="nationalCardImageUrl"
              :getUrl="true"
            />
            <p
              v-if="nationalCardUploadImageError"
              style="color: red; font-size: 12px;"
            >
              بارگذاری عکس کارت ملی الزامی است
            </p>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-item">
            <Uploader
              :title="'آخرین مدرک تحصیلی'"
              :isRequire="true"
              @uploaderError="uploaderError"
              label="بارگذاری عکس آخرین مدرک تحصیلی*"
              @successUpload="successLastEducationalCertificateImageUpload"
              v-model="lastEducationalCertificateImageUrl"
              :getUrl="true"
            />
            <p
              v-if="lastEducationalCertificateUploadImageError"
              style="color: red; font-size: 12px;"
            >
              بارگذاری عکس آخرین مدرک تحصیلی الزامی است
            </p>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item">
            <Uploader
              :title="'سایر موارد'"
              @uploaderError="uploaderError"
              label="بارگذاری سایر موارد"
              @successUpload="successUserImageUpload"
              v-model="userImageUrl"
              :getUrl="true"
            />
          </div>
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-item flex justify-end items-center"
          >
            <q-btn
              class="next-button"
              type="submit"
              style="width: 120px;"
              label="بعدی"
            />
          </div>
        </q-form>
        <q-form
          :style="isInputsForm ? 'display:none' : ''"
          @submit="validationAndSendCode()"
        >
          <div class="row contract-container">
            <div class="col-12 flex justify-center">
              <h3 class="contract-title-text">قرارداد همکاری بازاریابی</h3>
            </div>
            <div class="contract-content">
              <p id="contractContent" v-html="contractContent"></p>
              <q-checkbox
                v-model="model['acceptContract']"
                label="متن قرارداد را مطالعه نموده و می پذیرم"
              />
            </div>
            <div class="col-12 flex justify-between items-center q-pa-md">
              <q-btn
                color="blue-grey-5"
                @click="goToMarketerRegistrationForm"
                style="width: 120px;"
                label="قبلی"
              />
              <q-btn
                class="submit-button"
                :loading="loading"
                type="submit"
                style="width: 120px;"
                label="ذخیره"
              />
            </div>
          </div>
        </q-form>
      </div>
    </div>
    <OtpDialog
      @close="showOtpDialog = false"
      :needOnlyOtp="true"
      v-if="showOtpDialog"
      :model="model"
      @onLogin="register()"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import optionServices from "src/services/optionServices.js";
import services from "src/services/services";
import Uploader from "src/components/uploader/uploader.vue";
import OtpDialog from "src/components/otpDialog.vue";
import * as shamsi from "shamsi-date-converter";
export default defineComponent({
  name: "MarketerRegistration",
  data() {
    return {
      baseData: [],
      provinceModel: {},
      cityModel: {},
      model: {
        firstName: "",
        lastName: "",
        email: "",
        nationalCode: "",
        mobile: "",
        phone: "",
        genderType: "",
        birthDay: "",
        educationId: "",
        workExperienceId: "",
        cityId: "",
        postalAddress: "",
        zipCode: "",
        IBAN: "",
        identityNumber: "",
        bimehExperienceId: "",
        cardNumber: "",
        representativeCode: "",
        acceptContract: false,
        contractContent: "",
        contentFile: "",
        descriptionExperience: "",
      },
      lastEducationalCertificate: [],
      workExperience: [],
      proviance: [],
      city: [],
      genderTypesList: [],
      loading: false,
      selectedDate: "",
      gregorianBirthDay: "",
      showLogin: false,
      time: 0,
      timer: "",
      nationalCardImageUrl: "",
      nationalCardImageMediaId: 0,
      nationalCardUploadImageError: false,
      lastEducationalCertificateImageUrl: "",
      lastEducationalCertificateImageMediaId: 0,
      lastEducationalCertificateUploadImageError: false,
      userImageUrl: "",
      userImageMediaId: 0,
      userUploadImageError: false,
      files: [],
      uploaderHasError: false,
      contractContent: "",
      contentFile: "",
      counter: 0,
      isInputsForm: true,
      isContractForm: false,
      showOtpDialog: false,
    };
  },
  components: {
    Uploader,
    OtpDialog,
  },
  mounted() {
    this.init();
  },
  watch: {
    provinceModel() {
      this.provinceChanged();
    },
  },
  methods: {
    async init() {
      this.proviance = (await optionServices.getProvince()).data.message;
      this.lastEducationalCertificate = (
        await optionServices.getLastEducationalCertificate()
      ).data.message;
      this.workExperience = (
        await optionServices.getWorkExperience()
      ).data.message;
      this.genderTypesList = (
        await optionServices.getGenderTypes()
      ).data.message;
      var contractContentResponse = await services.getContractContent();
      this.contractContent =
        contractContentResponse.data.message.contractContent;
      if (contractContentResponse.data.message.contentFile) {
        this.contentFile = contractContentResponse.data.message.contentFile;
      }
      if (
        this.contractContent.replace(
          /firstName/g,
          "<span class='replaced-span first-name'></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /firstName/g,
          "<span class='replaced-span first-name' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /lastName/g,
          "<span class='replaced-span last-name' ></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /lastName/g,
          "<span class='replaced-span last-name' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /nationalCode/g,
          "<span class='replaced-span national-code' ></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /nationalCode/g,
          "<span class='replaced-span national-code' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /city/g,
          "<span class='replaced-span city' ></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /city/g,
          "<span class='replaced-span city' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /province/g,
          "<span class='replaced-span province' ></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /province/g,
          "<span class='replaced-span province' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /address/g,
          "<span class='replaced-span address' ></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /address/g,
          "<span class='replaced-span address' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /zipCode/g,
          "<span class='replaced-span zip-code' ></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /zipCode/g,
          "<span class='replaced-span zip-code' ></span>"
        );
      }
      if (
        this.contractContent.replace(
          /phone/g,
          "<span class='replaced-span phone' id='phone'></span>"
        )
      ) {
        this.contractContent = this.contractContent.replace(
          /phone/g,
          "<span class='replaced-span phone' ></span>"
        );
      }
      //  if(this.contractContent.replace(/mobile/g, "<span class='replaced-span mobile' ></span>")){
      //    this.contractContent=this.contractContent.replace(/mobile/g, "<span class='replaced-span mobile' ></span>")
      //  }
      if (contractContentResponse.message.contentFile) {
        this.model.contentFile = contractContentResponse.message.contentFile;
      }
    },
    async provinceChanged() {
      this.model.cityId = "";
      this.city = (
        await optionServices.getCityByProvinceId(this.provinceModel.id)
      ).data.message;
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
    // cityChanged(event){
    //   this.model.cityId=event.id;
    //   if(this.model.cityId){
    //    var elements = document.getElementsByClassName("city");
    //    for (var i= 0; i < elements.length ; i++) {
    //        elements[i].innerHTML=event.title;
    //    }
    //  }
    // },

    changeDate(data) {
      this.selectedDate = data;
      var shamsi = require("shamsi-date-converter");
      var convertedDate = shamsi.jalaliToGregorian(
        parseInt(data.split("/")[0]),
        parseInt(data.split("/")[1]),
        parseInt(data.split("/")[2])
      );
      this.gregorianBirthDay =
        convertedDate[0] + "-" + convertedDate[1] + "-" + convertedDate[2];
      var element = this.$refs.birthDay;
      element["hide"]();
    },
    // changeDateWithHand(event){
    //   if(this.dateValidator(event.target._value)==true){
    //      this.selectedDate=event.target._value;
    //      var shamsi = require('shamsi-date-converter');
    //      var convertedDate=shamsi.jalaliToGregorian(parseInt(event.target._value.split('/')[0]), parseInt(event.target._value.split('/')[1]), parseInt(event.target._value.split('/')[2]))
    //      this.gregorianBirthDay=convertedDate[0]+'-'+convertedDate[1]+'-'+convertedDate[2];
    //   }
    // },
    dateValidator(value) {
      if (!value) {
        return "تاریخ تولد الزامی می باشد";
      }
      var sp = value.substr(0, 10).split("/");
      if (sp.length != 3) {
        return "فرمت تاریخ اشتباه است";
      }
      if (sp[0].length != 4) {
        return "سال باید ۴ رقم باشد";
      }
      try {
        var year = parseInt(sp[0]);
        if (year < 1200 || year > 2600) {
          return "سال باید بزرگتر از  ۱۲۰۰ بباشد";
        }
      } catch (exp) {
        return "سال اشتباه است";
      }
      if (sp[1].length != 2) {
        return "ماه باید ۲ رقم باشد";
      }
      try {
        var mon = parseInt(sp[1]);
        if (mon < 1 || mon > 12) {
          return "ماه باید بین ۱ تا ۱۲ باشد";
        }
      } catch (exp) {
        return "ماه اشتباه است";
      }
      if (sp[2].length != 2) {
        return "وارد کرد روز الزامی و شامل دو رقم می باشد";
      }
      try {
        var day = parseInt(sp[2]);
        if (day < 1 || day > 31) {
          return "روز باید بین ۱ تا ۳۱ باشد";
        }
      } catch (exp) {
        return "روز اشتباه است";
      }

      return true;
    },
    async sendCode() {
      this.loading = true;
      try {
        await services.sendSms(this.model.nationalCode, this.model.mobile);
        this.showOtpDialog = true;
      } catch (err) {
        console.log("this is err", err);
        var error = err;
        this.$q.notify({
          color: "red",
          textColor: "white",
          icon: "cloud_done",
          message: error.message,
        });
      }
      this.loading = false;
    },
    async register() {
      console.log("this is model", this.model);
      this.showOtpDialog = false;
      this.loading = true;
      this.model.cityId = this.cityModel.id;
      var convertedDate = shamsi.jalaliToGregorian(
        parseInt(this.selectedDate.split("/")[0]),
        parseInt(this.selectedDate.split("/")[1]),
        parseInt(this.selectedDate.split("/")[2])
      );
      this.gregorianBirthDay =
        convertedDate[0] + "-" + convertedDate[1] + "-" + convertedDate[2];
      this.model.birthDay = this.gregorianBirthDay;
      if (this.userImageUrl) {
        var uploadedFiles = [
          {
            fileUrl: this.nationalCardImageUrl,
            mediaId: this.nationalCardImageMediaId,
            fileType: 0,
          },
          {
            fileUrl: this.lastEducationalCertificateImageUrl,
            mediaId: this.lastEducationalCertificateImageMediaId,
            fileType: 1,
          },
          {
            fileUrl: this.userImageUrl,
            mediaId: this.userImageMediaId,
            fileType: 3,
          },
        ];
        this.model.files = uploadedFiles;
      } else {
        var uploadedFiles = [
          {
            fileUrl: this.nationalCardImageUrl,
            mediaId: this.nationalCardImageMediaId,
            fileType: 0,
          },
          {
            fileUrl: this.lastEducationalCertificateImageUrl,
            mediaId: this.lastEducationalCertificateImageMediaId,
            fileType: 1,
          },
        ];
        this.model.files = uploadedFiles;
      }
      let contractContent = document.getElementById("contractContent");
      this.model.contractContent = contractContent.innerHTML;
      this.model.contentFile = this.contentFile;

      try {
        await services.postMarketerInformations(this.model).then((res) => {
          this.$q.notify({
            color: "green",
            textColor: "white",
            icon: "cloud_done",
            message: "ثبت اطلاعات با موفقیت انجام شد",
          });
          this.loading = false;
          // window.location.href="/successfulRegistration"
        });
      } catch (error) {
        this.loading = false;
        if (error.response.data.message) {
          this.$q.notify({
            color: "red",
            textColor: "white",
            icon: "error",
            message: error.response.data.message,
          });
        }
        console.log("this is error", error);
      }
    },

    //upload images changes
    successNationalCardImagelUpload(data) {
      this.nationalCardUploadImageError = false;
      this.nationalCardImageMediaId = data.data.message.id;
      this.nationalCardImageUrl = data.data.message.fileUrl;
    },
    successLastEducationalCertificateImageUpload(data) {
      this.lastEducationalCertificateUploadImageError = false;
      this.lastEducationalCertificateImageMediaId = data.data.message.id;
      this.lastEducationalCertificateImageUrl = data.data.message.fileUrl;
    },
    successUserImageUpload(data) {
      this.userUploadImageError = false;
      this.userImageMediaId = data.data.message.id;
      this.userImageUrl = data.data.message.fileUrl;
    },
    validationAndSendCode() {
      if (!this.uploaderHasError) {
        if (!this.nationalCardImageUrl) {
          this.nationalCardUploadImageError = true;
        } else if (!this.lastEducationalCertificateImageUrl) {
          this.lastEducationalCertificateUploadImageError = true;
        } else if (!this.model.acceptContract) {
          this.$q.notify({
            color: "red",
            textColor: "white",
            icon: "error",
            message: "مطالعه متن قرارداد و پذیرش آن الزامی است",
          });
        } else {
          this.nationalCardUploadImageError = false;
          this.lastEducationalCertificateUploadImageError = false;
          this.userUploadImageError = false;
          this.sendCode();
        }
      }
    },
    uploaderError(data) {
      if (data == true) {
        this.uploaderHasError = true;
      } else {
        this.uploaderHasError = false;
      }
    },
    setContractContent() {
      if (this.model.firstName) {
        var elements = document.getElementsByClassName("first-name");
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.model.firstName;
        }
      }
      if (this.model.lastName) {
        var elements = document.getElementsByClassName("last-name");
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.model.lastName;
        }
      }
      if (this.model.nationalCode) {
        var elements = document.getElementsByClassName("national-code");
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.model.nationalCode;
        }
      }
      if (this.model.postalAddress) {
        var elements = document.getElementsByClassName("address");
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.model.postalAddress;
        }
      }
      if (this.model.zipCode) {
        var elements = document.getElementsByClassName("zip-code");
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.model.zipCode;
        }
      }
      if (this.model.phone) {
        var elements = document.getElementsByClassName("phone");
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.model.phone;
        }
      }
      //  if(this.model.mobile){
      //    var elements:any = document.getElementsByClassName("mobile");
      //    for (var i= 0; i < elements.length ; i++) {
      //        elements[i].innerHTML=this.model.mobile;
      //    }
      //  }
    },
    goToContractForm() {
      this.isInputsForm = false;
      this.isContractForm = true;
      window.scrollTo(0, 0);
    },
    goToMarketerRegistrationForm() {
      this.isInputsForm = true;
      this.isContractForm = false;
    },
  },
});
</script>
<style lang="scss">
.marketer-containser {
  padding-top: 80px;
  flex-wrap: nowrap;
  .sidebar {
    width: 100%;
    min-width: 400px;
    background-color: #74bcb9;
    display: flex;
    flex-direction: column;
    .contract-header {
      display: flex;
      justify-content: flex-start;
      padding-right: 15px;
      padding-top: 15px;
      h4 {
        margin-bottom: 0;
        font-weight: 600;
        font-size: 22px;
      }
      img {
        width: 250px;
        margin-top: 15px;
      }
    }

    .contract-footer {
      padding: 15px 0px;
      color: #000;
    }
  }
  .contract-container {
    background-color: #fff;
    .contract-title-text {
      margin: 30px 0px 5px 0px;
      line-height: 1;
      font-size: 22px;
    }
    .contract-content {
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
      p {
        margin: 0;
        font-weight: 600;
      }
    }
  }
  .seprator {
    min-width: 10px;
    background-color: transparent;
  }
  .submit-button,
  .next-button {
    background-color: var(--q-themeColor);
    color: #fff;
  }
}

.q-virtual-scroll__content .q-item {
  direction: rtl !important;
}
.seller-register {
  padding: 100px 6% 50px !important;
  direction: rtl;
  background-color: #e4e4e4;
  .form {
    padding: 10px;
    background-color: #fff;

    .form-item {
      padding: 10px;
    }
  }
  .numeric-input {
    input {
      text-align: left;
      direction: ltr;
    }
  }
}
.persian-calender {
  .q-date__header-title-label {
    font-size: 16px;
  }
}
.q-field--standout .q-field__control {
  background: #94d6c7 !important;
}
.iban {
  input {
    font-family: sans-serif !important;
  }
}
.replaced-span {
  color: #0d8b82;
}
@media only screen and (max-width: 992px) {
  .marketer-containser {
    flex-wrap: wrap;
  }
  .sidebar {
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
  .marketer-containser .sidebar {
    min-width: unset;
  }
}
@media only screen and (max-width: 768px) {
  .seller-register .image-container {
    display: none !important;
  }
}
</style>
