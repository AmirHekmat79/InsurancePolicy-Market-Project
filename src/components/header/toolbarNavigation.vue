
<template>
  <q-toolbar class="text-primary text-center column justify-start items-center q-py-md q-mx-md">
    <div v-if="this.$q.screen.width < 992" class="row justify-between items-center" style="width: 98%;">
      <q-btn @click="toggleSidebar" flat class="text-black  hambergur-menu" icon="menu"></q-btn>
      <!-- <div class="login-btn-group justify-between items-center ">
        <q-btn class="register-btn"><a>ثبت نام</a></q-btn>
        <q-btn class="entrance-btn"><a>ورود</a></q-btn>
      </div> -->
      <q-toolbar-title  class="text-white title-container  q-ml-auto">
        <div class="logo-sm-container q-ml-auto">
          <q-img src="../../assets/logo.png" width="115px"></q-img>
        </div>
      </q-toolbar-title>
      <MainMenu /> 
    </div>
    
    <div v-else class="row justify-start text-center q-mx-auto items-center q-ml-auto">
    
       <div class="login-btn-group">
        <q-btn class="register-btn"  @click="this.$router.push('/RegisterPage')"><a>ثبت نام</a></q-btn>
        <q-btn class="entrance-btn"  @click="this.$router.push('/LoginPage')"><a>ورود</a></q-btn>
       </div>
        <q-list v-if="!sidebarVisible" style="direction: rtl;" class="navLink-container row justify-start items-center">
          <div class="logo-container q-ml-auto">
            <img src="../../assets/logo.png" width="54%"/>
          </div>
          <MainMenu />
        </q-list>
    </div>
  </q-toolbar>
</template>


<script>
import { defineComponent, ref } from "vue";
import services from "src/services/services";
import MainMenu from "src/components/menu/menu.vue"
export default defineComponent({
  name: "ToolbarNavigation",
  components:{
     MainMenu
  },
  data() {
      return {
        InsuranceHeaderInfo: null,
        InsuranceNavbarMenuItems: [],
      };
    },
  
    mounted() {
      this.getPolicyIntroduction();
    },
  
    methods: {
      getPolicyIntroduction() {
        services
          .getPolicyIntroduction('sabz')
          .then((response) => {
            this.InsuranceHeaderInfo = response.data.message?.insuranceCentrePortal;
            
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
    },
    computed: {
      sortedMenuItems() {
      return this.InsuranceNavbarMenuItems.filter(item => item.parentId == null).sort((a, b) => b.order - a.order)
    },
    
},
  setup() {
    const sidebarVisible = ref(false);
    function toggleSidebar() {
      sidebarVisible.value = !sidebarVisible.value;
    }

    return {
      sidebarVisible,
      toggleSidebar,
    };
  },
});
</script>
<style scoped>
.title-container {
  margin-left : 340px !important;
  text-align: right !important;
}
.title {
  font-size: 17px;
  white-space:nowrap; 
  width:100%;
  margin-left: auto;
  font-weight: 500;
  
}
*{
  padding: 0 !important;
}
.entrance-btn {
  /* padding: 8px 50px !important; */
  background: #eee;
  color: #2980b9;
  border: 2px solid #2980b9;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  margin-left: 20px !important;
  font-size: 14px;
  font-weight: 500;
  width: 160px;
  height: 40px;
}
.register-btn {
  margin-right: 10px;
  width: 160px;
  height: 40px;
  margin-right: 10px;
  background: var(--q-Blue);
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.navLink-container {
  list-style-type: none;
}
 
.navLink-item a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
.navLink-btn {
  font-size: 14px;
}
 
a{
 text-decoration: none;
}
.sidebar-navLink-container {
  display: none !important;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-between;
}

.sidebar-login-btn-container {
  text-align: center;
}
.sidebar-navLink-item {
  margin: 5px 10px;
}
.sidebar-login-btn-container .entrance-btn {
  max-width: 100%; /* Make the buttons fill the full width */
  padding: 8px 30px !important;
  background: #eee;
  color: #2980b9;
  border: 2px solid #2980b9;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
}
.sidebar-login-btn-container .register-btn {
  /* Make the buttons fill the full width */
  padding: 8px 50px !important;
  background: var(--q-Blue);
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-weight: 500;
}

.sidebar-navLink-item a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

.sidebar-navLink-btn {
  font-size: 14px;
}
.sideBar{
  width: 200px;
  height: 100vh !important;
}
@media only screen and (max-width:1168px) {
   
  .navLink-container {
    display: none;
  }
  .title-container {
    margin-left: 300px !important;
  text-align: right !important;
}
  .login-btn-group {
    display: none;
  }

  .title {
    font-size: 17px;
  }

  .hambergur-menu {
    display: block;
    margin-left: 10px;
  }

  .sidebar-navLink-container {
    display: block;
  }
  .register-btn , .entrance-btn {
    min-width:230px;
    width: 60%;
    text-align: center;
    margin: 6px auto !important;
  }
}
@media only screen and (max-width: 727px) {

  .hambergur-menu {
     
    /* margin-left: 65px; */
  }
  .title-container{
    margin-left: 200px !important;
  }

}
</style>
