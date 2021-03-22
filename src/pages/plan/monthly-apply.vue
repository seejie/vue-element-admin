<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="申请单号" label-width="72px">
        <el-input v-model="form.order" placeholder="请输入" style="width: 195px;" />
      </el-form-item>

      <el-form-item label="申请人" label-width="72px">
        <el-input v-model="form.user" placeholder="请输入" style="width: 195px;" />
      </el-form-item>

      <el-form-item label="部门" label-width="72px">
        <dept-select :data.sync="form.dept" />
      </el-form-item>

      <el-form-item label="申请月份" label-width="72px">
        <el-date-picker v-model="form.month" type="month" placeholder="选择月份" style="width: 100%;" />
      </el-form-item>

      <el-form-item label="使用渠道" label-width="72px">
        <channel-select :data="form.channel" />
      </el-form-item>

      <el-form-item label="用途" label-width="72px">
        <program-select :data="form.program" />
      </el-form-item>
    </el-form>

    <el-form inline>
      <el-form-item label="选择单片" label-width="72px">
        <products-select :data="form.products" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add">添加计划外SKU</el-button>
        <el-button type="primary" @click="apply">剩余量全部申请</el-button>
        <el-button type="primary" @click="submit">提交月度申请</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="缩略图" header-align="center" />
      <el-table-column prop="date" label="编码" header-align="center" />
      <el-table-column prop="date" label="名称" header-align="center" />
      <el-table-column prop="date" label="品类" header-align="center" />
      <el-table-column prop="date" label="规格" header-align="center" />
      <el-table-column prop="date" label="单片成本价" header-align="center" />
      <el-table-column prop="date" label="单片市场价" header-align="center" />
      <el-table-column prop="date" label="是否计划外" header-align="center" />
      <el-table-column prop="date" label="本次申请数量" header-align="center" />
      <el-table-column prop="date" label="申请备注" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="edit(row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import deptSelect from '../components/dept-select.vue'
import ChannelSelect from '../components/channel-select.vue'
import ProgramSelect from '../components/program-select.vue'
import ProductsSelect from '../components/products-select.vue'

export default {
  name: 'MonthlyApply',
  components: {
    deptSelect,
    ChannelSelect,
    ProgramSelect,
    ProductsSelect
  },
  data() {
    return {
      tableData: [],
      form: {
        order: '',
        user: '',
        dept: '',
        month: ''
      },
      products: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{ date: 'test' }]
    },
    edit(item) {
      console.log(item, '-----item-----')
    },
    add() {

    },
    apply() {

    }
  }
}
</script>

<style>

</style>

