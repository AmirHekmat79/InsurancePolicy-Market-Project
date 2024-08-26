<template>
  <div class="row justify-center reverse-wrap items-center q-pa-xl q-my-xl">
    <div class="col-md-8">
      <div class="row justify-center items-center q-gutter-md">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-select class="Input" rounded standout v-model="text" :options="options3">
            <template v-slot:append>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path class="icon-color"  stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">ماه</label>
            </template>
          </q-select>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <q-icon class="img-inner" name="email" ></q-icon>
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm"> ایمیل</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <q-icon class="img-inner" name="phone" ></q-icon>
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">
                شماره همراه</label
              >
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>



            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">نوع بیمه</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
       
            <q-select class="Input" rounded standout v-model="text" :options="options2">
            <template v-slot:append>
              <q-icon class="img-inner" name="place" ></q-icon>
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">استان </label>
            </template>
          </q-select>
          
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm"
                >نام خانوادگی
              </label>
            </template>
          </q-input>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path class="icon-color"  stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>

            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm"> روز</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">نام </label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-select class="Input" rounded standout v-model="text" :options="options1">
            <template v-slot:append>
              <q-icon class="img-inner" name="place"></q-icon>
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">شهر </label>
            </template>
          </q-select>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-btn class="submit-btn"
            ><q-img
              class="submit-img q-mr-sm"
              src="src/assets/leftArrow.png"
            ></q-img
            >یاد آوری کن
          </q-btn>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row justify-center items-center">
        <h2 class="form-title q-mx-sm">یادآور تمدید بیمه نامه</h2>
        <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
        <path  stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>

      </div>
      <q-img class="form-img" src="src/assets/calender.png"></q-img>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InsuranceForm",

  data(){
    return{
      options1: [
            'تهران', 'اصفهان', 'شیراز', 'رشت' , 'لاهیجان' , 'تبریز' , 'اردبیل'
        ],
      options2: [
            'تهران', 'اصفهان', 'شیراز', 'گیلان' , 'مازندران'
        ],
      options3: [
            'مهر', 'آبان', 'آذر', 'دی' , 'بهمن','اسفند','فروردین'
        ],
      
    }
  }
});
</script>

<style scoped>
.icon-color{
  fill: var(--q-Blue);
}
.form-img {
  width: 300px;
}
.submit-img {
  width: 16px;
}
.form-title {
  font-size: 26px;
  color: #003975;
  text-align: center !important;
}
.submit-btn {
  cursor: pointer;
  background: var(--q-Blue);
  color: #fff;
  padding: 8px 24px;
}
.img-inner {
  width: 24px;
  height: 24px;
  color:var(--q-Blue);
}
.Input {
  text-align: right;
  direction: rtl;
}
</style>
