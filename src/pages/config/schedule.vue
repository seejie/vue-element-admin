<template>
  <div class="wrapper">
    <el-button type="primary" @click="create">新增年度配置</el-button>
    <el-table :data="tableData" border>
      <el-table-column fixed prop="desc" label="年度描述" header-align="center" align="center" />
      <el-table-column fixed prop="sDate" label="年度开始时间" header-align="center" align="center" />
      <el-table-column fixed prop="eDate" label="年度结束时间" header-align="center" align="center" />
      <el-table-column fixed prop="status" label="状态" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-tag
            :type="row.status === '启用' ? 'success' : 'danger'"
            disable-transitions
          >{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed prop="createTime" label="创建时间" header-align="center" align="center" />
      <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="edit(row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <yearly-config-modal
      :id="currId"
      :visible.sync="showModal"
    />
  </div>
</template>

<script>
import yearlyConfigModal from './yearly-config-modal.vue'
import { getSchedule } from '../../api/index'

export default {
  name: 'Schedule',
  components: { yearlyConfigModal },
  data() {
    return {
      tableData: [{
        id: 0,
        desc: '2021-2022年度',
        sDate: '2021-03-03',
        eDate: '2022-07-01',
        status: '启用',
        createTime: '2021-3-7 15:00'
      }, {
        id: 1,
        desc: '2020-2021年度',
        sDate: '2020-03-01',
        eDate: '2021-02-28',
        status: '结束',
        createTime: '2021-3-7 15:00'
      }],
      showModal: false,
      currId: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await getSchedule()
      console.log(res, '-----res-----')
    },
    create() {
      this.showModal = true
      this.currId = ''
    },
    edit(item) {
      console.log(item, '-----item-----')
      this.showModal = true
      this.currId = item.id
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
