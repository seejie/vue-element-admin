<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="申请人" label-width="102px">
        <el-input v-model="form.user" placeholder="请输入" style="width:195px" />
      </el-form-item>

      <el-form-item label="用途" label-width="102px">
        <program-select :data.sync="form.program" />
      </el-form-item>

      <el-form-item label="FCST 月份" label-width="102px">
        <span class="date-wrapper">
          <el-date-picker v-model="form.sMonth" type="month" placeholder="选择月份" style="width: 100%;" />
        </span>
        <span class="line">-</span>
        <span class="date-wrapper">
          <el-date-picker v-model="form.eMonth" type="month" placeholder="选择月份" style="width: 100%;" />
        </span>
      </el-form-item>

      <el-form-item label="产品线" label-width="102px">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="品类" label-width="102px">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="OC编码/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" style="width:195px" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
        <el-button type="primary" @click="exportData">导出EXCEL</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="Function" header-align="center" />
      <el-table-column fixed prop="date" label="申请人" header-align="center" />
      <el-table-column fixed prop="date" label="Program" header-align="center" />
      <el-table-column fixed prop="date" label="Category" header-align="center" />
      <el-table-column fixed prop="date" label="产品线" header-align="center" />
      <el-table-column fixed prop="date" label="OC 编码" header-align="center" />
      <el-table-column fixed prop="date" label="OC 名称" header-align="center" />
      <el-table-column fixed prop="date" label="类型" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 月份" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 数量" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 申请数量" header-align="center" />
      <el-table-column fixed prop="date" label="FCST 申请发货进度" header-align="center" />
      <el-table-column fixed prop="date" label="已申请 发货总次数" header-align="center" />
      <el-table-column fixed prop="date" label="申请发货 总数量" header-align="center" />
    </el-table>

    <el-pagination
      :current-page="currPage"
      :page-sizes="pageOptions"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import programSelect from '../components/program-select.vue'
import productLineSelect from '../components/product-line-select.vue'
import productTypeSelect from '../components/product-type-select.vue'
import { queryFCST, exportFSCT } from '../../api/index'

export default {
  name: 'FCST',
  components: {
    programSelect,
    productLineSelect,
    productTypeSelect
  },
  data() {
    return {
      tableData: [],
      form: {
        user: '',
        program: '',
        sMonth: '',
        eMonth: '',

        prodType: '',
        prodLine: '',
        name: '',
        sDate: '',
        eDate: '',
        type: '',
        order: ''
      },
      currPage: 1,
      total: 0,
      pageOptions: [100, 200, 300, 400]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await queryFCST()
      console.log(res, '-----res-----')
      this.tableData = [{ date: 'test' }]
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    search() {

    },
    async exportData() {
      const res = await exportFSCT()
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
.el-pagination{
  margin-top: 1rem;
  text-align: right;
}
</style>
