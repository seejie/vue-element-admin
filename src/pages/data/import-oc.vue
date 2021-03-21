<template>
  <el-dialog
    title="OC导入"
    :visible="dialogVisible"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form label-width="80px">
      <upload />
    </el-form>

    <div class="tips">
      上传结果。（以下内容仅显示失败结果）
    </div>

    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="行号" width="60px" />
      <el-table-column prop="name" label="处理状态" width="200px" />
      <el-table-column prop="address" label="失败原因" />
    </el-table>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">返 回</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import upload from '../components/upload.vue'
export default {
  name: 'ImportOc',
  components: { upload },
  props: ['visible', 'id'],
  data() {
    return {
      tableData: []
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
  methods: {
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  margin-bottom: 1rem;
}
</style>
