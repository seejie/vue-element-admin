<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="Function" header-align="center" />
      <el-table-column fixed prop="date" label="申请人" header-align="center" />
      <el-table-column fixed prop="date" label="Program" header-align="center" />
      <el-table-column fixed prop="date" label="Category" header-align="center" />
      <el-table-column fixed prop="date" label="产品线" header-align="center" />
      <el-table-column fixed prop="date" label="OC 编码" header-align="center" />
      <el-table-column fixed prop="date" label="OC 名称" header-align="center" />
      <el-table-column fixed prop="date" label="类型" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 月份" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 数量" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 申请数量" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 申请发货进度" header-align="center" />
      <el-table-column fixed prop="date" label="已申请 发货总次数" header-align="center" />
      <el-table-column fixed prop="date" label="申请发货 总数量" header-align="center" />
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
  name: 'FCST',
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
