<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="单片编码/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="单片市场价" label-width="82px">
        <el-input v-model="form.price" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="品类" label-width="40px">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="产品线" label-width="54px">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="有效时间" label-width="68px">
        <el-col :span="11">
          <el-date-picker v-model="form.sDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.eDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="规格" label-width="54px">
        <specs-select :data.sync="form.specs" />
      </el-form-item>

      <el-form-item label="毫升数" label-width="54px">
        <el-input v-model="form.size" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="毫升数" label-width="54px">
        <el-button type="primary" @click="search">检索</el-button>
        <el-button type="primary" @click="create">新建</el-button>
        <el-button type="primary" @click="importData">导入</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column fixed prop="date" label="缩略图" header-align="center" />
      <el-table-column fixed prop="date" label="编码" header-align="center" />
      <el-table-column fixed prop="date" label="名称" header-align="center" />
      <el-table-column fixed prop="date" label="品类" header-align="center" />
      <el-table-column fixed prop="date" label="规格" header-align="center" />
      <el-table-column fixed prop="date" label="产品线" header-align="center" />
      <el-table-column fixed prop="date" label="单片成本价" header-align="center" />
      <el-table-column fixed prop="date" label="单片市场价" header-align="center" />
      <el-table-column fixed prop="date" label="正装售价" header-align="center" />
      <el-table-column fixed prop="date" label="正装毫升数" header-align="center" />
      <el-table-column fixed prop="date" label="小样毫升数" header-align="center" />
      <el-table-column fixed prop="date" label="生效日期" header-align="center" />
      <el-table-column fixed prop="date" label="失效日期" header-align="center" />
      <el-table-column fixed prop="date" label="备注" header-align="center" />
      <el-table-column fixed prop="date" label="替换产品" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="download(scope.row)">下载高清图</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import productTypeSelect from '../components/product-type-select.vue'
import productLineSelect from '../components/product-line-select.vue'
import SpecsSelect from '../components/specs-select.vue'

export default {
  name: 'OC',
  components: {
    productTypeSelect,
    productLineSelect,
    SpecsSelect
  },
  data() {
    return {
      tableData: [],
      form: {
        name: '',
        price: '',
        prodType: '',
        prodLine: '',
        sDate: '',
        eDate: '',
        specs: '',
        size: ''
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
    edit(item) {
      console.log(item, '-----item-----')
    },
    download(item) {
      console.log(item, '-----item-----')
    },
    search() {

    },
    create() {

    },
    importData() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-col-2{
  text-align: center;
}
</style>
