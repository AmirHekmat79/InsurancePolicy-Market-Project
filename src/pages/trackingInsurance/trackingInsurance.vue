<template>
  <q-card-section
    class="tracking-insurance-container"
    style="max-width: 70rem; margin: auto; direction: rtl;"
  >
    <q-card-section>
      <div class="text-h6" style="direction: rtl;">پیگیری بیمه نامه</div>
    </q-card-section>
    <q-form @submit="submit()">
      <div class="row" style="max-width: 70rem; margin: auto;">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
          <q-input
            outlined
            class="label-right"
            label="کد رهگیری یا شماره سریال بیمه نامه*"
            v-model="trackingCode"
            :rules="[(val) => (val !== null && val !== '') || 'الزامی می باشد']"
          >
          </q-input>
        </div>
        <div
          v-if="trcking.policyImage"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <q-btn
            color="primary"
            label="رویت و چاپ"
            style="margin: 10px; width: 150px;"
            @click="print()"
          />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
          <q-input
            class="label-right"
            :rules="[(val) => (val !== null && val !== '') || 'الزامی است']"
            color="teal"
            @keypress="controlLength($event, 10)"
            outlined
            v-model="nationalCode"
            label="کدملی یا شماره گذرنامه متقاضی"
            type="number"
            input-style="text-align: left"
          >
          </q-input>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex justify-end q-pl-sm"
        >
          <q-btn label="پیگیری" type="submit" class="submit-button" />
        </div>
      </div>

      <q-dialog v-model="showTrckingResult">
        <q-card style="width: 700px; max-width: 80vw; direction: rtl;">
          <q-card-section>
            <div class="text-h6">نتیجه درخواست</div>
          </q-card-section>

          <q-card-section class="q-pt-none trcking-result">
            <div
              v-if="showTrckingResult"
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-margin"
            >
              <p>
                <span class="title">نام : </span>
                <span>
                  {{ trcking.aliasName }}
                </span>
              </p>
              <p>
                <span class="title">تاریخ درخواست : </span>
                <span>
                  {{ trcking.createOnPersianDate }}
                </span>
              </p>
              <p>
                <span class="title">نام مرکز : </span>
                <span>
                  {{ trcking.centerName }}
                </span>
              </p>
              <p>
                <span class="title">نوع بیمه : </span>
                <span>
                  {{ trcking.insuranceType }}
                </span>
              </p>
              <p>
                <span class="title">قیمت : </span>
                <span> {{ trcking.price }} ریال </span>
              </p>
              <p>
                <span class="title">وضعیت درخواست : </span>
                <span>
                  {{ trcking.status }}
                </span>
              </p>
              <p>
                <span class="title">تاریخ صدور : </span>
                <span>
                  {{ trcking.issuedDate }}
                </span>
              </p>
              <p>
                <span class="title">تاریخ انقضاء : </span>
                <span>
                  {{ trcking.expireDate }}
                </span>
              </p>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-form>

    <q-card
      dir="rtl"
      class="row justify-center banner-bg items-center q-pa-md q-mt-lg rounded-borders"
    >
      <div class="col-md-4">
        <div class="column justify-end items-center">
          <h6 class="banner-title">
            بیمه،راهی مطمئن برای کسب و کار
          </h6>
          <p class="text-justify sm-font-size text-dark">
            با ما به راحتی و اطمینان کامل،کسب و کار و آینده خود را بیمه کنید.
          </p>
        </div>
      </div>
      <div class="col-md-2 text-center q-mr-xl">
        <img
          class="predict-img"
          src="images/undraw_predictive_analytics_re_wxt8 (1).svg"
        />
      </div>
      <div class="col-md-5">
        <div class="column justify-end items-center q-mx-lg">
          <h6 class="banner-title-font banner-title">
            بیمه،راهی برای پیشگیری از خسارت
          </h6>
          <p class="text-justify sm-font-size text-dark">
            اگه همین حالا خودتان را بیمه کنید، جلوی بسیاری از مشکلات غیرقابل
            پیش‌بینی را خواهید گرفت. به واسطه خدمات بیمه می‌توانید آرامش و آسایش
            به خود و خانواده‌تان هدیه کنید.
          </p>
        </div>
      </div>
    </q-card>
  </q-card-section>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services";
export default defineComponent({
  name: "TrackingInsurance",
  data() {
    return {
      trackingCode: "",
      nationalCode: "",
      loading: false,
      showTrckingResult: false,
      trcking: {},
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      var response = await services.trackingRequest(
        this.trackingCode,
        this.nationalCode
      );
      this.trcking = response.data.message;
      this.showTrckingResult = true;
      this.loading = false;
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
    print() {
      var url = this.trcking.policyImage;
      window.open(url);
    },
  },
});
</script>

<style lang="scss">
.predict-img {
  width: 100px;
}
.tracking-insurance-container {
  padding-top: 120px;
  .submit-button {
    background-color: var(--q-themeColor);
    color: #fff;
  }
}
.trcking-result {
  .title {
    font-size: 14px;
    color: #999;
  }
  p {
    margin-top: 10px !important;
  }
}
</style>
