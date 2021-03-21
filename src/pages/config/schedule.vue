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
      tableData: [],
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
      this.tableData = [{
        date: 'test'
      }]
    },
    create() {
      this.showModal = true
      this.currId = ''
    },
    edit(item) {
      console.log(item, '-----item-----')
      this.showModal = true
      this.currId = item.id || ''
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
