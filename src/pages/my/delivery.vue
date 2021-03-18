<template>
  <div class="wrapper">
    <el-form inline>
      <el-form-item label="申请单号" label-width="102px">
        {{ order }}
      </el-form-item>

      <el-form-item label="申请日期" label-width="102px">
        {{ date }}
      </el-form-item>

      <el-form-item label="申请人" label-width="102px">
        {{ user }}
      </el-form-item>

      <el-form-item label="发货申请月份" label-width="102px">
        {{ month }}
      </el-form-item>

      <el-form-item label="部门" label-width="102px">
        {{ dept }}
      </el-form-item>

      <el-form-item label="使用渠道" label-width="102px">
        {{ chanel }}
      </el-form-item>

      <el-form-item label="用途" label-width="102px">
        {{ program }}
      </el-form-item>
    </el-form>

    <el-tabs type="border-card">
      <el-tab-pane label="单片申请">
        <el-table :data="tableData" border>
          <el-table-column fixed prop="date" label="缩略图" header-align="center" />
          <el-table-column fixed prop="date" label="编码" header-align="center" />
          <el-table-column fixed prop="date" label="名称" header-align="center" />
          <el-table-column fixed prop="date" label="品类" header-align="center" />
          <el-table-column fixed prop="date" label="备注" header-align="center" />
          <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
          <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
          <el-table-column fixed prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column fixed prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="套包申请">
        <el-table :data="tableData" border>
          <el-table-column fixed prop="date" label="缩略图" header-align="center" />
          <el-table-column fixed prop="date" label="编码" header-align="center" />
          <el-table-column fixed prop="date" label="名称" header-align="center" />
          <el-table-column fixed prop="date" label="品类" header-align="center" />
          <el-table-column fixed prop="date" label="备注" header-align="center" />
          <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
          <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
          <el-table-column fixed prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column fixed prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="单片汇总">
        <el-table :data="tableData" border>
          <el-table-column fixed prop="date" label="缩略图" header-align="center" />
          <el-table-column fixed prop="date" label="编码" header-align="center" />
          <el-table-column fixed prop="date" label="名称" header-align="center" />
          <el-table-column fixed prop="date" label="品类" header-align="center" />
          <el-table-column fixed prop="date" label="备注" header-align="center" />
          <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
          <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
          <el-table-column fixed prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column fixed prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data() {
    return {
      tableData: [],
      order: '',
      date: '',
      user: '',
      month: '',
      dept: '',
      chanel: '',
      program: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{ date: 'test' }]
    }
  }
}
</script>

<style>

</style>

