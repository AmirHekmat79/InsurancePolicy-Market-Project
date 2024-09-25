<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import services from "src/services/services";
export default defineComponent({
  name: 'App',
  mounted(){
    console.log("version is 1.2");
    
  },
  methods:{
    
  }
})
</script>
