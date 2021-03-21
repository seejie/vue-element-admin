<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="品类" label-width="102px">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="产品线" label-width="102px">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="OC编码/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" style="width:195px" />
      </el-form-item>

      <el-form-item label="计划发货年月" label-width="102px">
        <span class="date-wrapper">
          <el-date-picker v-model="form.sDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
        <span class="line">-</span>
        <span class="date-wrapper">
          <el-date-picker v-model="form.eDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
      </el-form-item>

      <el-form-item label="汇总维度" label-width="102px">
        <el-select
          v-model="form.type"
          @change="onTypeChanged"
        >
          <el-option label="单片" value="单片" />
          <el-option label="套包" value="套包" />
        </el-select>
      </el-form-item>

      <el-form-item label="发货单号" label-width="102px">
        <el-input v-model="form.order" placeholder="请输入" style="width:195px" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="品类" header-align="center" />
      <el-table-column fixed prop="date" label="产品线" header-align="center" />
      <el-table-column fixed prop="date" label="SKU" header-align="center" />
      <el-table-column fixed prop="date" label="SKU Desc" header-align="center" />
      <el-table-column fixed prop="date" label="FOC QTY" header-align="center" />
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
import productTypeSelect from '../components/product-type-select.vue'
import productLineSelect from '../components/product-line-select.vue'
import { queryActual } from '../../api/index'

export default {
  name: 'Actual',
  components: {
    productTypeSelect,
    productLineSelect
  },
  data() {
    return {
      tableData: [],
      form: {
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
      const res = await queryActual()
      console.log(res, '-----res-----')
      this.tableData = [{ date: 'test' }]
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    onTypeChanged() {

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
.el-pagination{
  margin-top: 1rem;
  text-align: right;
}
</style>
