<template>
  <div class="wrapper">
    <div class="operation-pannel">
      <div class="row">
        <div class="item">
          <span>单片编码/名称</span>
          <el-input v-model="name" placeholder="请输入" />
        </div>

        <div class="item">
          <span>单片市场价</span>

        </div>

        <div class="item">
          <span>品类</span>
          <product-type-select :data.sync="prodType" />
        </div>

        <div class="item">
          <span>产品线</span>
          <product-line-select :data.sync="prodLine" />
        </div>

        <div class="item">
          <span>有效时间</span>
          <specs-select :data.sync="prodLine" />
        </div>

        <div class="item">
          <span>规格</span>
          <product-line-select :data.sync="prodLine" />
        </div>

        <div class="item">
          <span>毫升数</span>
          <el-input v-model="name" placeholder="请输入" />
        </div>
        <el-button type="primary" @click="search">检索</el-button>
      </div>

      <div class="row">
        <el-button type="primary" @click="create">新增组包</el-button>
        <div class="upload-wrapper">
          <span>批量导入组包</span>
          <div>upload</div>
        </div>
        <el-button type="primary" @click="upload">上传</el-button>
        <el-button type="text" @click="upload">下载导入模板</el-button>
      </div>
    </div>

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
      name: '',
      prodType: '',
      prodLine: ''
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
    }
  }
}
</script>

<style lang="scss" scoped>
.operation-pannel{
  margin-bottom: 1.5rem;
  .row{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &+.row{
      margin-top: 1rem;
    }
    .upload-wrapper{
      flex:1;
      display:flex;
      margin: 0 1rem;
    }
    .item{
      min-width: 200px;
      span{
        min-width: 120px;
      }
    }
    &:nth-child(1) {
      .el-button {
        margin-left: 1rem;
      }
    }
  }
  .el-input{
    margin: 0 1rem;
    width: 195px;
  }
}
</style>
