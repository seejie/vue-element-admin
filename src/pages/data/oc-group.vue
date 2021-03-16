<template>
  <div class="wrapper">
    <div class="operation-pannel">
      <div class="row">
        <div>
          <span>组包编号/名称</span>
          <el-input v-model="name" placeholder="请输入" />
        </div>
        <div style="flex:1;">
          <span>部门（Function）</span>
          <dept-select :data.sync="dept" />
        </div>
        <el-button type="primary" @click="search">检索</el-button>
      </div>
      <div class="row">
        <el-button type="primary" @click="create">新增组包</el-button>
        <div class="upload-wrapper">
          <span>批量导入组包</span>
          <div>upload</div>
        </div>
        <el-button type="primary" @click="upload">上传</el-button>
        <el-button type="text" @click="upload">下载导入模板</el-button>
      </div>
    </div>

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
import deptSelect from '../components/dept-select'

export default {
  name: 'OcGroup',
  components: { deptSelect },
  data() {
    return {
      tableData: [],
      name: '',
      dept: ''
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
    },
    search() {

    },
    create() {

    },
    upload() {

    }
  }
}
</script>

<style lang="scss" scoped>
.operation-pannel{
  margin-bottom: 1.5rem;
  .row{
    display: flex;
    align-items: center;
    &+.row{
      margin-top: 1rem;
    }
    .upload-wrapper{
      flex:1;
      display:flex;
      margin: 0 1rem;
    }
  }
  .el-input{
    margin: 0 1rem;
    width: 260px;
  }
}
</style>
