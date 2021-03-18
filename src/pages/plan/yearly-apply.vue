<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="申请单号" label-width="72px">
        <el-input v-model="form.order" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="使用渠道" label-width="72px">
        <channel-select :data="form.channel" />
      </el-form-item>

      <el-form-item label="用途" label-width="40px">
        <program-select :data="form.program" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addProgram">New Program</el-button>
      </el-form-item>
    </el-form>

    <upload />

    <el-tabs type="border-card">
      <el-tab-pane label="单片申请">
        <el-table :data="tableData" border>
          <el-table-column type="selection" width="55" />
          <el-table-column fixed prop="date" label="缩略图" header-align="center" />
          <el-table-column fixed prop="date" label="编码" header-align="center" />
          <el-table-column fixed prop="date" label="名称" header-align="center" />
          <el-table-column fixed prop="date" label="品类" header-align="center" />
          <el-table-column fixed prop="date" label="备注" header-align="center" />
          <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
          <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="临时总包申请">
        <el-table :data="tableData" border>
          <el-table-column type="selection" width="55" />
          <el-table-column fixed prop="date" label="缩略图" header-align="center" />
          <el-table-column fixed prop="date" label="编码" header-align="center" />
          <el-table-column fixed prop="date" label="名称" header-align="center" />
          <el-table-column fixed prop="date" label="品类" header-align="center" />
          <el-table-column fixed prop="date" label="备注" header-align="center" />
          <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
          <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="申请汇总(提交)">
        <el-table :data="tableData" border>
          <el-table-column type="selection" width="55" />
          <el-table-column fixed prop="date" label="缩略图" header-align="center" />
          <el-table-column fixed prop="date" label="编码" header-align="center" />
          <el-table-column fixed prop="date" label="名称" header-align="center" />
          <el-table-column fixed prop="date" label="品类" header-align="center" />
          <el-table-column fixed prop="date" label="备注" header-align="center" />
          <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
          <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import ChannelSelect from '../components/channel-select.vue'
import ProgramSelect from '../components/program-select.vue'
import upload from '../components/upload.vue'

export default {
  name: 'YearlyApply',
  components: {
    ChannelSelect,
    ProgramSelect,
    upload
  },
  data() {
    return {
      tableData: [],
      form: {
        order: '',
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
    addProgram() {

    }
  }
}
</script>

<style>

</style>

