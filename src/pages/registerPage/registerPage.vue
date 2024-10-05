<template>
    <div class="form-background">
      <div class="q-my-sm card-alignment bg-white">
        <div class="row justify-around wrap items-center">
          <div class="img-container col-12 col-md-6  q-pa-sm">
            <!-- <q-img src="../assets/7070629_3293465.jpg"></q-img> -->
          </div>
          <div class="form-container col-12 col-md-4  login-form-bg">
            <div class="column justify-between items-center">
              <h4 class="text-weight-bolder">ثبت نام کنید</h4>
              <!-- <h6 dir="rtl" class="text-weight-bold q-my-sm"> اطلاعات خود را وارد کنید ...</h6> -->
              <q-form class="row justify-center items-center q-mx-auto text-center q-my-sm">
                  <div class="col-12">
                    <q-input color="teal" outlined v-model="text">
                      <template v-slot:prepend>
                        <q-avatar>
                          <q-icon class="icon-size" name="person"></q-icon>
                        </q-avatar>
                      </template>
                      <template v-slot:append>
                        <label class="text-subtitle1">نام کاربری</label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-12 q-my-md">
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
                <div class="col-12 q-my-md">
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
                <div class="col-12 q-my-md">
                  <q-input color="teal" outlined v-model="text">
                    <template v-slot:prepend>
                      <q-avatar>
                        <q-icon class="icon-size" name="password"></q-icon>
                      </q-avatar>
                    </template>
                    <template v-slot:append>
                      <label class="text-subtitle1">تایید رمزعبور</label>
                    </template>
                  </q-input>
                </div>
            
                <div class="col-12">
                  <q-btn class="register-btn text-black q-mx-auto">ثبت نام</q-btn>
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
    name: "RegisterPage",
    data() {
      return {
        left: true,
      };
    },
  });
  </script>
  
  <style scoped>
  .form-background {
    background: var(--q-themeColor);
    height: 100vh;
    padding: 45px;
    
  }
  .icon-size {
    font-size: 24px;
    color:var(--q-themeColor);
  }
  .bgGray {
    background-color: gray;
  }
  .login-form-bg {
    background: #fff;
   
  }
  .register-btn {
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
    width: 1330px;
    margin: auto;
    border-radius: 6px;
  }
  .img-container {
    width: 55%;
  }
  .form-container {
    width: 40%;
  }
  @media (max-width: 1400px) {
  .img-container {
    width: 55% !important;
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