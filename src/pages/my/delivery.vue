<template>
  <div class="wrapper">
    <el-form inline label-width="102px">
      <el-form-item label="申请单号">{{ order }}</el-form-item>
      <el-form-item label="申请日期">{{ date }}</el-form-item>
      <el-form-item label="申请人">{{ user }}</el-form-item>
      <el-form-item label="发货申请月份">{{ month }}</el-form-item>
      <el-form-item label="部门">{{ dept }}</el-form-item>
      <el-form-item label="使用渠道">{{ chanel }}</el-form-item>
      <el-form-item label="用途">{{ program }}</el-form-item>
    </el-form>

    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane label="单片申请" name="apply">
        <el-form inline>
          <el-form-item label="单片名称">
            <products-select :data.sync="products" />
          </el-form-item>
          <el-form-item>
            <upload />
          </el-form-item>
        </el-form>

        <el-table :data="applyData" border>
          <el-table-column prop="date" label="缩略图" header-align="center" />
          <el-table-column prop="date" label="编码" header-align="center" />
          <el-table-column prop="date" label="名称" header-align="center" />
          <el-table-column prop="date" label="品类" header-align="center" />
          <el-table-column prop="date" label="备注" header-align="center" />
          <el-table-column prop="date" label="单片成本价" header-align="center" />
          <el-table-column prop="date" label="单片市场价" header-align="center" />
          <el-table-column prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="套包申请" name="ocGroup">
        <el-form inline>
          <el-form-item label="临时组包筛选">
            <products-select :data.sync="products" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="edit">编辑</el-button>
            <el-button type="primary" @click="create">新增临时组包</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="ocGroupData" border>
          <el-table-column prop="date" label="临时组包编码" header-align="center" />
          <el-table-column prop="date" label="临时组包描述" header-align="center">
            <template slot-scope="{row}">
              <i class="el-icon-time" />
              <span style="margin-left: 10px">{{ row.date }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="单片汇总" name="collect">
        <div class="panel">
          <span>以下单片列表包括：单片申请和临时组包申请中所有的单片汇总数字</span>
          <el-button type="primary" @click="submit">提交FSCT年度申请</el-button>
        </div>
        <el-table :data="collectData" border>
          <el-table-column prop="date" label="缩略图" header-align="center" />
          <el-table-column prop="date" label="编码" header-align="center" />
          <el-table-column prop="date" label="名称" header-align="center" />
          <el-table-column prop="date" label="品类" header-align="center" />
          <el-table-column prop="date" label="备注" header-align="center" />
          <el-table-column prop="date" label="单片成本价" header-align="center" />
          <el-table-column prop="date" label="单片市场价" header-align="center" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import productsSelect from '../components/products-select.vue'
import Upload from '../components/upload.vue'
export default {
  name: 'Delivery',
  components: { productsSelect, Upload },
  data() {
    return {
      order: '',
      date: '',
      user: '',
      month: '',
      dept: '',
      chanel: '',
      program: '',
      products: '',
      // activeTab: 'apply',
      activeTab: 'collect',
      applyData: [],
      ocGroupData: [],
      collectData: [],
      showModal: false
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{ date: 'test' }]
    },
    edit() {
      this.showModal = true
    },
    create() {
      this.showModal = true
    },
    submit() {

    }
  }
}
</script>

<style lang="scss" scoped>
.panel{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  span{
    flex: 1;
    text-decoration: underline;
  }
}
</style>
