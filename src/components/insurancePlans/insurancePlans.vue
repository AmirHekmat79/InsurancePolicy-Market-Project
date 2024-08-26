<template>
  <div class="q-my-xl q-mx-auto">
    <!-- <q-separator class="q-my-lg" light style="width: 100%;"/> -->
    <section>
      <div class="row justify-around items-center">
        <div
          v-for="(item, index) in insurancePlans"
          :key="index"
          class="text-center cards"
        >
          <div class="column justify-between items-center q-my-lg">
            <q-img :src="item.iconImage" width="60px" />
            <p class="insurance-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services.js";

export default defineComponent({
  name: "InsurancePlans",
  data() {
    return {
      insurancePlans: null,
    };
  },
  mounted() {
    this.getInsurancePlan();
  },
  methods: {
    getInsurancePlan() {
      console.log("asdadadadada");
      services
        .getInsurancePlan("sabz")
        .then((response) => {
          this.insurancePlans = response.data.message;
          console.log(this.insurancePlans);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
  },
});
</script>
<style scoped>
.separator {
  width: 400px;
  height: 1px;
  background-color: #e4e4e4;
  margin: 40px auto;
}
.insurance-title {
  font-size: 12px;
  margin: 5px 0px 0px 0px;
  color: #000;
  padding: 0px 5px;
}
.cards {
  width: 145px;
  height: 150px;
  margin: 10px;
  /* background-color: #fff;*/
  border-radius: 35px;
  border: 1px solid #ddd; 
  cursor: pointer;
}
.cards:hover {
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out linear;
}
</style>
