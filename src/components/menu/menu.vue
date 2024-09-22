<template>
    <div v-if="!isSmallDevice && showMenu" class="menu flex " >
        <a @click="handleMainMenuItemClick(item)" v-for="(item, index) in this.menuItems"  :key="index" class="menu-item">
              <span>{{item.title}}</span>
               <q-icon v-if="item.childrens.length" class="more-icon" name="expand_more" ></q-icon>
              <div class="sub-menu-1">
                <a @click="handleMainMenuItemClick(subMenuItem1)" class="sub-menu-item-1 flex justify-between items-center no-wrap"  v-for="(subMenuItem1,subMenuItem1Index) in item.childrens" :key="subMenuItem1Index">
                  <span>{{subMenuItem1.title}}</span>
                  <q-icon v-if="subMenuItem1.childrens.length" class="more-icon" name="chevron_left" ></q-icon>
                  <div class="sub-menu-2">
                    <a @click="handleMainMenuItemClick(subMenuItem2)" class="sub-menu-item-2 flex justify-between items-center no-wrap"   v-for="(subMenuItem2,subMenuItem2Index) in subMenuItem1.childrens" :key="subMenuItem2Index">
                      <span>{{subMenuItem2.title}}</span>
                       <q-icon v-if="subMenuItem2.childrens.length" class="more-icon" name="chevron_left" ></q-icon>
                      <div class="sub-menu-3">
                         <a @click="handleMainMenuItemClick(subMenuItem3)"  class="sub-menu-item-3 flex justify-between items-center no-wrap" v-for="(subMenuItem3,subMenuItem3Index) in subMenuItem2.childrens" :key="subMenuItem3Index">
                          <span>{{subMenuItem3.title}}</span>
                          <q-icon v-if="subMenuItem3.childrens.length" class="more-icon" name="chevron_left" ></q-icon> 
                          <div class="sub-menu-4">
                             <a @click="handleMainMenuItemClick(subMenuItem4)" class="sub-menu-item-4 flex justify-between items-center no-wrap" v-for="(subMenuItem4,subMenuItem4Index) in subMenuItem3.childrens" :key="subMenuItem4Index">
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
   <div v-if="isSmallDevice && showMenu" class="mobile-menu flex column justify-start items-start">
      <div class="action-bar">
        <div class="q-mb-md flex justify-start items-center ">
          <div v-if="userIsLogin" class="alias-name">
            <q-icon
              name="person"
              size="20px"
             >
           </q-icon>
            <span v-if="currentUser && currentUser.aliasName" class="q-ml-md">{{currentUser.aliasName}}</span>
        </div>
        <q-space />
          <a @click="handleCloseMobileMenu" class="close-button flex justify-center items-center">
            <q-icon size="20px" name="close" ></q-icon>
          </a>
        </div>
        <q-btn class="button register-btn" color="primary" v-if="!userIsLogin" @click="signUp"><a>ثبت نام</a></q-btn>
        <q-btn v-if="userIsLogin" class="button entrance-btn" color="green" @click="login"><a>{{"ورود به پورتال"}}</a></q-btn>
        <q-btn v-else class="button entrance-btn" color="green" @click="login"><a>{{"ورود"}}</a></q-btn>
        <q-btn v-if="userIsLogin" class="button logout-button" color="red-6" label="خروج" @click="logout()"></q-btn>
      </div>
      <div class="content flex column justify-start items-start">
         <a @click="handleMenuItemClick(index,item)" v-for="(item, index) in this.menuItems"  :key="index" class="menu-item flex justify-start items-start"  >
              <div>
                <span>{{item.title}}</span>
                <q-icon v-if="item.childrens.length" class="more-icon" name="expand_more" ></q-icon>
              </div>
              <div :style="menuItemActiveIndex==index?'display:flex':'display:none'" class="sub-menu-1 flex column justify-start items-start">
                <a @click="handleSubMenuItem1Click(subMenuItem1Index,subMenuItem1)" class="sub-menu-item-1 flex column  justify-start items-start no-wrap"  v-for="(subMenuItem1,subMenuItem1Index) in item.childrens" :key="subMenuItem1Index">
                  <div>
                    <span>{{subMenuItem1.title}}</span>
                    <q-icon v-if="subMenuItem1.childrens.length" class="more-icon" name="expand_more" ></q-icon>
                  </div>
                  <div :style="subMenuItem1ActiveIndex==subMenuItem1Index?'display:flex':'display:none'" class="sub-menu-2 flex column justify-start items-start">
                    <a @click="handleSubMenuItem2Click(subMenuItem2Index,subMenuItem2)" class="sub-menu-item-2 flex column justify-start items-start no-wrap"   v-for="(subMenuItem2,subMenuItem2Index) in subMenuItem1.childrens" :key="subMenuItem2Index">
                      <div>
                        <span>{{subMenuItem2.title}}</span>
                        <q-icon v-if="subMenuItem2.childrens.length" class="more-icon" name="expand_more" ></q-icon>
                      </div>
                      <div :style="subMenuItem2ActiveIndex==subMenuItem2Index?'display:flex':'display:none'" class="sub-menu-3 flex column justify-start items-start">
                         <a @click="handleSubMenuItem3Click(subMenuItem3Index,subMenuItem3)" class="sub-menu-item-3 flex column justify-start items-start no-wrap" v-for="(subMenuItem3,subMenuItem3Index) in subMenuItem2.childrens" :key="subMenuItem3Index">
                          <div>
                            <span>{{subMenuItem3.title}}</span>
                            <q-icon v-if="subMenuItem3.childrens.length" class="more-icon" name="expand_more" ></q-icon></div> 
                          <div :style="subMenuItem3ActiveIndex==subMenuItem3Index?'display:flex':'display:none'" class="sub-menu-4 flex column justify-start items-start">
                             <a @click="handleSubMenuItem4Click(subMenuItem4Index,subMenuItem4)" class="sub-menu-item-4 flex column justify-start items-start no-wrap" v-for="(subMenuItem4,subMenuItem4Index) in subMenuItem3.childrens" :key="subMenuItem4Index">
                              <span>{{subMenuItem4.title}}</span>
                              <q-icon v-if="subMenuItem4.childrens.length" class="more-icon" name="expand_more" ></q-icon>
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
       showSubMenu1:false,
       menuItemActiveIndex:-1,
       subMenuItem1ActiveIndex:-1,
       subMenuItem2ActiveIndex:-1,
       subMenuItem3ActiveIndex:-1,
       isSmallDevice:false,
       showMenu:false,
        
    };
  },
  props: {
     currentUser:{},
     userIsLogin: {
        type: Boolean,
        default: true
      },
  },
  mounted(){
    this.getMenueItems();
    if(this.$q.screen < 992){
        this.isSmallDevice=true;
      }
  },
  methods: {
     getMenueItems() {
        services
          .getMenuesItem()
          .then((response) => {
            this.mainItems = response.data.message;
            this.setMenuItems(this.mainItems);
            setTimeout(()=>{
             this.showMenu=true;
            },2000)
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
      handleCloseMobileMenu(){
        this.$emit("closeMobileMenu");
      },
      handleMenuItemClick(index,item){
        if(!item.childrens.length){
          console.log("this is item",item);
          let url=JSON.parse(item.url)
          if(url.type=="redirect"){
           window.location.href=url.url;
          }else if(url.type=="open"){
            window.open(url.url);
          }
        }else{
          this.menuItemActiveIndex=index;
        }
          
      },
      handleSubMenuItem1Click(index,item){
        if(!item.childrens.length){
           console.log("this is item",item);
          let url=JSON.parse(item.url)
          if(url.type=="redirect"){
           window.location.href=url.url;
          }else if(url.type=="open"){
            window.open(url.url);
          }
        }else{
          this.subMenuItem1ActiveIndex=index; 
        }
      },
      handleSubMenuItem2Click(index,item){
        if(!item.childrens.length){
           console.log("this is item",item);
          let url=JSON.parse(item.url)
          if(url.type=="redirect"){
           window.location.href=url.url;
          }else if(url.type=="open"){
            window.open(url.url);
          }
        }else{
          this.subMenuItem2ActiveIndex=index;
        }
      },
      handleSubMenuItem3Click(index,item){
        if(!item.childrens.length){
           console.log("this is item",item);
          let url=JSON.parse(item.url)
          if(url.type=="redirect"){
           window.location.href=url.url;
          }else if(url.type=="open"){
            window.open(url.url);
          }
        }else{
          this.subMenuItem3ActiveIndex=index;
        }
      },
      handleSubMenuItem4Click(index,item){
         if(!item.childrens.length){
           console.log("this is item",item);
          let url=JSON.parse(item.url)
          if(url.type=="redirect"){
           window.location.href=url.url;
          }else if(url.type=="open"){
            window.open(url.url);
          }
        }else{
          this.subMenuItem4ActiveIndex=index;
        }
      },
      handleMainMenuItemClick(item){
         console.log("this is item",item);
          let url=JSON.parse(item.url)
          if(url.type=="redirect"){
           window.location.href=url.url;
          }else if(url.type=="open"){
            window.open(url.url);
          }
      },
      signUp(){
        this.$emit("onSignUp") 
      },
      login(){
        this.$emit("onLogin") 
      },
      logout(){
        this.$emit("onLogout") 
      },
  },
});
</script>
<style lang="scss">
.menu{
  direction: rtl !important;
  color:#000;
  margin-left: 20px;
  .menu-item{
    padding:5px 10px !important;
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
     right: 0px;
     .sub-menu-item-1{
       white-space: nowrap;
       position: relative;
       text-align: right;
       padding:5px 10px !important;
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
       padding:5px 10px !important;
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
       padding:5px 10px !important;
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
       padding:5px 10px !important;
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
    .action-bar{
      width:100%;
      padding:20px 10px;
      .close-button{
          width: 30px;
          height: 30px;
          cursor: pointer;
      }
      .button{
        width:50%;
      }
    }
    width: 300px;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom:0px;
    background-color: #fff;
    direction: rtl;
    .content{
      flex-grow: 1;
      flex-basis: 0;
      overflow-y:auto;
      padding: 10px;
      flex-wrap: nowrap;
      width: 100%;
    }
     .menu-item{
       position: relative;
       cursor: pointer;
       width: 100%;
       padding: 5px;
       &:hover{
         .sub-menu-1{
           display: flex;
         }
       }
     }
    .sub-menu-1{
      width: 100%;
      padding-right: 10px;
      background-color: #eee;
      .sub-menu-item-1{
        width: 100%;
        padding: 5px;
     }
    }
    .sub-menu-2{
      width: 100%;
      padding-right: 10px;
      .sub-menu-item-2{
        width: 100%;
        padding: 5px;
        background-color: #e2e2e2;
     }
    }
    .sub-menu-3{
      width: 100%;
      padding-right: 10px;
      .sub-menu-item-3{
        width: 100%;
        padding: 5px;
        background-color: #d7d7d7;
     }
    }
    .sub-menu-4{
      width: 100%;
      padding-right: 10px;
      background-color: #ccc;
      .sub-menu-item-4{
        width: 100%;
        padding: 5px;
     }
    }
  }
</style>