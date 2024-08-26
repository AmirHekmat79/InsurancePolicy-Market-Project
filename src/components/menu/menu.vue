<template>
    <div v-if="this.$q.screen.width > 992" class="menu flex " >
        <a v-for="(item, index) in this.menuItems"  :key="index" class="menu-item"  >
              <span>{{item.title}}</span>
               <q-icon v-if="item.childrens.length" class="more-icon" name="expand_more" ></q-icon>
              <div class="sub-menu-1">
                <a class="sub-menu-item-1 flex justify-between items-center no-wrap"  v-for="(subMenuItem1,subMenuItem1Index) in item.childrens" :key="subMenuItem1Index">
                  <span>{{subMenuItem1.title}}</span>
                  <q-icon v-if="subMenuItem1.childrens.length" class="more-icon" name="chevron_left" ></q-icon>
                  <div class="sub-menu-2">
                    <a class="sub-menu-item-2 flex justify-between items-center no-wrap"   v-for="(subMenuItem2,subMenuItem2Index) in subMenuItem1.childrens" :key="subMenuItem2Index">
                      <span>{{subMenuItem2.title}}</span>
                       <q-icon v-if="subMenuItem2.childrens.length" class="more-icon" name="chevron_left" ></q-icon>
                      <div class="sub-menu-3">
                         <a  class="sub-menu-item-3 flex justify-between items-center no-wrap" v-for="(subMenuItem3,subMenuItem3Index) in subMenuItem2.childrens" :key="subMenuItem3Index">
                          <span>{{subMenuItem3.title}}</span>
                          <q-icon v-if="subMenuItem3.childrens.length" class="more-icon" name="chevron_left" ></q-icon> 
                          <div class="sub-menu-4">
                             <a class="sub-menu-item-4 flex justify-between items-center no-wrap" v-for="(subMenuItem4,subMenuItem4Index) in subMenuItem3.childrens" :key="subMenuItem4Index">
                              <span>{{subMenuItem4.title}}</span>
                              <q-icon v-if="subMenuItem4.childrens.length" class="more-icon" name="chevron_left" ></q-icon>
                              </a>
                          </div>
                         </a>
                      </div>
                    </a>
                  </div>
                </a>
              </div>
        </a> 

  </div>
   <div class="mobile-menu" v-else>
     
   </div>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services/services";
export default defineComponent({
  name: "MainMenu",
  data() {
    return {
       mainItems: [],
       menuItems: [],
    };
  },
  props: {
     
  },
  mounted(){
    this.getMenueItems();
  },
  methods: {
     getMenueItems() {
        services
          .getMenuesItem()
          .then((response) => {
            this.mainItems = response.data.message;
            this.setMenuItems(this.mainItems);
          })
          .catch((error) => {
            console.error('this is error', error);
          });

      },
      setMenuItems(data){
         for(let item of data){
           if(item.parentId==null){
             this.menuItems.push(item);
           }
         }
         this.setSubMenuItems(this.menuItems);
      },
      setSubMenuItems(data){
       for(let item of data){
           let childrens=[];
           for(let mainItem of this.mainItems){
              if(mainItem.parentId==item.id){
                childrens.push(mainItem);
              }
           }
           item.childrens=childrens;
        }
        for(let item of data){
            if(item.childrens.length){
              this.setSubMenuItems(item.childrens);
            }
         }
      },
  },
});
</script>
<style lang="scss">
.menu{
  direction: rtl;
  color:#000;
  margin-left: 20px;
  .menu-item{
    padding:5px 10px;
    position: relative;
    cursor: pointer;
    &:hover{
      background-color: #dfdfdf;
      .sub-menu-1{
        display: flex;
      }
    }
   .sub-menu-1{
     display: none;
     flex-direction: column;
     position: absolute;
     top:30px;
     background-color: #fff;
     right: 0;
     .sub-menu-item-1{
       white-space: nowrap;
       position: relative;
       text-align: right;
       padding:5px 10px;
       cursor: pointer;
       &:hover{
         background-color: #f1f1f1;
         .sub-menu-2{
          display: flex;
          flex-direction: column;
         }
       }
     }
   }
   .sub-menu-2{
     position: absolute;
     right: 100%;
     top:0px;
     background-color: #fff;
     display: none;
     flex-direction: column;
     .sub-menu-item-2{
       white-space: nowrap;
       position: relative;
       text-align: right;
       padding:5px 10px;
       cursor: pointer;
       &:hover{
         background-color: #f1f1f1;
         .sub-menu-3{
          display: flex;
          flex-direction: column;
         }
       }
     }
   }
   .sub-menu-3{
     position: absolute;
     right: 100%;
     top:0px;
     background-color: #fff;
     display: none;
     flex-direction: column;
     .sub-menu-item-3{
       white-space: nowrap;
       position: relative;
       text-align: right;
       padding:5px 10px;
       cursor: pointer;
       &:hover{
         background-color: #f1f1f1;
         .sub-menu-4{
          display: flex;
          flex-direction: column;
         }
       }
     }
   }
   .sub-menu-4{
     position: absolute;
     right: 100%;
     top:0px;
     background-color: #fff;
     display: none;
     flex-direction: column;
     max-height: 300px;
     overflow-y: auto;
     overflow-x: unset !important;
     .sub-menu-item-4{
      white-space: nowrap;
       position: relative;
       text-align: right;
       padding:5px 10px;
       cursor: pointer;
       &:hover{
        background-color: #f1f1f1;
       }
     }
   }
  }
  .more-icon{
    margin-right: 5px;
  }
}
 .mobile-menu {
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
</style>