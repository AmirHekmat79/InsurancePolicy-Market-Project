<template>
  <div class="submit-damage-container">
    <q-dialog v-model="showAcceptedForm">
      <q-card style="width: 700px; max-width: 80vw; direction: rtl;">
        <q-card-section>
          <div class="text-h6">ثبت خسارت</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <div class="row">
              <img
                alt="register-success"
                src="https://media.easybimeh.com/Easybimeh/FileManager.Front/portal/assets/images/register-success.svg"
              />

              <div
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding"
                style="min-width: 100px;"
              >
                <h4 style="font-size: 25px;">
                  درخواست ثبت خسارت با موفقیت ارسال شد!
                </h4>
              </div>

              <div
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding"
                style="min-width: 100px;"
              >
                <span>
                  با استفاده از کد رهگیری زیر در قسمت
                  <span style="color: #3b8bff;">
                    پیگیری خسارت
                  </span>
                  ، میتوانید وضعیت .درخواست را پیگیری نمایید
                </span>
              </div>

              <div
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding"
                style="min-width: 100px;"
              >
                <p class="code">
                  کد رهگیری:
                  <span class="blue">
                    {{ trackingCode }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-card-section style="max-width: 70rem; margin: auto; direction: rtl;">
      <q-card-section>
        <div class="text-h6">ثبت خسارت</div>
      </q-card-section>
      <div style="display: none;">
        {{ model }}
      </div>
      <q-card-section class="q-pt-none">
        <q-form @submit="submit()" class="q-gutter-md">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
              <q-select
                class="label-right"
                hide-dropdown-icon
                emit-value
                map-options
                :option-value="(opt) => opt.id"
                :option-label="(opt) => opt.title"
                :rules="[(val) => val || 'نوع بیمه نامه الزامی است']"
                color="teal"
                outlined
                v-model="insuranceTypeId"
                :options="insurancePolicyTypeOptions"
                label="نوع بیمه نامه"
              >
                <template v-slot:append>
                  <q-icon name="arrow_drop_down" />
                </template>
              </q-select>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
              <q-select
                class="label-right"
                hide-dropdown-icon
                emit-value
                map-options
                :option-value="(opt) => opt.id"
                :option-label="(opt) => opt.title"
                :rules="[(val) => val || 'شرکت بیمه الزامی است']"
                color="teal"
                outlined
                v-model="model['insuranceCompanyId']"
                :options="insuranceCompanyOptions"
                label="شرکت بیمه"
              >
                <template v-slot:append>
                  <q-icon name="arrow_drop_down" />
                </template>
              </q-select>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
              <q-input
                class="label-right"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'شماره بیمه نامه الزامی است',
                ]"
                color="teal"
                outlined
                v-model="model['insurancePolicyNumber']"
                label="شماره بیمه نامه"
              >
              </q-input>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
              <q-select
                class="label-right"
                hide-dropdown-icon
                emit-value
                map-options
                multiple
                :option-value="(opt) => opt.id"
                :option-label="(opt) => opt.id"
                :rules="[(val) => val || 'نوع خسارت الزامی است']"
                color="teal"
                outlined
                v-model="model['damageTypes']"
                :options="damagetypes"
                label="نوع خسارت"
              >
                <template v-slot:append>
                  <q-icon name="arrow_drop_down" />
                </template>
              </q-select>
            </div>
            <div
              class="col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"
              style="position: relative;"
            >
              <p
                style="
                  margin: 0;
                  position: absolute;
                  font-size: 12px;
                  right: 30px;
                  top: 2px;
                "
              >
                تاریخ وقوع خسارت
              </p>
              <q-input
                filled
                class="item-with-margin label-right"
                lable="تاریخ وقوع خسارت"
                readonly
                v-model="model.damagePersianDate"
                mask="date"
                input-style="text-align: left"
              >
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="toDateElement"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        calendar="persian"
                        dir="rtl"
                        mask="YYYY-MM-DD"
                        @input="toDateChanged"
                        v-model="model.damagePersianDate"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
              <div class="q-px-sm">
                شخصیت بیمه گذار :
              </div>
              <div class="q-gutter-sm">
                <q-radio
                  v-model="model.personalityType"
                  :val="0"
                  label="حقیقی"
                />
                <q-radio
                  v-model="model.personalityType"
                  :val="1"
                  label="حقوقی"
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
              <q-input
                class="label-right"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    (model.personalityType == 1
                      ? 'نام شرکت'
                      : 'نام و نام خانوادگی' + ' الزامی است'),
                ]"
                color="teal"
                outlined
                v-model="model['name']"
                :label="
                  model.personalityType == 1 ? 'نام شرکت' : 'نام و نام خانوادگی'
                "
              >
              </q-input>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
              <q-input
                class="label-right"
                v-if="model.personalityType == 1"
                @keypress="controlLength($event, 11)"
                :rules="[
                  (val) =>
                    (val !== null &&
                      val !== undefined &&
                      val !== '' &&
                      val.length == 11) ||
                    'شناسه ملی الزامی و شامل 11 رقم می باشد',
                ]"
                color="teal"
                outlined
                v-model="model['nationalCode']"
                type="number"
                :label="'شناسه ملی'"
              >
              </q-input>
              <q-input
                class="label-right"
                v-else
                @keypress="controlLength($event, 10)"
                color="teal"
                outlined
                v-model="model['nationalCode']"
                type="number"
                :label="'کد ملی'"
              >
              </q-input>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
              <q-input
                class="label-right"
                @keypress="controlLength($event, 11)"
                :rules="[
                  (val) =>
                    (val !== null &&
                      val !== undefined &&
                      val !== '' &&
                      val.length == 11) ||
                    'الزامی و شامل 11 رقم می باشد' ||
                    (model.personalityType == 1
                      ? 'تلفن همراه نماینده'
                      : 'تلفن همراه' + ' الزامی است'),
                ]"
                color="teal"
                outlined
                v-model="model['mobile']"
                type="number"
                :label="
                  model.personalityType == 1
                    ? 'تلفن همراه نماینده'
                    : 'تلفن همراه'
                "
              >
              </q-input>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
              <q-input
                class="label-right"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'مشخصات بیمه شده/مورد بیمه الزامی است',
                ]"
                color="teal"
                outlined
                v-model="model['insuredProfile']"
                label="مشخصات بیمه شده/مورد بیمه"
              >
              </q-input>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
              <q-input
                class="label-right"
                color="teal"
                outlined
                v-model="model['description']"
                label="توضیحات"
                type="textarea"
              >
              </q-input>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
              <MultiUploader
                v-model="model.trackingDamageFile"
                style="padding-top: 20px;"
                title="بارگذاری مدارک و مستندات"
              />
            </div>
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs flex justify-end"
            >
              <q-btn
                class="submit-button"
                label="ذخیره"
                type="submit"
                :loading="saveDataLoading"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card-section>
  </div>
