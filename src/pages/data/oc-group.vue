<template>
  <div class="wrapper">
    <el-form inline>
      <el-form-item label="组包编号/名称" label-width="102px">
        <el-input v-model="name" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="部门" label-width="42px">
        <dept-select :data.sync="dept" />
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
      <el-table-column prop="img" label="缩略图" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-image
            style="width: 100px; height: 100px"
            :src="row.img"
            :preview-src-list="[row.img]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="id" label="组包编号" header-align="center" align="center" />
      <el-table-column prop="name" label="组包名称" header-align="center" />
      <el-table-column prop="dept" label="所属部门" header-align="center" />
      <el-table-column prop="price" label="组包价格" header-align="center" align="center" />
      <el-table-column prop="count" label="包含单片数量" header-align="center" align="center" />
      <el-table-column prop="createTime" label="创建日期" header-align="center" align="center" />
      <el-table-column prop="creator" label="创建人" header-align="center" align="center" />
      <el-table-column fixed="right" label="操作" width="60" header-align="center">
        <template slot-scope="{row}">
          <el-popconfirm title="确定删除吗？" @onConfirm="del(row)">
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popconfirm>
          <el-button type="text" size="small" @click="edit(row)">编辑</el-button>
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
import SetOcGroup from './set-oc-group.vue'

export default {
  name: 'OcGroup',
  components: { DeptSelect, Upload, SetOcGroup },
  data() {
    return {
      tableData: [{
        img: '',
        id: '80086952',
        name: '娇韵诗明星防晒系列试用装',
        dept: 'Tmall Recruiting',
        price: '7.50',
        count: '5',
        createTime: '2021-1-18',
        creator: '张*'
      }],
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
    },
    async del(item) {
      const res = await delOcGroup(item.id)
      console.log(res, '-----res-----')
      console.log(item, '-----item-----')
      this.getList()
    },
    edit(item) {
      console.log(item, '-----item-----')
      this.currId = item.id
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
