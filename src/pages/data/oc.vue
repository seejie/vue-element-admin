<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="缩略图" header-align="center" />
      <el-table-column fixed prop="date" label="编码" header-align="center" />
      <el-table-column fixed prop="date" label="名称" header-align="center" />
      <el-table-column fixed prop="date" label="品类" header-align="center" />
      <el-table-column fixed prop="date" label="规格" header-align="center" />
      <el-table-column fixed prop="date" label="产品线" header-align="center" />
      <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
      <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
      <el-table-column fixed prop="date" label="正装售价" header-align="center" />
      <el-table-column fixed prop="date" label="正装毫升数" header-align="center" />
      <el-table-column fixed prop="date" label="小样毫升数" header-align="center" />
      <el-table-column fixed prop="date" label="生效日期" header-align="center" />
      <el-table-column fixed prop="date" label="失效日期" header-align="center" />
      <el-table-column fixed prop="date" label="备注" header-align="center" />
      <el-table-column fixed prop="date" label="替换产品" header-align="center" />
      <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="download(scope.row)">下载高清图</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OC',
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
    },
    download(item) {
      console.log(item, '-----item-----')
    }
  }
}
</script>

<style>

</style>
