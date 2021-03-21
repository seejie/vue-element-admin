<template>
  <el-dialog
    title="OC导入"
    :visible="dialogVisible"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form :model="form" label-width="102px" inline>
      <el-form-item label="编号">
        <el-input v-model="form.order" type="text" />
      </el-form-item>

      <el-form-item label="名称">
        <el-input v-model="form.name" type="text" />
      </el-form-item>

      <el-form-item label="品类">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="产品线">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="类型">
        <product-type-select :data.sync="form.type" />
      </el-form-item>

      <el-form-item label="有效时间">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width: 260px;"
        />
      </el-form-item>

      <el-form-item label="正装售价">
        <el-input v-model="form.price" type="text" />
      </el-form-item>

      <el-form-item label="正装毫升">
        <el-input v-model="form.ml" type="text" />
      </el-form-item>

      <el-form-item label="单片成本价">
        <el-input v-model="form.sampleCost" type="text" />
      </el-form-item>

      <el-form-item label="单片毫升">
        <el-input v-model="form.sampleMl" type="text" />
      </el-form-item>

      <el-form-item label="单片市场价">
        <el-input v-model="form.samplePrice" type="text" />
      </el-form-item>

      <el-form-item label="替换产品">
        <el-input v-model="form.substitute" type="text" />
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="form.note" type="textarea" style="width: 632px;" />
      </el-form-item>

      <el-form-item label="图片">
        <div class="wrapper">
          <el-image
            style="width: 100px; height: 100px"
            :src="form.img"
            :preview-src-list="[form.img]"
          />
          <el-button type="text">点此更新</el-button>
        </div>
      </el-form-item>

    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confrim">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import ProductLineSelect from '../components/product-line-select.vue'
import productTypeSelect from '../components/product-type-select.vue'
import { getOcDetail, editOcGroup } from '../../api/index'

export default {
  name: 'SetOc',
  components: { productTypeSelect, ProductLineSelect },
  props: ['visible', 'id'],
  data() {
    return {
      form: {
        order: '',
        name: '',
        prodType: '',
        prodLine: '',
        type: '',
        date: '',
        price: '',
        ml: '',
        sampleCost: '',
        sampleMl: '',
        samplePrice: '',
        note: '',
        substitute: '',
        img: ''
      }
    }
  },
  computed: {
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
      const res = await getOcDetail()
      console.log(res, '-----res-----')
    },
    async confrim() {
      console.log(this.form, '-----this.form-----')
      console.log(this.tableData, '-----this.tableData-----')
      this.dialogVisible = false
      const res = await editOcGroup()
      console.log(res, '-----res-----')
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input,
.el-select{
  width: 260px;
}
.wrapper{
  display: flex;
  align-items: center;
  .el-button{
    margin-left: 1rem;
  }
}
</style>
