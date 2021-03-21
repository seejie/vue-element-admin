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
          <el-popconfirm title="确定删除吗？" @onConfirm="del(scope.row)">
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popconfirm>
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <set-oc-group
      :id="currId"
      :visible.sync="showModal"
    />
  </div>
</template>

<script>
import DeptSelect from '../components/dept-select.vue'
import Upload from '../components/upload.vue'
import { getOcGroup, delOcGroup } from '../../api/index'
import SetOcGroup from './set-oc.group.vue'

export default {
  name: 'OcGroup',
  components: { DeptSelect, Upload, SetOcGroup },
  data() {
    return {
      tableData: [],
      form: {
        name: '',
        dept: ''
      },
      name: '',
      dept: '',
      showModal: false,
      currId: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await getOcGroup()
      console.log(res, '-----res-----')
      this.tableData = [{ date: 'test' }]
    },
    async del(item) {
      const res = await delOcGroup()
      console.log(res, '-----res-----')
      console.log(item, '-----item-----')
    },
    edit(item) {
      console.log(item, '-----item-----')
      this.currId = item.id || ''
      this.showModal = true
    },
    search() {

    },
    create() {
      this.currId = ''
      this.showModal = true
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
