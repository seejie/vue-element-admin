<template>
  <div class="wrapper">
    <el-button type="primary" @click="create">新增年度配置</el-button>
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="年度描述" header-align="center" />
      <el-table-column fixed prop="date" label="年度开始时间" header-align="center" />
      <el-table-column fixed prop="date" label="年度结束时间" header-align="center" />
      <el-table-column fixed prop="date" label="状态" header-align="center" />
      <el-table-column fixed prop="date" label="创建时间" header-align="center" />
      <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data() {
    return {
      tableData: [],
      showModal: false
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{
        date: 'test'
      }]
    },
    create() {
      this.showModal = true
    },
    edit(item) {
      console.log(item, '-----item-----')
      this.showModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  > .el-button {
    margin-bottom: 1.5rem;
  }
}
</style>
