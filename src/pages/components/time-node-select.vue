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
  name: 'TimeNodeSelect',
  props: ['data', 'type'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('base', ['timeNodeOpts']),
    curr: {
      set(item) {
        this.$emit('update:data', item)
      },
      get() {
        return this.data
      }
    },
    options() {
      return this.timeNodeOpts
    }
  },
  methods: {
    ...mapMutations('base', ['setTimeNodeOpts']),
    getData() {
      if (this.timeNodeOpts.length) return
      this.setTimeNodeOpts([{ label: 'test', value: 'test' }])
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
