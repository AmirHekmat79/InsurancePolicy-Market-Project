<template>
  <q-page style="min-height: 400px;">
    <section id="insuranceCompanies" class="q-py-lg">
      <div class="container q-mx-auto q-mb-md">
        <div class="row justify-center text-center items-center q-py-md">
          <q-img src="../../assets/protect-icon.svg" width="32px"></q-img>
          <h5 class="text-weight-bold company-title q-mx-sm">شرکت بیمه</h5>
        </div>
      </div>
      <div class="container q-mx-auto">
        <div class="row justify-center items-center text-center q-gutter-md">
          <div class="glass"></div>
          <div
            class="col-md-1 change-opacity"
            v-for="item in InsuranceCompanies.filter(
              (item) => item.id != 32
            ).slice(7, 10)"
            :key="item.id"
          >
            <q-card class="card shadow-10">
              <q-card-section>
                <q-img :src="item.metaMediaLogoFileUrl" width="70px"> </q-img>
              </q-card-section>
            </q-card>
          </div>
          <div
            style="z-index: 1;"
            class="col-md-2"
            v-for="item in InsuranceCompanies.filter((item) => item.id == 32)"
            :key="item.id"
          >
            <q-card class="main-card shadow-10">
              <q-card-section>
                <q-img :src="item.metaMediaLogoFileUrl" width="125px"> </q-img>
              </q-card-section>
            </q-card>
          </div>

          <div
            class="col-md-1 change-opacity"
            v-for="item in InsuranceCompanies.filter(
              (item) => item.id != 32
            ).slice(3, 6)"
            :key="item.id"
          >
            <q-card class="card shadow-10">
              <q-card-section>
                <q-img :src="item.metaMediaLogoFileUrl" width="70px"> </q-img>
              </q-card-section>
            </q-card>
          </div>

          <div class="glass"></div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services";
export default defineComponent({
  name: "InsuranceCompanies",
  data() {
    return {
      InsuranceCompanies: [],
    };
  },

  mounted() {
    this.getPolicyIntroduction();
  },

  methods: {
    getPolicyIntroduction() {
      services
        .getPortalLandingPage()
        .then((response) => {
          this.InsuranceCompanies =
            response.data.message?.insuranceCentre?.insuranceCompanies || [];
          console.log(this.InsuranceCompanies);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
  },
});
</script>

<style scoped>
.company-section-title {
  font-size: 24px;
}
.company-title {
  color: #003975;
}
.glass {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border: 1px solid #ffffff;
  height: 200px;
  width: 80%;
  position: absolute;
}
.card {
  width: 100px;
  height: 100px;
  background: #fff;
  display: inline-block;
}
.main-card {
  width: 160px;
  height: 160px;
  background: #fff;
  display: inline-block;
}
.change-opacity {
  opacity: 0.8;
}
@media screen and (max-width: 1060px) {
  .change-opacity {
    display: none;
  }
  .glass {
    display: none;
  }
}
</style>
