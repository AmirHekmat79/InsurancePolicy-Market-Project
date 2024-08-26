<template>
  <div class="flex flex-center q-my-md">
    <section>
      <div class="row justify-around items-center">
        <q-card
          v-for="(item, index) in SuggestionFormPlans && SuggestionFormPlans"
          :key="index"
          class="text-center cards q-mx-md"
        >
          <q-card-section class="column justify-between items-center flex-wrap">
            <q-img :src="item.iconImage" width="40px" />
            <p class="insurance-title">{{ item.title }}</p>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services.js";

export default defineComponent({
  name: "InsuranceSuggestedPlans",
  data() {
    return {
      SuggestionFormPlans: null,
    };
  },
  mounted() {
    this.getSuggestionFormPlans();
  },
  methods: {
    getSuggestionFormPlans() {
      services
        .getSuggestionFormPlans("sabz")
        .then((response) => {
          this.SuggestionFormPlans = response.data.message;
          console.log(this.SuggestionFormPlans);
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
  line-height: 20px;
}
.cards {
  width: 145px;
  height: 150px;
  margin: 10px;
  background-color: #fff;
  border-radius: 35px;
  border: 2px solid #ffdaa9;
  cursor: pointer;
}
.cards:hover {
  background: #eee;
}
</style>
