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
  name: 'SpecsSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('base', ['specsOpts']),
    curr: {
      set(item) {
        this.$emit('update:data', item)
      },
      get() {
        return this.data
      }
    },
    options() {
      return this.specsOpts
    }
  },
  methods: {
    ...mapMutations('base', ['setSpecsOpts']),
    getData() {
      if (this.specsOpts.length) return
      this.setSpecsOpts([{ label: 'test', value: 'test' }])
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
