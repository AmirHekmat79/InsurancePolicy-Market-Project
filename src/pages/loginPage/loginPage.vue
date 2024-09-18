<template>
  <div class="form-background">
    <div class="q-my-md card-alignment bg-white">
      <div class="row justify-around wrap items-center">
        <div class="img-container col-12 col-md-6 q-pa-lg">
          <!-- <q-img src="../assets/20824344_6343825.jpg"></q-img> -->
        </div>
        <div class="form-container col-12 col-md-4 login-form-bg ">
          <div class="column justify-between items-center">
            <h3 class="text-weight-bolder q-my-md">ورود</h3>
            <!-- <h6 dir="rtl" class="text-weight-bold q-my-md">لطفا برای ادامه واردشوید ...</h6> -->
            <q-form class="row justify-center items-center q-mx-auto text-center q-my-md">
              <div class="col-12">
                <q-input color="teal" outlined v-model="text">
                  <template v-slot:prepend>
                    <q-avatar>
                      <q-icon class="icon-size" name="email"></q-icon>
                    </q-avatar>
                  </template>
                  <template v-slot:append>
                    <label class="text-subtitle1">ایمیل</label>
                  </template>
                </q-input>
              </div>
              <div class="col-12 q-my-xl">
                <q-input color="teal" outlined v-model="text">
                  <template v-slot:prepend>
                    <q-avatar>
                      <q-icon class="icon-size" name="password"></q-icon>
                    </q-avatar>
                  </template>
                  <template v-slot:append>
                    <label class="text-subtitle1">رمزعبور</label>
                  </template>
                </q-input>
              </div>
              <div class="row justify-center items-center col-12">
                <div>
                  <q-checkbox right-label v-model="left" label="مرا به خاطر بسپار" />
                </div>
                <div class="q-mx-md text-red-10">فراموشی رمزعبور؟</div>
              </div>
              <div class="col-12">
                <q-btn class="login-btn text-white q-mx-auto">ورود</q-btn>
                <q-btn class="register-btn text-black q-mx-auto" @click="this.$router.push('/RegisterPage')" >ثبت نام</q-btn>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      left: true,
    };
  },
});
</script>

<style scoped>
.form-background {
  background: var(--q-Blue);
  height: 100vh;
  padding: 40px;
  
}
.icon-size {
  font-size: 24px;
  color: var(--q-Blue);
}

.login-form-bg {
  background: #fff;

}
.login-btn {
  background: var(--q-Blue);
  width: 100%;
  padding: 8px 20px;
  margin: 30px auto;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.register-btn{
  width: 100%;
  padding: 8px 20px;
  margin: 3px auto !important;
  border: 2px solid #007bff;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}
.card-alignment {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 1300px;
  margin: auto;
  border-radius: 6px;
}
.img-container {
  width: 60%;
}
.form-container {
  width: 40%;
}
@media (max-width: 1340px) {
  .img-container {
    width: 60% !important;
  }
  .form-container {
    width: 100% !important;
  }
  .form-background {
  background: none;
  height: 100%;
  padding: 40px;
}
.card-alignment{
  width: 100%;
 
}

}

@media screen and(min-width : 1301px){
  
.login-form-bg{
  padding: 0px !important;
}

}
</style>