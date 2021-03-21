<template>
  <el-dialog
    title="年度设置"
    :visible="dialogVisible"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form :model="form" label-width="80px">
      <el-form-item label="年度时间">
        <el-date-picker
          v-model="form.daterange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>

      <el-form-item label="年度备注">
        <el-input v-model="form.note" type="textarea" style="width: 350px;" />
      </el-form-item>

      <el-form-item label="选择单片">
        <products-select :data.sync="form.product" />
        <el-button type="primary" style="margin-left: 1rem;" @click="add">添加年度列表</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="编号" />
      <el-table-column prop="name" label="名称" />
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
import { getScheduleDetail, addSchedule } from '../../api/index'

export default {
  name: 'YearlyConfigModal',
  components: { productsSelect },
  props: ['visible', 'id'],
  data() {
    return {
      form: {
        daterange: '',
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
      const res = await getScheduleDetail(this.id)
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
      this.$set(curr, 'edit', false)
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
      const res = await addSchedule()
      console.log(res, '-----res-----')
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

</style>
