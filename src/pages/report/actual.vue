<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="品类" header-align="center" />
      <el-table-column fixed prop="date" label="产品线" header-align="center" />
      <el-table-column fixed prop="date" label="SKU" header-align="center" />
      <el-table-column fixed prop="date" label="SKU Desc" header-align="center" />
      <el-table-column fixed prop="date" label="FOC QTY" header-align="center" />
    </el-table>

    <el-pagination
      :current-page="currPage"
      :page-sizes="pageOptions"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Actual',
  data() {
    return {
      tableData: [],
      currPage: 1,
      total: 0,
      pageOptions: [100, 200, 300, 400]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{ date: 'test' }]
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}
</script>

<style>

</style>
