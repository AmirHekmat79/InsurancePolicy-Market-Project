<template>
   <div></div>
</template>

<script>
import { defineComponent } from 'vue'
import services from "src/services/services";
export default defineComponent({
    name: 'RepresentativeCodeManager',
    data() {
        return {

        }
    },
    mounted() {
        this.init();
    },
    methods: {
       init(){
        services.affiliationManager(
            this.$route.query.redirectId
        )
        .then((response)=> {
          console.log("this is response",response);
          let url=response.data.message.redirect;
          window.location.href=url;
        })
       }
    }
})
</script>

<style lang="scss" scoped>

</style>
