<template>
    <div>
      
      <q-dialog
        v-model="value"
          @input="$emit('input',value)"
      >
        <q-card style="width: 700px; max-width: 80vw;direction:rtl"  >
          <q-card-section>
            <div class="text-h6">قوانین و مقررات</div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
              <div v-if="!loading && info" v-html="$sanitize(info.roles)" style="font-family: iransans;padding: 29px;">
              </div>
              <q-inner-loading :showing="loading">
                  <q-spinner-gears size="50px" color="primary" />
              </q-inner-loading>
          </q-card-section>
  
        </q-card>
      </q-dialog>
  
    </div>
  </template>
  
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "rulesAndObligations",
    data(){
        return{
            loading : false ,
            info:''
        }
    }
  });
  </script>