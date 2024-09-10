<template>
    <div class="registercomplaint">
      <q-card class="my-card">
        <q-card-section>
          <div class="row">
            <div class="col">
              <h1>
                پیشنهادات ، انتقادات و شکایات
              </h1>
            </div>
          </div>
  
          <q-form @submit="saveMessage" class="q-gutter-md">
            <div class="row">
              <div class="col-lg-6 col-ms-6 col-sm-6 col-xs-12 with-margin">
                <q-input
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'نام و نام خانوادگی الزامی است',
                  ]"
                  color="teal"
                  outlined
                  v-model="model.aliasName"
                  label="نام و نام خانوادگی"
                >
                </q-input>
              </div>
              <div class="col-lg-6 col-ms-6 col-sm-6 col-xs-12 with-margin">
                <q-input
                  :rules="[
                    (val) => (val !== null && val !== '') || 'ایمیل الزامی است',
                  ]"
                  color="teal"
                  outlined
                  v-model="model.email"
                  type="email"
                  label="ایمیل"
                >
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col with-margin" v-if="suggestionsCritic.length">
                <q-select
                  hide-dropdown-icon
                  emit-value
                  map-options
                  :option-value="(opt) => opt.id"
                  :option-label="(opt) => opt.title"
                  :rules="[(val) => val || ' موضوع الزامی است']"
                  color="teal"
                  outlined
                  v-model="model['subjectParamId']"
                  :options="suggestionsCritic"
                  label="موضوع"
                >
                  <template v-slot:prepend>
                    <q-icon name="arrow_drop_down" />
                  </template>
                </q-select>
              </div>
            </div>
  
            <div class="row">
              <div class="col with-margin">
                <q-input
                  :rules="[
                    (val) => (val !== null && val !== '') || 'متن الزامی است',
                  ]"
                  dir="rtl"
                  color="teal"
                  type="textarea"
                  outlined
                  v-model="model.body"
                  label="متن خود را بنویسید"
                >
                </q-input>
              </div>
            </div>
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-padding"
              style="min-width: 100px;"
            >
              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn
                  color="primary"
                  label="ارسال"
                  type="submit"
                  style="margin: 10px;"
                />
              </q-card-actions>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "registerComplaint",
    data(){
        return{
            loading : false ,
            info:'' ,
            suggestionsCritic : [] ,
            isLoading : false,
            model : {
                body : ''   , 
                subjectParamId : '' ,
                email : '' ,
                aliasName : ''
                
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
  .registercomplaint {
    direction: rtl;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 425px) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  </style>
  