<template>
  <el-dialog
    title="年度设置"
    :visible="dialogVisible || true"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form :model="form" label-width="80px">
      <el-form-item label="组包编号">
        <el-input v-model="form.order" type="text" style="width: 350px;" />
      </el-form-item>

      <el-form-item label="选择部门">
        <dept-select :data.sync="form.dept" />
      </el-form-item>

      <el-form-item label="年度备注">
        <el-input v-model="form.note" type="textarea" style="width: 350px;" />
      </el-form-item>

      <el-form-item label="选择单片">
        <products-select :data.sync="form.product" />
        <el-button type="primary" style="margin-left: 1rem;" @click="add">添加组包列表</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="缩略图" />
      <el-table-column prop="name" label="编号" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="name" label="成本价" />
      <el-table-column prop="address" label="备注" />
      <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
        <template slot-scope="{$index}">
          <el-button type="text" size="small" @click="del($index)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confrim">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import productsSelect from '../components/products-select.vue'
import DeptSelect from '../components/dept-select.vue'
import { getOcGroupDetail, addOcGroup } from '../../api/index'
import { mapState } from 'vuex'

export default {
  name: 'SetOcGroup',
  components: {
    productsSelect,
    DeptSelect
  },
  props: ['visible', 'id'],
  data() {
    return {
      form: {
        order: '',
        dept: '',
        note: '',
        product: ''
      },
      tableData: []
    }
  },
  computed: {
    ...mapState('base', ['productsOpts']),
    dialogVisible: {
      get() {
        return this.visible
      },
      set(bool) {
        this.$emit('update:visible', bool)
      }
    }
  },
  watch: {
    id(v) {
      if (!v) return
      this.getDetail()
    }
  },
  methods: {
    async getDetail() {
      const res = await getOcGroupDetail(this.id)
      console.log(res, '-----res-----')
    },
    add() {
      const { product } = this.form
      if (!product) {
        this.$message({
          type: 'info',
          message: '请先选择要添加的单片'
        })
        return
      }
      const curr = this.productsOpts.find(el => el.value === this.form.product)
      this.$set(curr, 'note', '')
      this.tableData.push(curr)
    },
    handleClose() {
      this.dialogVisible = false
    },
    async confrim() {
      console.log(this.form, '-----this.form-----')
      console.log(this.tableData, '-----this.tableData-----')
      this.dialogVisible = false
      const res = addOcGroup()
      console.log(res, '-----res-----')
    },
    del(idx) {
      this.tableData.splice(idx, 1)
    }
  }
}
</script>

<style>

</style>
