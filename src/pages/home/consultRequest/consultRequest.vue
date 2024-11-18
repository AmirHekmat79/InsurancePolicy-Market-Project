<template>
  <div
    class="consult-request-section row justify-center text-center items-center"
  >
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="row justify-center items-center">
        <h5 class="consult-title q-mx-sm">درخواست مشاوره</h5>
        <svg
          width="32px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
        >
          <path
            class="icon-color"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </div>
      <q-img
        class="consult-img q-my-sm"
        src="icons/undraw_coding_re_iv62.svg"
      ></q-img>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 contact-form">
      <div class="flex justify-center items-center text-center">
        <q-form @submit="handleSubmit()" class="text-center">
          <q-input
            :rules="[(val) => (val !== null && val !== '') || 'الزامی می باشد']"
            input-style="text-align:right"
            rounded
            outlined
            v-model="model.firstName"
            bg-color="white"
          >
            <template v-slot:prepend>
              <svg
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  class="icon-color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <label class="text-subtitle2 label-font text-dark q-ml-sm q-mr-xs"
                >نام
              </label>
            </template>
          </q-input>
          <q-input
            :rules="[(val) => (val !== null && val !== '') || 'الزامی می باشد']"
            input-style="text-align:right"
            rounded
            outlined
            v-model="model.lastName"
            bg-color="white"
          >
            <template v-slot:prepend>
              <svg
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  class="icon-color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <label class="text-subtitle2 label-font text-dark q-ml-sm q-mr-xs"
                >نام خانوادگی
              </label>
            </template>
          </q-input>
          <q-input
            type="number"
            @keypress="controlLength($event, 11)"
            :rules="[
              (val) =>
                (val !== null && val !== '' && val.length == 11) ||
                ' الزامی است و شامل 11 رقم باشد',
            ]"
            input-style="text-align:right"
            outlined
            rounded
            v-model="model.mobile"
            bg-color="white"
          >
            <template v-slot:prepend>
              <q-icon class="img-inner" name="phone"></q-icon>
              <label
                class="text-subtitle2 label-font text-dark q-ml-sm q-mr-xs"
              >
                تلفن همراه
              </label>
            </template>
          </q-input>
          <div class="row no-wrap justify-center items-center">
            <q-input
              class="col-6"
              :rules="[
                (val) => (val !== null && val !== '') || 'الزامی می باشد',
              ]"
              input-style="text-align:right"
              outlined
              rounded
              v-model="model.captchaCode"
              bg-color="white"
            >
              <template v-slot:prepend>
                <q-icon class="img-inner" name="lock"></q-icon>
                <label
                  class="text-subtitle2 text-dark label-font q-ml-sm q-mr-xs"
                >
                  کد امنیتی
                </label>
              </template>
            </q-input>
            <span
              class="col-6 row justify-center items-center"
              style="min-width: 130px;"
            >
              <img
                style="width: 100px; height: 30px;"
                id="base64image"
                v-if="captchaImage"
                :src="'data:image/jpeg;base64,' + captchaImage"
                spinner-color="primary"
              />
              <q-icon
                style="margin-right: 10px;"
                name="refresh"
                class="cursor-pointer"
                size="sm"
                @click="loadCpatcha"
              >
              </q-icon>
            </span>
          </div>
          <q-input
            :rules="[(val) => (val !== null && val !== '') || 'الزامی می باشد']"
            type="textarea"
            input-style="text-align:right"
            rounded
            outlined
            v-model="model.message"
            bg-color="white"
          >
            <template v-slot:prepend>
              <svg
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  class="icon-color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
              <label class="text-subtitle2 label-font text-dark q-ml-sm q-mr-xs"
                >متن پیام
              </label>
            </template>
          </q-input>
          <div class="flex justify-end items-center">
            <q-btn
              type="submit"
              class="submit-button q-my-md q-mx-auto"
              :loading="loading"
            >
              <q-img
                class="q-mx-sm"
                src="/images/requestSubmit.png"
                width="20px"
              ></q-img
              >ثبت درخواست</q-btn
            >
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services.js";
export default defineComponent({
  name: "ConsultRequest",
  data() {
    return {
      model: {
        firstName: "",
        lastName: "",
        mobile: "",
        message: "",
        requestType: 1,
        captchaCode: "",
      },
      captchaImage: "",
      captchaId: "",
      loading: false,
    };
  },
  mounted() {
    this.loadCpatcha();
  },
  methods: {
    loadCpatcha() {
      try {
        this.captchaImage = "";
        services.getCaptchCode().then((response) => {
          this.captchaImage = response.data.data.image;
          this.captchaId = response.data.data.id;
        });
      } catch (err) {}
    },
    async handleSubmit() {
      this.loading = true;
      try {
        this.model.captchaId = this.captchaId;
        let response = await services.insertRequestDemo(this.model);
        this.$q.notify({
          color: "green-5",
          textColor: "white",
          icon: "cloud_done",
          message: response.data.message,
        });
        this.loadCpatcha();
        this.loading = false;
      } catch (error) {
        console.log("this is error", error);
        if (error.response.data.message) {
          this.$q.notify({
            color: "red",
            textColor: "white",
            icon: "cloud_done",
            message: error.response.data.message,
          });
        }
        this.loadCpatcha();
        this.loading = false;
      }
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
    },
  },
});
</script>

<style lang="scss">
.consult-request-section {
  margin-top: 20px;
  direction: rtl;
  width: 100%;
  padding: 0px 8%;
  @media (max-width: 768px) {
    padding: 15px;
  }
  .q-form {
    padding-top: 50px;
    padding-right: 65px;
    @media (max-width: 1024px) {
      padding-right: 0px;
    }
  }
  .consult-img {
    width: 450px;
  }
  .consult-title {
    font-size: 23px;
    font-weight: bolder;
  }
  .img-inner {
    width: 24px;
    height: 24px;
    color: var(--q-themeColor);
  }
  .contact-form {
    background-color: rgba($color: #4b59c5, $alpha: 0.9);
    padding: 80px;
    // border-radius: 35px;
  }
  .icon-color {
    fill: var(--q-themeColor);
  }
  .submit-button {
    background-color: var(--q-themeColor);
    color: #fff;
  }
}

@media screen and (min-width: 381px) and (max-width: 1197px) {
  .custom-input {
    width: 100%;
  }
  .contact-form {
    background-color: rgba($color: #4b59c5, $alpha: 0.9);
    padding: 80px;
    border-radius: 35px;
    // margin: 2px;
  }
}
@media screen and (max-width: 1300px) {
  .consult-img {
    width: 100% !important;
    height: auto !important;
  }
}
@media screen and (min-width: 1200px) {
  .contact-form {
    background-color: rgba($color: #e5e6ee, $alpha: 0.86);
    padding: 86px;
    border-top-left-radius: 400px;
    border-bottom-left-radius: 400px;
    transform: skew(4deg);
  }
}
</style>