</template>

<script>
import services from "src/services/services";
import { defineComponent } from "vue";
import optionServices from "src/services/optionServices.js";
import MultiUploader from "src/components/uploader/multiUploader.vue";
export default defineComponent({
  name: "TrackingDamage",
  components: {
    MultiUploader,
  },
  data() {
    return {
      trackingDamageModel: [],
      activeTrackingDamageStatusIndex: 0,
      trackingDamageStatus: -1,
      showAcceptedForm: false,
      trackingCode: "",
      trackingIndex: 0,
      self: this,
      loading: false,
      damagetypes: [
        { id: "جانی" },
        { id: "مالی" },
        { id: "سایر" },
        { id: "حوادث راننده" },
      ],
      insuranceTypeId: "",
      model: {
        trackingDamageFile: [],
        damageType: "",
        damageTypes: [],
        description: "",
        insuranceCompanyId: "",
        insurancePolicyNumber: "",
        insuranceTypeId: "",
        insuredProfile: "",
        mobile: "",
        name: "",
        nationalCode: "",
        personalityType: "",
        trackingDamageStatus: [],
        damagePersianDate: "",
      },
      insuranceCompanyOptions: [],
      saveDataLoading: false,
      insurancePolicyTypeOptions: [],
    };
  },
  watch: {
    insuranceTypeId() {
      this.model.insuranceTypeId = this.insuranceTypeId;
      this.onTypeChanged(this.insuranceTypeId);
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.insurancePolicyTypeOptions = await (
        await optionServices.getInsuranceTypeDamageForm()
      ).data.message;
    },
    async submit() {
      this.model.damageType = "";
      for (var a of this.model.damageTypes) this.model.damageType += a + ",";
      this.model.trackingDamageStatus = [
        {
          description: this.model.description,
          trackingDamageFile: this.model.trackingDamageFile,
        },
      ];
      this.saveDataLoading = true;
      var response = await services.trackingDamage(this.model);
      if (response.data.isSuccess) {
        this.trackingCode = response.data.message;
        this.showAcceptedForm = true;
      }
      this.saveDataLoading = false;
    },
    async onTypeChanged(data) {
      this.insuranceCompanyOptions = (
        await optionServices.getInsuranceCompanies(data)
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
  },
});
</script>

<style lang="scss">
.submit-damage-container {
  padding: 100px 5% 10px;
  .submit-button {
    background-color: var(--q-themeColor);
    color: #fff;
  }
}
</style>
