<template>
  <div class="wrapper">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="Order" header-align="center" />
      <el-table-column fixed prop="date" label="Customer Code" header-align="center" />
      <el-table-column fixed prop="date" label="Store" header-align="center" />
      <el-table-column fixed prop="date" label="Date" header-align="center" />
      <el-table-column fixed prop="date" label="Brand" header-align="center" />
      <el-table-column fixed prop="date" label="Family" header-align="center" />
      <el-table-column fixed prop="date" label="Type-1" header-align="center" />
      <el-table-column fixed prop="date" label="SKU" header-align="center" />
      <el-table-column fixed prop="date" label="SKU Desc" header-align="center" />
      <el-table-column fixed prop="date" label="FOC QTY" header-align="center" />
      <el-table-column fixed prop="date" label="ORDER REFERENCE" header-align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data() {
    return {
      tableData: []
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

