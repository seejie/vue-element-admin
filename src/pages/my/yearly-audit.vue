<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="部门" label-width="102px">
        <dept-select :data.sync="form.dept" />
      </el-form-item>

      <el-form-item label="申请单号" label-width="102px">
        <el-input v-model="form.order" placeholder="请输入" style="width:195px" />
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

      <el-form-item label="申请年份" label-width="102px">
        <el-date-picker v-model="form.eDate" type="year" placeholder="选择日期" style="width: 100%;" />
      </el-form-item>

      <el-form-item label="审核状态" label-width="102px">
        <audit-status-select v-model="form.status" type="month" style="width: 100%;" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
        <el-button type="primary" @click="exportData">导出EXCEL</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column prop="id" label="申请单号" header-align="center" />
      <el-table-column prop="dept" label="部门" header-align="center" />
      <el-table-column prop="channel" label="渠道" header-align="center" />
      <el-table-column prop="program" label="Program" header-align="center" />
      <el-table-column prop="user" label="申请人" header-align="center" />
      <el-table-column prop="date" label="申请日期" header-align="center" align="center" />
      <el-table-column prop="year" label="申请年度" header-align="center" align="center" />
      <el-table-column prop="status" label="审核状态" header-align="center" align="center" width="110px">
        <template slot-scope="{row}">
          <el-tag
            :type="row.status === '通过' ? 'success' : row.status === '拒绝' ? 'danger' : ''"
            disable-transitions
          >{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="note" label="审核备注" header-align="center" />
      <el-table-column prop="date" label="审核日期" header-align="center" align="center" />
      <el-table-column prop="auditor" label="审核人" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="check(row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <audit-modal
      :id.sync="currId"
      type="yearly"
    />
  </div>
</template>

<script>
import AuditStatusSelect from '../components/audit-status-select.vue'
import deptSelect from '../components/dept-select.vue'
import AuditModal from './audit-modal.vue'
import { yearlyAudit, importYearlyAudit } from '../../api/index'

export default {
  name: 'YearlyAudit',
  components: {
    deptSelect,
    AuditStatusSelect,
    AuditModal
  },
  data() {
    return {
      tableData: [{
        id: '202103010001',
        dept: '部门',
        channel: '渠道',
        program: '招新',
        user: '张*',
        date: '2021-03-01',
        year: '2021',
        status: '通过',
        note: '',
        auditor: '张*'
      }, {
        id: '202103010002',
        dept: '部门',
        channel: '渠道',
        program: '招新',
        user: '张*',
        date: '2021-03-01',
        year: '2021',
        status: '拒绝',
        note: '',
        auditor: '张*'
      }, {
        id: '202103010003',
        dept: '部门',
        channel: '渠道',
        program: '招新',
        user: '张*',
        date: '2021-03-01',
        year: '2021',
        status: '未审核',
        note: '',
        auditor: '张*'
      }],
      form: {
        dept: '',
        order: '',
        sDate: '',
        eDate: '',
        month: '',
        status: ''
      },
      currId: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await yearlyAudit()
      console.log(res, '-----res-----')
    },
    check(item) {
      console.log(item, '-----item-----')
      this.currId = item.id
    },
    search() {

    },
    async exportData() {
      const res = await importYearlyAudit()
      console.log(res, '-----res-----')
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

