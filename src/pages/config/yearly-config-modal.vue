<template>
  <el-dialog
    title="年度设置"
    :visible="dialogVisible"
    width="800px"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="年度时间">
        <el-col :span="11">
          <el-date-picker v-model="form.sDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.eDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="年度备注">
        <el-input v-model="form.note" type="textarea" />
      </el-form-item>

      <el-form-item label="选择单片">
        <el-col :span="14">
          <products-select :data.sync="form.product" />
        </el-col>
        <el-col class="line" :span="1" style="visibility: hidden;">-</el-col>
        <el-col :span="9" style="text-align: right;">
          <el-button type="primary" @click="add">添加年度列表</el-button>
        </el-col>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="编号" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="address" label="备注">
        <template slot-scope="{row}">
          <el-input v-if="row.edit" v-model="row.note" placeholder="请输入" />
          <template v-else>
            {{ row.note }}
          </template>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
        <template slot-scope="{row, $index}">
          <el-button v-if="row.edit" type="text" size="small" @click="done(row)">完成</el-button>
          <el-button v-else type="text" size="small" @click="edit(row)">编辑</el-button>
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
import { mapState } from 'vuex'

export default {
  name: 'YearlyConfigModal',
  components: { productsSelect },
  props: ['visible'],
  data() {
    return {
      form: {
        sDate: '',
        eDate: '',
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
  methods: {
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
      this.$set(curr, 'edit', false)
      this.$set(curr, 'note', '')
      this.tableData.push(curr)
    },
    handleClose() {
      this.dialogVisible = false
    },
    confrim() {
      console.log(this.form, '-----this.form-----')
      console.log(this.tableData, '-----this.tableData-----')
      this.dialogVisible = false
    },
    edit(item) {
      this.$set(item, 'edit', true)
    },
    del(idx) {
      this.tableData.splice(idx, 1)
    },
    done(item) {
      this.$set(item, 'edit', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col-2{
  text-align: center;
}
</style>
