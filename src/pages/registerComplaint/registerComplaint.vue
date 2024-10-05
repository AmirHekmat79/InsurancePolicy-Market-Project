<template>
  <div class="register-complaint">
    <q-card class="my-card">
      <q-card-section>
        <div class="row">
          <div class="col">
            <h5>
              پیشنهادات ، انتقادات و شکایات
            </h5>
          </div>
        </div>

        <q-form @submit="saveMessage" class="q-gutter-md">
          <div class="row">
            <div class="col-lg-6 col-ms-6 col-sm-6 col-xs-12 with-margin">
              <q-input
                class="label-right"
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
                class="label-right"
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
                class="label-right"
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
                 class="label-right"
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
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex justify-end"
            style="min-width: 100px;"
          >
            <q-btn
                class="submit-button"
                label="ارسال"
                type="submit"
              />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
  <script>
  import optionServices from "src/services/optionServices";
import services from "src/services/services";
import { defineComponent } from "vue";

  export default defineComponent({
    name: "registerComplaint",
    data(){
        return{
           model:{
             aliasName:"",
             body: "",
             email:"",
             subjectParamId:"",
           },
           suggestionsCritic:[],
           isLoading: false,
        }
    },
    mounted(){
      this.init()
    },
    methods:{
      async init(){
         this.suggestionsCritic = (await optionServices.suggestionsCritic()).data.message.subjects;
      },
      async saveMessage() {
        this.isLoading = true;
        if (!this.model.aliasName || !this.model.email || !this.model.body) {
          this.$q.notify({
            color: "orange",
            textColor: "white",
            icon: "warning",
            message: "لطفاً تمام فیلدها را پر کنید.",
          });
          this.isLoading = false;
          return;
        }
        this.model.subjectParamId = null;
        var response= await services.suggestionsCritic(this.model);
         if (!response.data.isSuccess) {
           this.$q.notify({
             color: "red",
             textColor: "white",
             icon: "cloud_done",
             message: "کد اشتباه است.",
           });
         } else {
           this.$q.notify({
             type: "positive",
             message: "عملیات با موفقیت انجام شد.",
           });
         }
         this.isLoading = false;
       }
    }
  });

  </script>
  <style lang="scss">
  .register-complaint {
    direction: rtl;
    padding-top: 140px;
    margin-bottom: 40px;
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 425px) {
      margin-left: 5px;
      margin-right: 5px;
    }
    .submit-button{
      background-color: var(--q-themeColor);
      color:#fff;
    }
  }
  </style>
