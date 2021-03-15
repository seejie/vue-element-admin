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
  name: 'SpecsSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('specsOpts'),
    curr() {
      return this.data
    },
    options() {
      return this.specsOpts
    }
  },
  methods: {
    getData() {
      if (this.specsOpts.length) return
      this.options = [{ label: 'test', value: 'test' }]
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
