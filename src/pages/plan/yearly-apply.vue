<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="申请单号" label-width="72px">
        <el-input v-model="form.order" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="使用渠道" label-width="72px">
        <channel-select :data="form.channel" />
      </el-form-item>

      <el-form-item label="用途" label-width="40px">
        <program-select :data="form.program" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addProgram">New Program</el-button>
      </el-form-item>
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

      <el-tab-pane label="临时总包申请" name="ocGroup">
        <el-form inline>
          <el-form-item label="临时组包筛选">
            <oc-group-select :data.sync="group" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="edit">编辑</el-button>
            <el-button type="primary" @click="add">新增临时组包</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="ocGroupData" border>
          <el-table-column prop="id" label="临时编码" header-align="center" align="center" />
          <el-table-column prop="name" label="临时组包描述" header-align="center">
            <template slot-scope="{row}">
              <el-popover
                placement="right"
                width="400"
                trigger="click"
              >
                <el-table :data="gridData">
                  <el-table-column width="150" property="date" label="日期" />
                  <el-table-column width="100" property="name" label="姓名" />
                  <el-table-column width="300" property="address" label="地址" />
                </el-table>
                <el-button slot="reference" type="text">{{ row.name }}</el-button>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
            <template slot-scope="{$index}">
              <el-button type="text" size="small" @click="del($index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="申请汇总(提交)" name="collect">
        <div class="panel">
          <span>以下单片列表包括：单片申请和临时组包申请中所有单片的汇总数字</span>
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
import ChannelSelect from '../components/channel-select.vue'
import ProgramSelect from '../components/program-select.vue'
import upload from '../components/upload.vue'
import productsSelect from '../components/products-select.vue'
import OcGroupSelect from '../components/oc-group-select.vue'

export default {
  name: 'YearlyApply',
  components: {
    ChannelSelect,
    ProgramSelect,
    upload,
    productsSelect,
    OcGroupSelect
  },
  data() {
    return {
      form: {
        order: '',
        channel: '',
        program: ''
      },
      products: '',
      group: '',
      activeTab: 'apply',
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
        id: 'L2021030100011',
        name: '2028年春节促销装 7'
      }, {
        id: 'L2021030100012',
        name: '2028年春节促销装 2'
      }],
      gridData: [],
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
    addProgram() {

    },
    edit() {

    },
    add() {

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

