<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="申请单号" header-align="center" />
      <el-table-column fixed prop="date" label="使用渠道" header-align="center" />
      <el-table-column fixed prop="date" label="用途（Program）" header-align="center" />
      <el-table-column fixed prop="date" label="部门（Function）" header-align="center" />
      <el-table-column fixed prop="date" label="申请人" header-align="center" />
      <el-table-column fixed prop="date" label="提交时间" header-align="center" />
      <el-table-column fixed prop="date" label="状态" header-align="center" />
      <el-table-column fixed prop="date" label="审核备注" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="check(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="edit(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MonthlyView',
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
    check(item) {
      console.log(item, '-----item-----')
    },
    edit(item) {
      console.log(item, '-----item-----')
    }
  }
}
</script>

<style>

</style>

