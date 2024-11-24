<template>
  <div
    id="featureSection"
    class="row justify-around items-center feature-banner q-pa-md q-gutter-sm q-mt-lg"
  >
    <div class="row justify-center items-center q-my-sm">
      <q-img class="consult-img q-my-sm" src="images/stepping-up.svg"></q-img>

      <div class="column justify-around items-center">
        <q-badge class="just-click-title-container q-pa-md rounded-borders">
          <p class="just-click-title">
            فقط با چند کلیک <strong class="side-title">خودت رو بیمه کن!</strong>
          </p>
        </q-badge>
        <div class="row reverse justify-center items-center q-my-lg">
          <div
            class="row feature-text-container justify-center q-mx-md text-center cursor-pointer"
            v-for="(item, index) in insuranceFeatures"
            :key="item.id"
          >
            <div class="row justify-center items-center">
              <span class="feature-title text-h6">{{ item.title }}</span>
            </div>
            <div class="feature-img-container">
              <!-- <q-img :src="item.src" style="width: 40px;"></q-img> -->
              <q-badge
                rounded
                class="number-value q-pa-sm"
                :label="(index + 1).toLocaleString('fa-IR')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="commercial-container shadow-2">
    <div class="row justify-center items-center q-gutter-xl">
      <q-img
        width="22%"
        src="images/undraw_product_iteration_kjok (1).svg"
        class="commercial-image q-mr-xl"
      ></q-img>

      <h5 class="commercial-text text-center">
        با بیمه از محافظت مادام العمر خانواده و خودتان اطمینان حاصل کنید
      </h5>

      <!-- <h5 class="commercial-text">بیمه، سپر امانت زندگی شما</h5> -->
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InsuranceFeatures",
  components: {},
  data() {
    return {
      insuranceFeatures: [
        { id: 1, title: "انتخاب بیمه" },
        { id: 2, title: "مشخصات  بیمه" },
        { id: 3, title: "استعلام قیمت بیمه" },
        { id: 4, title: "تایید  درخواست" },
        { id: 5, title: "دریافت بیمه نامه " },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.commercial-text {
  color: var(--q-themeColor);
  // transition: all 0.4ms ease linear;
  // animation: move-left-animation 3s ease 0.7s infinite;
}
.commercial-image {
  transition: all 0.4ms ease linear;
  animation: move-right-animation 3s ease 0.7s infinite;
}
@keyframes move-right-animation {
  0% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes move-left-animation {
  0% {
    transform: translateX(-30px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0px);
  }
}
.commercial-container {
  width: 94%;
  border-radius: 35px;
  margin: 12px;
  padding: 20px;
}
.card {
  width: 145px;
  height: 150px;
  margin: 5px;
  border-radius: 35px;
  background: #fff;
  border: 1px solid #eee;
  transition: all 0.4ms ease linear;
}
.card:hover {
  cursor: pointer;
  transform: translateY(-10px);
}
.feature-banner {
  width: 96%;
  background: #eeeeee;
  padding: 30px;
  /* background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(204, 228, 255, 1) 16%, rgba(204, 228, 255, 1) 100%); */
  border-radius: 100px;
  background-size: contain;
  background-position: center;
}
.fast-banner {
  width: 600px;
}
.feature-text-container {
  border-radius: 35px;
}
.number-value {
  font-size: 17px !important;
  background-color: var(--q-themeColor);
}

.just-click-title-container {
  color: #00f59b;
  text-align: right;
  direction: rtl;
  transition: all 0.7s ease;
  border-radius: 35px;
  animation: feature-animation 2s ease 0.7s infinite;
}

@keyframes feature-animation {
  0% {
    transform: translateX(-40px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0px);
  }
}
.consult-img {
  width: 300px;
}
.side-title {
  color: #cec3f1;
}
.just-click-title {
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 20px;
  }
}

@keyframes pulse-white {
  0% {
    box-shadow: 0 0 0 0 #2980b9;
  }
  100% {
    box-shadow: 0 0 0 20px transparent;
  }
}

.feature-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.feature-title {
  font-weight: bolder;
  font-size: 16px;
}

@media (max-width: 768px) {
  .feature-item {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 600px) {
  .commercial-image {
    width: 100% !important;
    animation: none;
  }
  .commercial-text {
    font-size: 17px;
  }
}
</style>
