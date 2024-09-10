<template>
    <div class="our-service-container" >
      <h1   >خدمات ما
      </h1>
      <span  v-html="$sanitize(baseData.insuranceCentrePortal.ourService)
      ">
      </span>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "registerComplaint",
    data(){
        return{
         
        }
    }
  });

  </script>
  <style lang="css">
    .our-service-container{
      direction: rtl;
      padding-right: 10%;
      padding-left: 10%;
      padding-top:40px;
    }
  </style>
  
  