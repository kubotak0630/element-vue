<template>
  <el-table class="srcp-tbl" :data="tableData" size="small" style="width: 70%" stripe border>
    <el-table-column type="expand" width="35">
      <template slot-scope="props">
        <div class="hoge" v-for="(elem,index) in props.row.srcp">pc={{index}},0x{{elem}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="pc"
      label="PC"
      width="40">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'SrcpCodeShow',
  props: {
    tableData: [],
  },
  data: function() {
    return {
    }
  }
}
</script>


<style scoped>

.srcp-tbl >>> .el-table__expanded-cell {
  padding: 10px 10px 10px 35px;
}

/*
.srcp-tbl >>> td {
  padding: 10px;
}
*/

.srcp-tbl >>> .srcp-tbl {
  background-color: pink;
}

</style>

