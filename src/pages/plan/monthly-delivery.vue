<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="申请单号" label-width="72px">
        <el-input v-model="form.order" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="申请月份" label-width="72px">
        <el-date-picker v-model="form.month" type="month" placeholder="选择日期" style="width: 100%;" />
      </el-form-item>

      <el-form-item label="使用渠道" label-width="72px">
        <channel-select :data="form.channel" />
      </el-form-item>

      <el-form-item label="用途" label-width="40px">
        <program-select :data="form.program" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>
    </el-form>

    <upload />

    <el-tabs type="border-card">
      <el-tab-pane label="单片申请">
        <el-table :data="tableData" border>
          <el-table-column prop="date" label="缩略图" header-align="center" />
          <el-table-column prop="date" label="编码" header-align="center" />
          <el-table-column prop="date" label="名称" header-align="center" />
          <el-table-column prop="date" label="品类" header-align="center" />
          <el-table-column prop="date" label="备注" header-align="center" />
          <el-table-column prop="date" label="单片成本价" header-align="center" />
          <el-table-column prop="date" label="单片市场价" header-align="center" />
          <el-table-column prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="套包申请">
        <el-table :data="tableData" border>
          <el-table-column prop="date" label="缩略图" header-align="center" />
          <el-table-column prop="date" label="编码" header-align="center" />
          <el-table-column prop="date" label="名称" header-align="center" />
          <el-table-column prop="date" label="品类" header-align="center" />
          <el-table-column prop="date" label="备注" header-align="center" />
          <el-table-column prop="date" label="单片成本价" header-align="center" />
          <el-table-column prop="date" label="单片市场价" header-align="center" />
          <el-table-column prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="单片汇总(提交)">
        <el-table :data="tableData" border>
          <el-table-column prop="date" label="缩略图" header-align="center" />
          <el-table-column prop="date" label="编码" header-align="center" />
          <el-table-column prop="date" label="名称" header-align="center" />
          <el-table-column prop="date" label="品类" header-align="center" />
          <el-table-column prop="date" label="备注" header-align="center" />
          <el-table-column prop="date" label="单片成本价" header-align="center" />
          <el-table-column prop="date" label="单片市场价" header-align="center" />
          <el-table-column prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import ChannelSelect from '../components/channel-select.vue'
import ProgramSelect from '../components/program-select.vue'
import Upload from '../components/upload.vue'

export default {
  name: 'MonthlyDelivery',
  components: {
    ChannelSelect,
    ProgramSelect,
    Upload
  },
  data() {
    return {
      tableData: [],
      form: {
        order: '',
        month: '',
        channel: '',
        program: '',
        code: ''
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
    search() {

    }
  }
}
</script>

<style lang="scss">

</style>

