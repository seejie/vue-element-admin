<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="申请单号" label-width="102px">
        <el-input v-model="form.order" placeholder="请输入" style="width:195px" />
      </el-form-item>

      <el-form-item label="部门" label-width="102px">
        <dept-select :data.sync="form.dept" />
      </el-form-item>

      <el-form-item label="申请状态" label-width="102px">
        <audit-status-select v-model="form.status" type="month" style="width: 100%;" />
      </el-form-item>

      <el-form-item label="申请日期" label-width="102px">
        <span class="date-wrapper">
          <el-date-picker v-model="form.sDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
        <span class="line">-</span>
        <span class="date-wrapper">
          <el-date-picker v-model="form.eDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
      </el-form-item>

      <el-form-item label="申请月份" label-width="102px">
        <el-date-picker v-model="form.month" type="month" placeholder="选择月份" style="width: 195px;" />
      </el-form-item>

      <el-form-item label="使用渠道" label-width="102px">
        <channel-select :data="form.channel" />
      </el-form-item>

      <el-form-item label="用途" label-width="102px">
        <program-select :data="form.program" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="申请单号" header-align="center" />
      <el-table-column fixed prop="date" label="使用渠道" header-align="center" />
      <el-table-column fixed prop="date" label="用途（Program）" header-align="center" />
      <el-table-column fixed prop="date" label="部门" header-align="center" />
      <el-table-column fixed prop="date" label="申请人" header-align="center" />
      <el-table-column fixed prop="date" label="提交时间" header-align="center" />
      <el-table-column fixed prop="date" label="状态" header-align="center" />
      <el-table-column fixed prop="date" label="审核备注" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="check(row)">查看</el-button>
          <el-button type="text" size="small" @click="edit(row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import AuditStatusSelect from '../components/audit-status-select.vue'
import ChannelSelect from '../components/channel-select.vue'
import deptSelect from '../components/dept-select.vue'
import ProgramSelect from '../components/program-select.vue'

export default {
  name: 'MonthlyView',
  components: {
    AuditStatusSelect,
    deptSelect,
    ChannelSelect,
    ProgramSelect
  },
  data() {
    return {
      tableData: [],
      form: {
        order: '',
        dept: '',
        status: '',
        month: '',
        sDate: '',
        eDate: '',
        channel: '',
        program: ''
      }
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
    },
    search() {

    }
  }
}
</script>

<style lang="scss" scoped>
.date-wrapper {
  display: inline-block;
  width: 160px;
}
.line {
  margin: 0 10px;
}
</style>
