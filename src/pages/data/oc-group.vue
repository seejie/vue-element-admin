<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="缩略图" header-align="center" />
      <el-table-column fixed prop="date" label="组包编号" header-align="center" />
      <el-table-column fixed prop="date" label="组包名称" header-align="center" />
      <el-table-column fixed prop="date" label="所属部门（Function）" header-align="center" />
      <el-table-column fixed prop="date" label="组包价格" header-align="center" />
      <el-table-column fixed prop="date" label="包含单片数量" header-align="center" />
      <el-table-column fixed prop="date" label="创建日期" header-align="center" />
      <el-table-column fixed prop="date" label="创建人" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OcGroup',
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
    del(item) {
      console.log(item, '-----item-----')
    },
    edit(item) {
      console.log(item, '-----item-----')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
