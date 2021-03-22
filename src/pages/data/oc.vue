<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="单片编码/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" style="width:345px;" />
      </el-form-item>

      <el-form-item label="单片市场价" label-width="102px">
        <span class="number-wrapper">
          <el-input v-model="form.price" placeholder="请输入" />
        </span>
        <span class="line">-</span>
        <span class="number-wrapper">
          <el-input v-model="form.price" placeholder="请输入" />
        </span>
      </el-form-item>

      <el-form-item label="品类" label-width="102px">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="产品线" label-width="102px">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="有效时间" label-width="102px">
        <span class="date-wrapper">
          <el-date-picker v-model="form.sDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
        <span class="line">-</span>
        <span class="date-wrapper">
          <el-date-picker v-model="form.eDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </span>
      </el-form-item>

      <el-form-item label="规格" label-width="102px">
        <specs-select :data.sync="form.specs" />
      </el-form-item>

      <el-form-item label="毫升数" label-width="102px">
        <el-input v-model="form.size" placeholder="请输入" style="width:195px" />
      </el-form-item>

      <el-form-item label=" " label-width="50px">
        <el-button type="primary" @click="search">检索</el-button>
        <el-button type="primary" @click="create">新建</el-button>
        <el-button type="primary" @click="importData">导入</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column prop="date" label="缩略图" width="130px" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-image
            style="width: 100px; height: 100px"
            :src="row.img"
            :preview-src-list="[row.img]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="id" label="编码" header-align="center" align="center" />
      <el-table-column prop="name" label="名称" header-align="center" />
      <el-table-column prop="type" label="品类" header-align="center" align="center" />
      <el-table-column prop="specs" label="规格" header-align="center" align="center" />
      <el-table-column prop="line" label="产品线" header-align="center" align="center" />
      <el-table-column prop="cost" label="单片成本价" header-align="center" align="center" />
      <el-table-column prop="price" label="单片市场价" header-align="center" align="center" />
      <el-table-column prop="date" label="正装售价" header-align="center" />
      <el-table-column prop="date" label="正装毫升数" header-align="center" />
      <el-table-column prop="date" label="小样毫升数" header-align="center" />
      <el-table-column prop="effect" label="生效日期" header-align="center" />
      <el-table-column prop="expiry" label="失效日期" header-align="center" />
      <el-table-column prop="note" label="备注" header-align="center" />
      <el-table-column prop="substitute" label="替换产品" header-align="center" />
      <el-table-column fixed="right" label="操作" width="160" header-align="center" align="center">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="edit(row)">编辑</el-button>
          <el-button type="text" size="small" @click="download(row)">下载高清图</el-button>
        </template>
      </el-table-column>
    </el-table>

    <set-oc
      :id="currId"
      :visible.sync="showModal"
    />

    <import-oc
      :visible.sync="showImportModal"
    />
  </div>
</template>

<script>
import productTypeSelect from '../components/product-type-select.vue'
import productLineSelect from '../components/product-line-select.vue'
import SpecsSelect from '../components/specs-select.vue'
import { getOc } from '../../api/index'
import ImportOc from './import-oc.vue'
import SetOc from './set-oc.vue'

export default {
  name: 'OC',
  components: {
    productTypeSelect,
    productLineSelect,
    SpecsSelect,
    ImportOc,
    SetOc
  },
  data() {
    return {
      tableData: [{
        img: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        type: '面部',
        specs: 'T',
        line: '保湿',
        cost: '1.0',
        price: '1.26'
      }],
      form: {
        name: '',
        price: '',
        prodType: '',
        prodLine: '',
        sDate: '',
        eDate: '',
        specs: '',
        size: ''
      },
      currId: '',
      showModal: false,
      showImportModal: false
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await getOc()
      console.log(res, '-----res-----')
    },
    edit(item) {
      console.log(item, '-----item-----')
      this.currId = item.id || ''
      this.showModal = true
    },
    download(item) {
      console.log(item, '-----item-----')
    },
    search() {

    },
    create() {
      this.currId = ''
      this.showModal = true
    },
    importData() {
      this.showImportModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.date-wrapper {
  display: inline-block;
  width: 160px;
}
.number-wrapper{
  display: inline-block;
  width: 84px;
}
.line {
  margin: 0 10px;
}
</style>
