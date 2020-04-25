<template>
  <el-table class="srcp-tbl" :data="tableData" size="medium" style="width: 80%" stripe border>
    <el-table-column
      prop="pc"
      label="PC"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="msg1"
      label="Msg1">
    </el-table-column>
    <el-table-column
      prop="msg2"
      label="Msg2">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'SrcpCodeShow',
  props: {
    tableData: Array,
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


.srcp-tbl >>> .srcp-tbl {
  background-color: pink;
}

.srcp-tbl >>> td {
  padding: 4px 3px;
}

</style>

