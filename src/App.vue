<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  mounted(){
    console.log("version is 1.10");
  },
  methods:{

  }
})
</script>
