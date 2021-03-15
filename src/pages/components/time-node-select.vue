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
  name: 'TimeNodeSelect',
  props: ['data', 'type'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('timeNodeOpts'),
    curr() {
      return this.data
    },
    options() {
      return this.timeNodeOpts
    }
  },
  methods: {
    getData() {
      if (this.timeNodeOpts.length) return
      this.options = [{ label: 'test', value: 'test' }]
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
