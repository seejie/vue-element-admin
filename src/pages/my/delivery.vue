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
          <el-table-column prop="img" label="缩略图" header-align="center" align="center">
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
          <el-table-column prop="type" label="品类" header-align="center" />
          <el-table-column prop="note" label="备注" header-align="center" />
          <el-table-column prop="price" label="单片成本价" header-align="center" align="center" />
          <el-table-column prop="cost" label="单片市场价" header-align="center" align="center" />
          <el-table-column prop="date" label="本次申请 发货数量" header-align="center" />
          <el-table-column prop="date" label="本次申请发货 市场价" header-align="center" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="套包申请" name="ocGroup">
        <el-form inline>
          <el-form-item label="组包筛选">
            <products-select :data.sync="products" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="add">添加到列表</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="ocGroupData" border>
          <el-table-column prop="img" label="缩略图" header-align="center" align="center">
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
          <el-table-column prop="price" label="价格" header-align="center" align="center" />
          <el-table-column prop="count" label="本次申请数量" header-align="center" align="center" />
          <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
            <template slot-scope="{$index}">
              <el-button type="text" size="small" @click="del($index)">删除</el-button>
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
          <el-table-column prop="img" label="缩略图" header-align="center" align="center">
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
          <el-table-column prop="type" label="品类" header-align="center" />
          <el-table-column prop="note" label="备注" header-align="center" />
          <el-table-column prop="cost" label="单片成本价" header-align="center" align="center" />
          <el-table-column prop="price" label="单片市场价" header-align="center" align="center" />
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
      activeTab: 'apply',
      // activeTab: 'ocGroup',
      applyData: [{
        url: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        typs: 'AA-DS',
        price: 1.6,
        cost: 2
      }, {
        url: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        typs: 'AA-DS',
        price: 1.6,
        cost: 2
      }],
      ocGroupData: [{
        url: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        typs: 'AA-DS',
        price: 1.6,
        cost: 2
      }, {
        url: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        typs: 'AA-DS',
        price: 1.6,
        cost: 2
      }],
      collectData: [{
        url: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        typs: 'AA-DS',
        price: 1.6,
        cost: 2
      }, {
        url: '',
        id: '80025875',
        name: '娇韵诗双萃赋活精华露',
        typs: 'AA-DS',
        price: 1.6,
        cost: 2
      }]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.tableData = [{ date: 'test' }]
    },
    add() {
      this.ocGroupData.push(this.products)
    },
    submit() {

    },
    del(idx) {
      this.ocGroupData.splice(idx, 1)
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
