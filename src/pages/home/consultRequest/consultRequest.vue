<template>
  <div
    class="row q-my-xl justify-center text-center reverse-wrap items-center q-py-lg q-gutter-md"
  >
    <div class="col-md-6 col-sm-6 col-xs-8">
      <form>
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
        <q-input class="q-my-md Input" outlined rounded v-model="text">
          <template v-slot:append>
            <q-icon class="img-inner" name="phone" ></q-icon>
          </template>
          <template v-slot:prepend>
            <label class="text-subtitle2 label-font q-ml-sm">
              شماره همراه
            </label>
          </template>
        </q-input>
        <q-input class="Input" rounded outlined v-model="text">
          <template v-slot:append>
            <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
          </template>
          <template v-slot:prepend>
            <label class="text-subtitle2 label-font q-ml-sm"> نوع بیمه </label>
          </template>
        </q-input>
        <q-btn class="submit-request q-my-md">
          <q-img
            class="q-mx-sm"
            src="src/assets/requestSubmit.png"
            width="20px"
          ></q-img
          >ثبت درخواست</q-btn
        >
      </form>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-8">
      <div class="row justify-center items-center q-pt-xl" >
        
        
        <h5 class="consult-title q-mx-sm">درخواست مشاوره</h5>
        <svg  width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
        <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
      </div>
      <q-img
        class="consult-img q-my-sm"
        src="src/assets/consultRequest.png"
      ></q-img>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConsultRequest",
});
</script>

<style scoped>
.consult-img {
  width: 490px !important;
  height: 372px !important;
}
.submit-request {
  background: var(--q-Blue);
  color: #fff;
}
.consult-title {
  font-size: 20px;
  font-weight: bolder;
}
@media screen and (min-width: 381px) and (max-width: 768px) {
  .Input {
    width: 100%;
  }
 
}
.img-inner {
  width: 24px;
  height: 24px;
  color:var(--q-Blue);
}
.icon-color{
  fill : var(--q-Blue);
 
}
.Input {
  text-align: right;
  direction: rtl;
}

 @media screen and (max-width : 1300px) {
  .consult-img {
  width: 100% !important;
  height: auto !important;
}
 }
</style>
