<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="部门" label-width="72px">
        <dept-select :data.sync="form.dept" />
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

      <el-form-item label="品类" label-width="72px">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="产品线" label-width="72px">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="OC编号/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" style="width: 195px;" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import deptSelect from '../components/dept-select.vue'
import ProductLineSelect from '../components/product-line-select.vue'
import ProductTypeSelect from '../components/product-type-select.vue'
import ProgramSelect from '../components/program-select.vue'
export default {
  name: 'Monthly',
  components: { deptSelect, ProgramSelect, ProductTypeSelect, ProductLineSelect },
  data() {
    return {
      form: {
        dept: '',
        program: '',
        prodType: '',
        prodLine: '',
        name: ''
      }
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
