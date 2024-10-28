<template>
  <div class="column error-container text-center">
    <h4>404 - صفحه مورد نظر یافت نشد</h4>
    <q-img
      class="not-found-page"
      src="public/images/undraw_page_not_found_re_e9o6.svg"
    ></q-img>
    <q-btn class="homepage-btn" label="رفتن به صفحه اصلی" @click="goHome" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",

  components: {},

  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.not-found-page {
  width: 400px;
  margin: auto !important;
}
.error-container {
  background: #eee;

  justify-content: center;
  align-items: center;
  height: 100vh;
}
.homepage-btn {
  background: var(--q-themeColor);
  margin: 20px;
  color: #fff;
}
</style>
