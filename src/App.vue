<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  mounted(){
    console.log("version is 1.12");
  },
  methods:{

  }
})
</script>
