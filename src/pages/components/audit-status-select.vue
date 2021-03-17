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
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AuditStatusSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('base', ['auditStatusOpts']),
    curr: {
      set(item) {
        this.$emit('update:data', item)
      },
      get() {
        return this.data
      }
    },
    options() {
      return this.auditStatusOpts
    }
  },
  methods: {
    ...mapMutations('base', ['setAuditStatusOpts']),
    getData() {
      if (this.auditStatusOpts.length) return
      this.setAuditStatusOpts([{ label: 'test', value: 'test' }])
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
