<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="date" label="缩略图" header-align="center" />
      <el-table-column fixed prop="date" label="编码" header-align="center" />
      <el-table-column fixed prop="date" label="名称" header-align="center" />
      <el-table-column fixed prop="date" label="品类" header-align="center" />
      <el-table-column fixed prop="date" label="备注" header-align="center" />
      <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
      <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'YearlyApply',
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
    }
  }
}
</script>

<style>

</style>

