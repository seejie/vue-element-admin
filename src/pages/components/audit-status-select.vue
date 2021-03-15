<template>
  <el-select
    v-model="curr"
    @change="onChanged"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AuditStatusSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState(['auditStatusOpts']),
    curr() {
      return this.data
    },
    options() {
      return this.auditStatusOpts
    }
  },
  methods: {
    getData() {
      if (this.auditStatusOpts.length) return
      this.options = [{ label: 'test', value: 'test' }]
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
