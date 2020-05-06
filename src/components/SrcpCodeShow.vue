<template>
  <div>
    <p>{{ radio }}</p>

    <div class="tagselect-container">
      <div class="radio-select-wrapper">
        <div class="radio-title">ClstFmtTbl位置</div>
        <el-divider class="radio-divider"></el-divider>

        <el-radio-group v-model="radio">
          <div>
            <el-radio :label="5" v-on:change="radioSelect">Word5</el-radio>
          </div>
          <div>
            <el-radio :label="7" v-on:change="radioSelect">Word7</el-radio>
          </div>
          <div>
            <el-radio :label="9" v-on:change="radioSelect">Word9</el-radio>
          </div>
        </el-radio-group>
      </div>
      <div>
        <div class="clstfmt-info">
          <div>
            <el-tag type="info"><span>clstfmtatg :</span> 0x00000000</el-tag>
          </div>
          <div>
            <el-tag type="info"><span>datafmtatg :</span> 0x00000000</el-tag>
          </div>
        </div>
      </div>
    </div>

    <el-table
      class="srcp-tbl"
      ref="table"
      :data="tableData"
      :span-method="arraySpanMethod"
      :row-class-name="tableRowClassName"
      size="medium"
      style="width: 80%"
      stripe
      border
    >
      <el-table-column type="expand" width="30">
        <template slot-scope="props">
          hello
        </template>
      </el-table-column>

      <el-table-column prop="pc" label="PC" width="60"> </el-table-column>

      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="msg1" label="Msg1"> </el-table-column>
      <el-table-column prop="msg2" label="Msg2"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SrcpCodeShow",
  props: {
    tableData: Array,
  },
  data: function() {
    return {
      radio: 5,
    };
  },
  methods: {
    arraySpanMethod: function({ row, column, rowIndex, columnIndex }) {
      // if (rowIndex < 4) {

      if (!(rowIndex == this.radio || rowIndex == this.radio + 1)) {
        if (columnIndex === 0) {
          return [0, 0];
        } else if (columnIndex === 1) {
          return [1, 2];
        }
      }
    },
    tableRowClassName: function({ row, rowIndex }) {
      if (rowIndex == this.radio || rowIndex == this.radio + 1) {
        return "selected-row";
      } else {
        return "no-selected-row";
      }
    },
    radioSelect: function(evt) {
      console.log(`radioSelect ${evt}`);
      //テーブル全体を再描画するためにデータをpop/pushする
      const temp = this.tableData.pop();
      this.tableData.push(temp);
    },
  },

  created: function() {
    console.log("Call created");
  },
};
</script>

<style lang="scss" scoped>
.srcp-tbl /deep/ {
  background-color: pink;

  td {
    padding: 4px 3px;
  }

  .el-table__expanded-cell {
    padding: 10px 10px 10px 35px;
  }

  .selected-row {
    /* color:blue; */
    /* padding: 4px 32px; */
    padding-left: 3px;
    text-align: left;
  }

  .no-selected-row td:nth-of-type(1) {
    color: blue;
    padding-left: 33px;
    text-align: left;
  }
}

.radio-select-wrapper {
  /* background-color: #eeeeee; */
  margin-top: 0;

  .el-radio {
    margin: 4px 8px;
  }
}

.tagselect-container {
  display: flex;
}

.clstfmt-info {
  margin: 30px 0 0 20px;

  .el-tag {
    width: 200px;
  }
  span {
    display: inline-block;
    width: 75px;
  }
}

.radio-divider {
  margin: 0 0 6px 0;
}

.radio-title {
  font-size: 14px;
}
</style>
