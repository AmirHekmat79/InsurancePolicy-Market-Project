import { defineStore } from 'pinia';

export const useBaseDataStore = defineStore('baseData', {
  state: () => ({
    baseData: [],
    isSuccess:false
  }),
  getters: {
    
  },
  actions: {
    setBaseData(data,isSuccess) {
      this.baseData=data;
      this.isSuccess=isSuccess;
    },
  },
});
