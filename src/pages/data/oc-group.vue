<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="组包编号/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="部门" label-width="42px">
        <dept-select :data.sync="form.dept" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="create">新增组包</el-button>
      </el-form-item>
    </el-form>

    <upload />

    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="缩略图" header-align="center" />
      <el-table-column fixed prop="date" label="组包编号" header-align="center" />
      <el-table-column fixed prop="date" label="组包名称" header-align="center" />
      <el-table-column fixed prop="date" label="所属部门" header-align="center" />
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
import DeptSelect from '../components/dept-select.vue'
import Upload from '../components/upload.vue'

export default {
  name: 'OcGroup',
  components: { DeptSelect, Upload },
  data() {
    return {
      tableData: [],
      form: {
        name: '',
        dept: ''
      },
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

    },
    download() {

    }
  }
}
</script>

<style lang="scss">
.upload-box{
  .el-upload-dragger{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-upload{
      font-size: 18px;
      line-height: 1;
      margin: 0 .5rem;
    }
  }
}
</style>
