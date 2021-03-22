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
      <el-table-column prop="date" label="Order" header-align="center" />
      <el-table-column prop="date" label="Customer Code" header-align="center" />
      <el-table-column prop="date" label="Store" header-align="center" />
      <el-table-column prop="date" label="Date" header-align="center" />
      <el-table-column prop="date" label="Brand" header-align="center" />
      <el-table-column prop="date" label="Family" header-align="center" />
      <el-table-column prop="date" label="Type-1" header-align="center" />
      <el-table-column prop="date" label="SKU" header-align="center" />
      <el-table-column prop="date" label="SKU Desc" header-align="center" />
      <el-table-column prop="date" label="FOC QTY" header-align="center" />
      <el-table-column prop="date" label="ORDER REFERENCE" header-align="center" />
    </el-table>
  </div>
</template>

<script>
import upload from '../components/upload.vue'
export default {
  name: 'Delivery',
  components: { upload },
  data() {
    return {
      tableData: [],
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
    getList() {
      this.tableData = [{ date: 'test' }]
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
.upload-box{
  .el-upload-dragger{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-upload{
      font-size: 18px;
      line-height: 1;
      margin: 0 .5rem;
    }
  }
}
</style>
