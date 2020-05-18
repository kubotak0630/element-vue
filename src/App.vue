<template>
  <div id="app">
    <div>Hello Vue.js</div>
    <p>{{ flg }}</p>
    <div class="dump-file-open">
      <FileDropBox
        v-on:emit-freaddone-event="OnFileRead"
        v-bind:isEnable="!checked"
        id_str="dumpfile-cmp"
        text_label="Dumpファイルを選択 or FileDrop"
      ></FileDropBox>
      <el-checkbox v-model="checked">fileを選択しない</el-checkbox>
    </div>
    <el-button type="primary" @click="handleClick">Button</el-button>
    <el-button type="primary" @click="onButtonChangeData">ChageData</el-button>
    <i class="el-icon-loading" v-show="loadingFlg"></i>
    <srcp-code-show v-bind:table-data="tableData"></srcp-code-show>

    <el-backtop :visibility-height="2000"></el-backtop>
  </div>
</template>

<script>
import SrcpCodeShow from './components/SrcpCodeShow.vue';
import FileDropBox from './components/FileDropBox.vue';

export default {
  name: 'App',
  components: {
    SrcpCodeShow,
    FileDropBox
  },
  data: function() {
    return {
      message: 'hello Vue.js!!',
      flg: true,
      tableData: [],
      loadingFlg: false,
      checked: false
    };
  },
  methods: {
    handleClick: function(event) {
      console.log(event);
      this.flg = !this.flg;
    },
    OnFileRead: function() {
      console.log('Call OnFileRead');
    },
    onButtonChangeData: function() {
      this.loadingFlg = true;

      setTimeout(() => {
        this.tableData = [];
        for (let i = 0; i < 12; i++) {
          const tempString0 = Math.random()
            .toString(32)
            .substring(2);
          const tempString1 = Math.random()
            .toString(32)
            .substring(2);
          const tempString2 = Math.random()
            .toString(32)
            .substring(2);
          const tempString3 = Math.random()
            .toString(32)
            .substring(2);
          this.tableData.push({
            pc: i,
            name: tempString0,
            msg1: tempString1,
            msg2: tempString2,
            msg3: tempString3
          });
          this.loadingFlg = false;
        }
      }, 50);

      // console.log(this.tableData)
      console.log('tableData Created');
    }
  }
};
</script>

<style lang="scss" scoped>
.dump-file-open {
  margin-bottom: 40px;
}
</style>
