<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="发货单号" label-width="72px">
        <el-input v-model="form.order" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="Customer" label-width="72px">
        <el-input v-model="form.user" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="发货日期" label-width="72px">
        <span class="date-wrapper">
          <el-date-picker v-model="form.sDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
        <span class="line">-</span>
        <span class="date-wrapper">
          <el-date-picker v-model="form.eDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
      </el-form-item>

      <el-form-item label="SKU Code/Name" label-width="132px">
        <el-input v-model="form.code" placeholder="请输入" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>
    </el-form>

    <upload />

    <el-table :data="tableData" border>
      <el-table-column prop="order" label="Order" header-align="center" align="center" />
      <el-table-column prop="code" label="Customer Code" header-align="center" align="center" />
      <el-table-column prop="store" label="Store" header-align="center" />
      <el-table-column prop="date" label="Date" header-align="center" align="center" />
      <el-table-column prop="brand" label="Brand" header-align="center" align="center" />
      <el-table-column prop="family" label="Family" header-align="center" align="center" />
      <el-table-column prop="type" label="Type-1" header-align="center" align="center" />
      <el-table-column prop="sku" label="SKU" header-align="center" align="center" />
      <el-table-column prop="desc" label="SKU Desc" header-align="center" />
      <el-table-column prop="qty" label="FOC QTY" header-align="center" align="center" />
      <el-table-column prop="ref" label="ORDER REFERENCE" header-align="center" />
    </el-table>
  </div>
</template>

<script>
import upload from '../components/upload.vue'
import { actualDelivery } from '../../api/index'

export default {
  name: 'Delivery',
  components: { upload },
  data() {
    return {
      tableData: [{
        order: '257230',
        code: '80023007',
        store: 'Store Name 1',
        date: '2020/9/17',
        brand: 'CL',
        family: 'S',
        type: 'OC',
        sku: '80025875',
        desc: '娇韵诗双萃赋活精华露',
        qty: '30',
        ref: 'BOFG201101080'
      }],
      form: {
        order: '',
        user: '',
        sDate: '',
        eDate: '',
        code: ''
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await actualDelivery()
      console.log(res, '-----res-----')
    },
    search() {

    },
    upload() {

    },
    download() {

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

<style lang="scss">

</style>
