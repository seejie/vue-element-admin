<template>
  <el-dialog
    :title="`${title}度审核申请`"
    :visible="dialogVisible"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form label-width="72px" inline>
      <el-form-item label="申请编号">{{ curr.order }}</el-form-item>
      <el-form-item label="申请人">{{ curr.order }}</el-form-item>
      <el-form-item label="部门">{{ curr.order }}</el-form-item>
      <el-form-item label="申请日期">{{ curr.order }}</el-form-item>
      <el-form-item v-if="title === '月'" label="申请月份">{{ curr.order }}</el-form-item>
      <el-form-item label="渠道">{{ curr.order }}</el-form-item>
      <el-form-item label="用途">{{ curr.order }}</el-form-item>
      <el-form-item v-if="title !== '月'" label="申请年度">{{ curr.order }}</el-form-item>
    </el-form>

    <el-table v-if="title === '月'" :data="monthlyTable" border>
      <el-table-column prop="date" label="编码" header-align="center" />
      <el-table-column prop="date" label="名称" header-align="center" />
      <el-table-column prop="date" label="品类" header-align="center" />
      <el-table-column prop="date" label="类型" header-align="center" />
      <el-table-column prop="date" label="单片成本价" header-align="center" />
      <el-table-column prop="date" label="单片市场价" header-align="center" />
      <el-table-column prop="date" label="是否计划外" header-align="center" />
      <el-table-column prop="date" label="年度计划数量" header-align="center" />
      <el-table-column prop="date" label="可申请数量" header-align="center" />
      <el-table-column prop="date" label="本次申请数量" header-align="center" />
      <el-table-column prop="date" label="申请备注" header-align="center" />
      <el-table-column prop="date" label="审核意见" header-align="center" />
    </el-table>

    <el-table v-else :data="yearlyTable" border>
      <el-table-column prop="date" label="编码" header-align="center" />
      <el-table-column prop="date" label="名称" header-align="center" />
      <el-table-column prop="date" label="品类" header-align="center" />
      <el-table-column prop="date" label="备注" header-align="center" />
      <el-table-column prop="date" label="单片成本价" header-align="center" />
      <el-table-column prop="date" label="单片市场价" header-align="center" />
      <el-table-column prop="date" label="是否计划外" header-align="center" />
      <el-table-column prop="date" label="申请备注" header-align="center" />
    </el-table>

    <div class="audit">
      <span>审核意见：</span>
      <el-input v-model="audit" type="textarea" placeholder="请输入" />
    </div>

    <div class="title">审核历史记录</div>
    <el-table :data="historyData" border>
      <el-table-column prop="date" label="时间" header-align="center" />
      <el-table-column prop="date" label="提交/审核人" header-align="center" />
      <el-table-column prop="date" label="动作" header-align="center" />
      <el-table-column prop="date" label="下一审核人" header-align="center" />
      <el-table-column prop="date" label="备注" header-align="center" />
    </el-table>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="reject">驳 回</el-button>
        <el-button type="primary" @click="confrim">通 过</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import * as api from '../../api/index'

export default {
  name: 'AuditModal',
  props: ['id', 'type'],
  data() {
    return {
      curr: {},
      monthlyTable: [],
      yearlyTable: [],
      audit: '',
      historyData: []
    }
  },
  computed: {
    dialogVisible: {
      set() {
        this.$emit('update:id', '')
      },
      get() {
        return !!this.id
      }
    },
    title() {
      return this.type === 'yearly' ? '年' : '月'
    }
  },
  watch: {
    id(v) {
      if (!v) return
      this.getDetail()
    }
  },
  methods: {
    async getDetail() {
      const url = this.title === '月' ? 'monthlyAuditDetail' : 'yearlyAuditDetail'
      const res = await api[url]()
      console.log(res, '-----res-----')
    },
    handleClose() {
      this.dialogVisible = false
    },
    async reject() {
      const url = this.title === '月' ? 'monthlyAuditReject' : 'yearlyAuditReject'
      const res = await api[url]()
      console.log(res, '-----res-----')
      this.dialogVisible = false
    },
    async confrim() {
      const url = this.title === '月' ? 'monthlyAuditPass' : 'yearlyAuditPass'
      const res = await api[url]()
      console.log(res, '-----res-----')
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.audit{
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
  span{
    width: 100px;
  }
}
.title{
  margin-bottom: 1rem;
}
</style>
