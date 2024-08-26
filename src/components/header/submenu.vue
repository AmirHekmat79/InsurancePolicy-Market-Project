<template>
  <div
    class="q-gutter-sm text-center row justify-center q-mx-auto items-center only-desktop"
  >
    <q-btn
      v-if="!isSubMenu"
      flat
      class="text-dark"
      :label="menu.title"
      @click="handleUrl(menu.url)" 
    ></q-btn>
    <div v-else  @mouseleave="()=>{openSubMenu1 = false ; openSubMenu2 = false;}">
      <q-btn
        v-if="isFirst"
        ref="menu-hover"
        flat
        class="text-dark transition-delay"
        :label="menu.title"
        @mouseover="openSubMenu1 = true"
      >
        <q-item-section side>
          <q-icon color="black" name="keyboard_arrow_down" />
        </q-item-section>
        <q-menu
          dir="rtl"
          anchor="bottom left"
          self="top left"
          v-model="openSubMenu1"
        >
          <q-list>
            <q-item
              v-for="subMenu in menus"
              flat
              clickable
              :key="subMenu.id"
              class="linkItems text-dark"
              @click="handleUrl(subMenu.url)"
            >
              <submenu
                @mouseover="openSubMenu1 = true"
                :isSubMenu="computeIsSubMenu(subMenu.id)"
                :menus="computeMenus(subMenu.id)"
                :menu="computeMenu(subMenu.id)"
                :allMenu="allMenu"
              />
              <q-separator light />
            </q-item>
            <q-separator dark />
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        v-else
        flat
        class="text-dark"
        :label="menu.title"
        @mouseover="openSubMenu2 = true"

      >
        <q-item-section side>
          <q-icon color="black" name="keyboard_arrow_left" />
        </q-item-section>
        <q-menu v-model="openSubMenu2" dir="rtl" anchor="top start" self="top end">
          <q-list>
            <q-item
              flat
              v-for="subMenu in menus"
              dense
              clickable
              :key="subMenu.id"
              class="linkItems text-dark"
              @click="handleUrl(subMenu.url)"
            >
              <submenu
                @mouseover="openSubMenu2 = true"
                :isSubMenu="computeIsSubMenu(subMenu.id)"
                :menus="computeMenus(subMenu.id)"
                :menu="computeMenu(subMenu.id)"
                :allMenu="allMenu"
              />
              <q-separator light />
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolbarNavigation",
  data() {
    return {
      openSubMenu1: false,
      openSubMenu2: false,
    };
  },
  props: {
    isSubMenu: Boolean,
    menus: [Object],
    menu: Object,
    allMenu: [Object],
    isFirst: Boolean,
  },
  
  methods: {
    computeMenus(id) {
      let newMenus = this.allMenu.filter((item) => item.parentId == id);
      return newMenus;
    },
    computeMenu(id) {
      let newMenu = this.allMenu.filter((item) => item.id == id)[0];
      return newMenu;
    },
    computeIsSubMenu(id) {
      let newIsSubMenu = this.allMenu.some((item) => item.parentId == id);
      return newIsSubMenu;
    },
    handleUrl(URL){
          const urlObject = JSON.parse(URL);
          const { type, url: urlPath } = urlObject;
          
          const baseUrl = 'https://sabz.easybimeh.com';

          if (type === 'open') {
            if(urlPath == '/about' ){
              this.$router.push(`/AboutUs`);
            }else if (urlPath == '/contactUs') {
              this.$router.push(`/contactUs`);
            }
            else if(urlPath == '/blog'){
              this.$router.push(`/InsuranceMagazine`);
            }
            else if(urlPath == '/trackingInsurance'){
              this.$router.push(`/TrackingInsurance`);
            }
            else if(urlPath == '/submitDamage'){
              this.$router.push(`/SubmitDamage`);
            }
            else if(urlPath == '/trackingDamage'){
              this.$router.push(`/TrackingDamage`);
            }
              else{
              window.location.href =  `${baseUrl}${urlPath}`;
            }
            
          } else if (type === 'redirect') {
            window.location.href =  `/`;
          } else {
            console.error("Unsupported URL type:", type);
            return '#';
          }
          },
  },
});
</script>
<style scoped>
.transition-delay {
  transition-delay: 100ms;
}
</style>