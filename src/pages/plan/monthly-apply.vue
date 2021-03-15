<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="date" label="缩略图" header-align="center" />
      <el-table-column fixed prop="date" label="编码" header-align="center" />
      <el-table-column fixed prop="date" label="名称" header-align="center" />
      <el-table-column fixed prop="date" label="品类" header-align="center" />
      <el-table-column fixed prop="date" label="规格" header-align="center" />
      <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
      <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
      <el-table-column fixed prop="date" label="是否计划外" header-align="center" />
      <el-table-column fixed prop="date" label="本次申请数量" header-align="center" />
      <el-table-column fixed prop="date" label="申请备注" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MonthlyApply',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{ date: 'test' }]
    },
    edit(item) {
      console.log(item, '-----item-----')
    }
  }
}
</script>

<style>

</style>

