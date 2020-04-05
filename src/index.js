 
 
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ja'

import SrcpCodeShow from './components/SrcpCodeShow.vue'

Vue.use(ElementUI, {locale});
Vue.config.productionTip = false
  
const app = new Vue({
  el: '#app',
  components: {
    SrcpCodeShow
  },
  data: function() {
    return {
      message: 'hello Vue.js!!',
      flg: true,
      rcp0: [{pc: 0, name: 'CSA_HOGEHOGE_00', srcp:['0001','0002','0003']},{pc: 1, name: 'CSA_HOGEHOGE_01', srcp:['1001','1002','1003']},{pc: 2, name: 'CSA_HOGEHOGE_02', srcp:['2001','2002','2003']}],
      rcp1: [{pc: 0, name: 'CSA_HOGEHOGE_10', srcp:['000000000000000000000000000000000000000000000000011','0022','0023','0024']},{pc: 2, name: 'CSA_HOGEHOGE_11', srcp:['1011','1022','1033']},{pc: 4, name: 'CSA_HOGEHOGE_12', srcp:['2011','2022','2033']}],
      tableData: []
     
    }
  },
  methods: {
    handleClick: function(event) {
      console.log(event);
      this.flg = !this.flg;
      if (this.flg) {
        this.tableData = this.rcp0;
      }
      else {
        this.tableData = this.rcp1
      }
    }
  }
})